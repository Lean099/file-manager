import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream, readdir, unlink } from 'fs'
import path from 'path'
import File from "../models/File";
import User from "../models/User";
import cloudinary from 'cloudinary'
import bcrypt from 'bcryptjs'

cloudinary.config({
    cloud_name: 'lean99',
    api_key: '721843881581849',
    api_secret: 'VVgCNgUjFncGbG26pj0wPGEMFGQ'
})

const saveFileWithStream = ({ filename, mimetype, stream, id })=>{
  const pathL = path.join(__dirname,'../', `./public/${filename}`)
  return new Promise((resolve, reject)=>
    stream
    .pipe(createWriteStream(pathL))
    .on("finish", async ()=>{

      readdir(path.join(__dirname,'../', './public'), async (error, files)=>{
        if(error){
            throw error
        }
        const url = path.join(__dirname,"../", "./public/"+files[0])
        const filenameWithoutExt = filename.replace(path.extname(filename), '')
        const result = await cloudinary.v2.uploader.upload(url, {public_id: filenameWithoutExt})
        const user = await User.findOne({_id: id})
        const urlFile = result?.url
        const newFile = new File({
          name: result.original_filename,
          format: result.format,
          size: result.bytes,
          public_id: result.public_id,
          url: '',
          userProperty: user._id
        })
        if(typeof urlFile == 'undefined'){
            newFile.url=''
        }else{
            newFile.url=result.url
        }
        const fileSaved = await newFile.save()
        await User.findOneAndUpdate({_id: id}, {$push: {files: fileSaved._id}})
        await unlink(url, (err)=>{
          if(err){
            console.log(err)
          }else{
            console.log('File deleted')
          }
          
        })
      })
      resolve('Todo OK')
    })
    .on("error", reject)
  )
}

function getFilePath(pathDir, callback){
  readdir(pathDir, async (error, file)=>{
    if(error) return callback(error)
    callback(null, path.join(__dirname,"../", "./public/"+file[0]))
  })
}

const saveAvatarWithStream = async ({ stream, filename, idUser, username, occupation })=>{
  const pathL = path.join(__dirname,'../', `./public/${filename}`)
  return new Promise((resolve, reject)=>{
    stream
      .pipe(createWriteStream(pathL))
      .on("finish", async ()=>{
        getFilePath(path.join(__dirname,'../', './public'), async (error, file)=>{
          const userFound = await User.findOne({_id: idUser})
          const result = await cloudinary.v2.uploader.upload(file)
          if(userFound.avatar_public_id!==''){
            await cloudinary.v2.uploader.destroy(userFound.avatar_public_id)
          }
          if(username==='' && occupation!==''){
            const user = await User.findOneAndUpdate({_id: idUser}, { occupation, avatar: result.url, avatar_public_id: result.public_id }, {new: true})
            resolve(user)
          }else if(occupation==='' && username!==''){
            const user = await User.findOneAndUpdate({_id: idUser}, { username, avatar: result.url, avatar_public_id: result.public_id }, {new: true})
            resolve(user)
          }else if(username==='' && occupation===''){
            const user = await User.findOneAndUpdate({_id: idUser}, { avatar: result.url, avatar_public_id: result.public_id }, {new: true})
            resolve(user)
          }else{
            const user = await User.findOneAndUpdate({_id: idUser}, { username, occupation, avatar: result.url, avatar_public_id: result.public_id }, {new: true}) 
            resolve(user)
          }
          await unlink(file, (err)=>{
            if(err) throw err
              console.log('Avatar deleted')
          })
        })

        
      })
      .on("error", reject)
  })
}

export const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        getUser: async (_, args)=>{
          return await User.findOne({_id: args.id})
        },
        getUserFiles: async (_, args)=>{
          const filesUser = await User.findOne({_id: args.id}).populate('files')
          return filesUser.files
        }
    },
    Mutation:{
    singleUpload: async (_, args)=>{
      const { filename, mimetype, createReadStream } = await args.file;
      const { id } = await args
      const stream = createReadStream();
      return await saveFileWithStream({ filename, mimetype, stream, id })
    },
    deleteFile: async (_, args)=>{
      const fileDeleted = await File.findOneAndDelete({_id: args.idFile})
      await User.findOneAndUpdate({_id: fileDeleted.userProperty}, {$pull:{files: fileDeleted._id}})
      await cloudinary.v2.uploader.destroy(fileDeleted.public_id)
      return "The file has been deleted"
    },
    updateNameFile: async (_, args)=>{
      const file = await File.findOne({_id: args.idFile})
      const result = await cloudinary.v2.uploader.rename(file.public_id, args.nameFile)
      return await File.findOneAndUpdate({_id: args.idFile}, {name: args.nameFile, public_id: result.public_id, url: result.url}, {new: true})
    },
    updatePersonalData: async (_, args)=>{
      if(args?.file){
        const { filename, mimetype, createReadStream } = await args.file;
        const { idUser, username, occupation } = await args
        const stream = createReadStream()
        return await saveAvatarWithStream({stream, filename, idUser, username, occupation})
      }else{
        const { idUser, username, occupation } = await args
        if(username==='' && occupation!==''){
          return await User.findOneAndUpdate({_id: idUser}, {occupation: occupation}, {new: true})
        }else if(occupation==='' && username!==''){
          return await User.findOneAndUpdate({_id: idUser}, {username: username}, {new: true})
        }else{
          return await User.findOneAndUpdate({_id: idUser}, {username: username, occupation: occupation}, {new: true})
        }
      }
    },
    updateEmailAndPassword: async (_, args)=>{
      function hashPass(){
          return new Promise((resolve, reject)=>{
            bcrypt.genSalt(10, (err, salt)=>{
              if(err){
                reject(err)
              }else{
                bcrypt.hash(args.newPass, salt, (err, hash)=>{
                  resolve(hash)
                })
              }
            })
          }) 
        }
      if(typeof args?.newPass == 'undefined'){
        return await User.findOneAndUpdate({_id: args.idUser}, {email: args.newEmail}, {new: true})
      }else{
        const r = hashPass().then(async (v)=>{
          return await User.findOneAndUpdate({_id: args.idUser}, {email: args.newEmail, password: v}, {new: true})
        })
        return r
      }
      
    }
  }
};
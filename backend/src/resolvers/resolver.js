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
  console.log({filename, mimetype, id})
  console.log(__dirname) 
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
        /* En este punto hacer para guardar datos sobre el archivo en la DB */
        // Del result tenemos que sacar original_filename, public_id, format y bytes.
        /* Modelo en Mongodb: name(original_filename), format(format), size(bytes), public_id(public_id)
        y en userProperty pondremos el id del usuario que esta subiendo el archivo, tambien podriamos
        usar la propiedad url del result para los que son de formato imagen o video */
        /*const user = await User.findOne({_id: id})
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
          }*/
        const user = await User.findOne({_id: id})
        console.log(user)
        console.log(user._id)
        const newFile = new File({
          name: result.original_filename,
          format: result.format,
          size: result.bytes,
          public_id: result.public_id,
          userProperty: user._id
        })
        const fileSaved = await newFile.save()
        console.log(fileSaved)
        await User.findOneAndUpdate({_id: id}, {$push: {files: fileSaved._id}})
        //await User.findOneAndUpdate({_id: id}, {$push: {files: {idFile: fileSaved._id, public_id: fileSaved.public_id}}})
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

export const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        hello: ()=>{
            return "Hello from Graphql"
        },
        getUser: async (_, args)=>{
          return await User.findOne({_id: args.id})
        },
        getUserFiles: async (_, args)=>{
          const filesUser = await User.findOne({_id: args.id}).populate('files')
          console.log(filesUser)
          return filesUser.files
        }
    },
    Mutation:{
    singleUpload: async (_, args)=>{
      console.log(args)
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
      return await File.findOneAndUpdate({_id: args.idFile}, {name: args.nameFile, public_id: result.public_id}, {new: true})
      /* Para esos archivos que se suben que tienen la prop url o url_secure en el result, se va a tener
      que actualizar tambien en la DB ya que al renombrar el public_id tambien cambia en la url */
    },
    updateEmailAndPassword: async (_, args)=>{
      async function hashPass(){
        await bcrypt.genSalt(10, (err, salt)=>{
          if(err){throw err}
          bcrypt.hash(args.newPass, salt, (err, hash)=>{
            return hash
          })
        })
      }
      if(typeof args?.newPass == 'undefined'){
        const infoUserUpdated = await User.findOneAndUpdate({_id: args.idUser}, {email: args.newEmail}, {new: true})
        return infoUserUpdated
      }else{
        const newPassword = await hashPass()
        const infoUserUpdated = await User.findOneAndUpdate({_id: args.idUser}, {email: args.newEmail, password: newPassword}, {new: true})
        return infoUserUpdated
      }
      
    }
  }
};
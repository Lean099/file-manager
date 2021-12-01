import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream, readdir, unlink } from 'fs'
import path from 'path'
import File from "../models/File";
import User from "../models/User";
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: 'lean99',
    api_key: '721843881581849',
    api_secret: 'VVgCNgUjFncGbG26pj0wPGEMFGQ'
})

const saveFileWithStream = ({ filename, mimetype, stream })=>{
  console.log({filename, mimetype, stream}) // El fallo es porque me vienen los parametros undefined
  console.log(__dirname) // C:\Users\MauricioAlejandro\Desktop\test\test-upload-graphql\src
  const pathL = path.join(__dirname,'../', `./public/${filename}`)
  //const pathL = `${__dirname}/public/${filename}`
  return new Promise((resolve, reject)=>
    stream
    .pipe(createWriteStream(pathL))
    .on("finish", async ()=>{

      //readdir(`${__dirname}/public`, async (error, files)=>{
      readdir(path.join(__dirname,'../', './public'), async (error, files)=>{
        if(error){
            throw error
        }
        const url = path.join(__dirname,"../", "./public/"+files[0])
        console.log(url)
        const result = await cloudinary.v2.uploader.upload(url)
        /* En este punto hacer para guardar datos sobre el archivo en la DB */
        // Del result tenemos que sacar original_filename, public_id, format y bytes.
        /* Modelo en Mongodb: name(original_filename), format(format), size(bytes), public_id(public_id)
        y en userProperty pondremos el id del usuario que esta subiendo el archivo, tambien podriamos
        usar la propiedad url del result para los que son de formato imagen o video */
        console.log(result)
        //await unlink(files[0])
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
        }
    },
    Mutation:{
    singleUpload: async (_, args)=>{
      /* Aqui dentro me devulve un promesa con un objeto con el filename, mimetype, encoding y createReadStream */
      console.log(args.file)
      const { filename, mimetype, createReadStream } = await args.file;
      console.log(args)
      const stream = createReadStream();
      return await saveFileWithStream({ filename, mimetype, stream })
      //return "Single Upload"
    }
  }
};
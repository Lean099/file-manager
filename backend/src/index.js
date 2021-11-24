//import dotenv from 'dotenv'
//dotenv.config()
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import schema from './schemas/schema'
import './database'
const app = express();

app.set('port', process.env.PORT || 3001);

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'))
})

import {makeExecutableSchema} from '@graphql-tools/schema'
import {resolvers} from '../resolvers/resolver'
import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Upload

    type Query{
        hello: String
        getUser(id: String!): User
        getUserFiles(id: String!): [File]
    }

    type User{
        _id: ID
        username: String
        email: String
        files: [InfoFiles]
    }

    type InfoFiles{
        idFile: ID
        public_id: String
    }

    type File{
        _id: ID
        name: String
        format: String
        size: Int
        public_id: String
        userProperty: ID
    }

    type Mutation{
        singleUpload(file: Upload, id: String): String
        deleteFile(idFile: String): String
        updateNameFile(idFile: String, nameFile: String): File
        updateEmailAndPassword(idUser: String, newEmail: String, newPass: String): User
    }

`




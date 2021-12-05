import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Upload

    type Query{
        getUser(id: String!): User
        getUserFiles(id: String!): [File]
    }

    type User{
        _id: ID
        username: String
        email: String
        files: [ID]
    }

    type File{
        _id: ID
        name: String
        format: String
        size: Int
        public_id: String
        url: String
        userProperty: ID
    }

    type Mutation{
        singleUpload(file: Upload, id: String): String
        deleteFile(idFile: String): String
        updateNameFile(idFile: String, nameFile: String): File
        updateEmailAndPassword(idUser: String, newEmail: String, newPass: String): User
    }

`




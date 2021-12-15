import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Upload
    scalar Date

    type Query{
        getUser(id: String!): User
        getUserFiles(id: String!): [File]
    }

    type User{
        _id: ID
        username: String
        occupation: String
        avatar: String
        avatar_public_id: String
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
        createdAt: Date
        updatedAt: Date
    }

    type Mutation{
        singleUpload(file: Upload, id: String): String
        deleteFile(idFile: String): String
        updateNameFile(idFile: String, nameFile: String): File
        updatePersonalData(idUser: String, file: Upload, username: String, occupation: String): User
        updateEmailAndPassword(idUser: String, newEmail: String, newPass: String): User
        deleteUser(idUser: String): String
    }

`




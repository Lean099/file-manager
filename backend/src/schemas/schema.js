import {makeExecutableSchema} from '@graphql-tools/schema'
import {resolvers} from '../resolvers/resolver'
import { gql } from 'apollo-server-express'

export const typeDefs = gql`

    scalar Upload

    type Query{
        hello: String
    }

    type Mutation{
        singleUpload(file: Upload, id: String): String
    }

`




import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

// A este funcion le pasamos la url de nuestro servidor
const link = createUploadLink({uri: "http://localhost:3001/graphql"})

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
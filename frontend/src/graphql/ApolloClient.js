import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({uri: `${process.env.REACT_APP_BACKEND_API_URL}/graphql`})

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
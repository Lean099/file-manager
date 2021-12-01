import { gql } from '@apollo/client'

/*export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload){
  singleUpload(file: $file)
  }
`*/

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload, $id: String){
  singleUpload(file: $file, id: $id)
  }
`
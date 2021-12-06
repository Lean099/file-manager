import { gql } from '@apollo/client'

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload, $id: String){
  singleUpload(file: $file, id: $id)
  }
`

export const UPLOAD_IMAGE_PERSONAL_DATA = gql`
  mutation updatePersonalData($file: Upload, $id: String, $username: String, $occupation: String){
  updatePersonalData(file: $file, idUser: $id, username: $username, occupation: $occupation)
  }
`
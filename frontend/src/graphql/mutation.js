import { gql } from '@apollo/client'

// Files

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload, $id: String){
    singleUpload(file: $file, id: $id)
  }
`

export const DELETE_FILE = gql`
  mutation deleteFile($id: String){
    deleteFile(idFile: $id)
  }
`

export const UPDATE_NAME_FILE = gql`
  mutation updateNameFile($id: String, $name: String){
    updateNameFile(idFile: $id, nameFile: $name){
      _id
      name
      format
      size
      public_id
      url
      userProperty
    }
  }
`
// User

export const UPLOAD_IMAGE_PERSONAL_DATA = gql`
  mutation updatePersonalData($file: Upload, $id: String, $username: String, $occupation: String){
    updatePersonalData(file: $file, idUser: $id, username: $username, occupation: $occupation){
      _id
      username
      occupation
      avatar
      avatar_public_id
    }
  }
`

export const UPLOAD_EMAIL_AND_PASSWORD = gql`
  mutation updateEmailAndPassword($id: String, $newEmail: String, $newPass: String){
    updateEmailAndPassword(idUser: $id, newEmail: $newEmail, newPass: $newPass){
      email
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser($id: String){
    deleteUser(idUser: $id)
  }
`


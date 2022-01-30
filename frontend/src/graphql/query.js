import { gql } from '@apollo/client'

export const GET_USER = gql`
	query getUser($id: String!){
		getUser(id: $id){
			_id
			username
			occupation
			avatar
			avatar_public_id
			email
			files
		}
	}
`

export const GET_USER_FILES = gql`
	query getUserFiles($idFile: String!){
		getUserFiles(id: $idFile){
			_id
			name
			format
			public_id
			size
			url
			createdAt
		}
	}
`

export const DOWNLOAD_FILE = gql`
	query downloadFile($id: String){
		downloadFile(id: $id)
	}
`
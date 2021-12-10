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
			size
			url
		}
	}
`
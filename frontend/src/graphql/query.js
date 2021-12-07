import { gql } from '@apollo/client'

export const GET_USER_FILES = gql`
	query getUserFiles($id: String){
		getUserFiles(id: $id){
			_id
			name
			format
			size
			url
		}
	}
`
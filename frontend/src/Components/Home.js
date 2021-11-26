import { LoginButton } from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'

export const Home = ()=>{

	const { isAuthenticated } = useAuth0()
	const history = useHistory()

	console.log(isAuthenticated)

	if(isAuthenticated){
		history.push('/myDrive')
	}else{
		return(
			<div class="container">
				<h1 class="text-center">File Manager</h1>
				<p>Sign Up or Log In to start uploading your files!</p>
				<LoginButton />
			</div>
		)
	}					
}
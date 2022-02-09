import { LoginButton } from './LoginButton'
import { NavLink } from 'react-router-dom'

export const Home = ()=>{
		return(
			<div class="container" id="homeCont">
			<div class="col align-self-center">
			<h1 class="text-center display-1">File Manager</h1>
				<p class="text-center lead">Sign Up or Log In to start uploading your files!</p>
				<div class="d-flex justify-content-center">
					<LoginButton />
					<NavLink to="/myDrive" class="btn btn-dark btn-sm"><p class="lead" id="leadP">My Drive</p></NavLink>
				</div>
			</div>
		</div>
		)
}

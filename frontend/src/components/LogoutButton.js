import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = ()=>{
	
	const { logout } = useAuth0();

	return (
	    <button class="btn btn-danger btn-sm" onClick={() => logout({ returnTo: window.location.origin })}>
	      Log Out
	    </button>
  	);

}
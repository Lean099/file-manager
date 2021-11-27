import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = ()=>{

	const { loginWithRedirect } = useAuth0();

	return <button class="btn btn-dark btn-sm me-2" onClick={() => loginWithRedirect()}><p class="lead" id="leadP">Sign Up/Sing In</p></button>;
}

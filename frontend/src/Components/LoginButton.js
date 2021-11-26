import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = ()=>{

	const { loginWithRedirect } = useAuth0();

	return <button class="btn btn-dark btn-sm" onClick={() => loginWithRedirect()}>Sing Up/Sing In</button>;
}
import { useAuth0 } from "@auth0/auth0-react"

const Auth = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <h1>Auth</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}

export default Auth
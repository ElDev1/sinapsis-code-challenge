import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout, isAuthenticated } = useAuth0()

  const navigate = useNavigate()

  if(!isAuthenticated) {
    navigate('/')
  }

  return (
    <div>
      <nav>
        <h1>Home</h1>
        <img src={user?.picture} alt='user profile image' />
        <h2>{user?.name}</h2>
        <button onClick={() => logout()}>Logout</button>
      </nav>
    </div>
  )
}

export default Home
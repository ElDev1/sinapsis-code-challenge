import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

const Home = () => {
  const { user, isAuthenticated } = useAuth0()

  const navigate = useNavigate()

  if(!isAuthenticated) {
    navigate('/')
  }

  return (
    <header>
      <Navbar avatar={user?.picture} userName={user?.name}/>
    </header>
  )
}

export default Home
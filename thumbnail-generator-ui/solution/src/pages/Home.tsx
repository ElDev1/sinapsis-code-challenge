import { useAuth0 } from '@auth0/auth0-react'
import { Box, Stack } from '@mui/system';
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar'
import ThumbnailGenerator from '../components/ThumbnailGenerator';

const Home = () => {
  const { user, isAuthenticated } = useAuth0()

  const navigate = useNavigate()

  if(!isAuthenticated) {
    navigate('/')
  }

  return (
    <Stack sx={{height:'100vh'}}>
      <Navbar avatar={user?.picture} userName={user?.name}/>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
        <ThumbnailGenerator />
      </Box>
    </Stack>
  )
}

export default Home
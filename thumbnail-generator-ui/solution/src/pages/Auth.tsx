import { useAuth0 } from "@auth0/auth0-react"
import { styled } from "@mui/system"
import { Button, Paper, Stack, Typography } from "@mui/material"

const AuthContainer = styled('main')({
  background: 'linear-gradient(to bottom, #e66465, #9198e5)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Img = styled('img')({
  width: '100%',
})

const Auth = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <AuthContainer>
      <Paper sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: {
          xs: '90%',
          sm: '400px'
        },
        height: '500px'
      }}>
        <Stack spacing={1}>
          <Typography sx={{fontWeigt:'bold'}} align='center' variant='h4' component='h1'>Thumbnail generator</Typography>
          <Typography sx={{color:'#818181'}} align='center' component='p'>Generate thumbnails that help to attract clicks and boost viewership.</Typography>
        </Stack>
        <Img src='../../public/Donuts.png' alt='donuts'/>
        <Button 
          sx={{
            color: 'white',
            backgroundColor: '#edabcc',
            width: '100px',
            height: '50px',
            '&:hover': {
              backgroundColor: 'white',
              outline: 'solid 1px black',
              color: 'black'
            },
          }}
          onClick={() => loginWithRedirect()}>
            Login
          </Button>
      </Paper>
    </AuthContainer>
  )
}

export default Auth
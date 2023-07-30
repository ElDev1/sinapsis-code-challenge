import { Avatar, Box, Button, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
    avatar: string | undefined
    userName: string | undefined
}

const Navbar = ({ avatar, userName }: Props) => {
  
  const { logout } = useAuth0()


  return (
    <Paper sx={{ backgroundColor: '#FFCACC', height: '100px', padding:'15px', boxShadow: 3}}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography color='#967E76' variant='h2'>Thumbnail generator</Typography>
          <Stack direction='row' alignItems='center' spacing={2}>
              <Box>
                <Typography align='center' color='#967E76'>Welcome!</Typography>
                <Typography align='center' variant='subtitle2' color='#967E76'>{userName}</Typography>
              </Box>
              <Avatar src={avatar} />
              <Button 
                sx={{
                  backgroundColor: '#DBC4F0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4E2D4',
                  }
                }}
                onClick={() => logout()}>Logout
              </Button>
          </Stack>
      </Stack>
    </Paper>
  )
}

export default Navbar
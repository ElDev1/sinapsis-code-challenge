import { Avatar, Button, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
    avatar: string | undefined
    userName: string | undefined
}

const Navbar = ({ avatar, userName }: Props) => {
  
  const { logout } = useAuth0()


  return (
    <Stack direction='row' justifyContent='space-between' sx={{ backgroundColor: '#FFCACC'}}>
        <Typography variant='h2'>Thumbnail generator</Typography>
        <Stack direction='row' alignItems='center'>
            <Typography>{userName}</Typography>
            <Avatar src={avatar} />
            <Button onClick={() => logout()}>Logout</Button>
        </Stack>
    </Stack>
  )
}

export default Navbar
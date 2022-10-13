import { TextField, Button, Box, Alert } from "@mui/material";

const UserLogin = () => {
    return <>
        <Box component='form' noValidate sx={{ mt: 1 }} id='login-form'>
            <TextField margin='normal' required fullWidth id='email' name='email'
                label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password'
                label='Password' type='password' />
        </Box>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
        </Box>
    </>
}

export default UserLogin;
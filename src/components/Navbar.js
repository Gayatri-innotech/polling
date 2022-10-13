import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
                        POLLING
                    </Typography>
                    <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroungColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>
                        Home
                    </Button>
                    <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroungColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>
                        Login and Registration
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>;
}

export default Navbar;
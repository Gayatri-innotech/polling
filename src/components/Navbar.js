import { AppBar, Box, Toolbar, Typography, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
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
                        <Select>
                            <MenuItem component={NavLink} to='/login' value={10}>Login</MenuItem>
                            <MenuItem component={NavLink} to='/reg' value={20}>Sign Up</MenuItem>
                        </Select>
                    
                </Toolbar>
            </AppBar>
        </Box>
    </>;
}

export default Navbar;
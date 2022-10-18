import {Button, CssBaseline, Grid, Typography} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
const Panel =()=> {
    const navigate = useNavigate()
    const handleLogout = () =>{
        console.log("logout clicked");
        navigate('/admin');
    }
    return <>
    <CssBaseline/>
    <Grid>
        <Grid item sm={2} sx={{backgroundColor: 'lightblue', p:5}}>
            <Typography variant='h4' color='red'>Welcome to the Admin Panel</Typography>
            <hr/>
            <Typography variant='h6'>Click on the link below to view the admin panel!!</Typography>
        <NavLink to ='/poll'> User Admin </NavLink>
        <hr/>
        <Button variant='contained' color='warning' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm ={8}>

        </Grid>
    </Grid>
    </>
}

export default Panel;
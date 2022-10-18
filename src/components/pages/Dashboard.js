import {Button, CssBaseline, Grid, Typography} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
const Dashboard =()=> {
    const navigate = useNavigate()
    const handleLogout = () =>{
        console.log("logout clicked");
        navigate('/login');
    }
    return <>
    <CssBaseline/>
    <Grid>
        <Grid item sm={2} sx={{backgroundColor: 'lightblue', p:5}}>
            <Typography variant='h4' color='red'>Welcome to the Voting Poll</Typography>
            <hr/>
            <Typography variant='h6'>Click on the link below to start voting!!</Typography>
        <NavLink to ='/polls'> Voting Page </NavLink>
        <hr/>
        <Button variant='contained' color='warning' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm ={8}>

        </Grid>
    </Grid>
    </>
}

export default Dashboard;

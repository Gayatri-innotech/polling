import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'

const Admin = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({email, password})
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const navigate = useNavigate();
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleApi = ()=>{
        console.log({email,password})
        axios.get(`https://secure-refuge-14993.herokuapp.com/login?username=${email}&password=${password}`,{
            email: email,
            password: password
        }).then(result => {
            console.log(result)
        })
        navigate('/panel')
    }
    return (
        <div className="app">
            Email: <input className='mail' value={email} onChange={handleEmail} type="text"/> <br/>
            Password: <input className='pwd' type='password' value={password} onChange={handlePassword} /> <br/>
            <button className='btn' onClick={handleApi}>Login</button>
        </div>
    )
}

export default Admin;

import { Button, } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import { authAction } from '../store';
import {useNavigate } from 'react-router-dom';

const Auth = () => {

  const navigate = useNavigate()
  const dispath = useDispatch();

  const [inputs, setInputs] = useState({
    name:"", email:"", password:""
  })
 const [isSignup, setIsSignup] = useState(false);

 const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
 };

 const sendRequest = async ( type='login') =>{
 const res = await axios.post(`http://localhost:8000/api/users/${type}`, {
    name: inputs.name,   
    email: inputs.email,
    password: inputs.password,
  }).catch(err=>console.log(err));
  const data = await res.data;
  // console.log(data);
  return data;
 }

 const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(inputs);
    
    if(isSignup){
      sendRequest("signup").then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>navigate("/blogs"))
      .then(()=>dispath(authAction.login())).then(data=>console.log(data))
    } else {
      sendRequest("login").then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=>navigate("/blogs"))
      .then(()=>dispath(authAction.login())).then(data=>console.log(data));
    }
 }
  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} >
        <div className="p-10 h-auto w-[350px] flex flex-col justify-center rounded shadow-lg shadow-slate-600 " >
          <div className="text-center py-2">
          {isSignup ? "Signup" : "Login"}
          </div>
          { isSignup &&  <input type='text' name='name' onChange={handleChange} value={inputs.name} placeholder='Name' className="w-full mt-3 px-4 py-2 rounded-lg border border-gray-500 bg-slate-950  focus:outline-none focus:ring  focus:border-blue-400" />}
          <input name='email' onChange={handleChange} value={inputs.email} type='email' placeholder='email'  className="w-full px-4 mt-2 py-2 rounded-lg border border-gray-500 bg-slate-950  focus:outline-none focus:ring  focus:border-blue-400"/>
          <input name='password' onChange={handleChange} value={inputs.password} type='password' placeholder="password" className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-500 bg-slate-950  focus:outline-none focus:ring  focus:border-blue-400"/>
          <Button type='submit' variant='contained' sx={{borderRadius: 3, marginTop:3}} color='warning' >Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius: 3, marginTop:3}}>Change To {isSignup ? "Login" : "Signup"} </Button>
        </div>
      </form>
    </div>
  )
}

export default Auth
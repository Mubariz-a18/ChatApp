import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';

export default function Register() {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });  
  
  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate('/')
    }
  },[])



  const toastOpts = {
    position: "bottom-right",
    autoClose: 8000,
    draggable: true,
    theme: "dark"
  }

  const handleValidation = () => {
    const { password, confirmPassword, email, username } = val;
    if (password !== confirmPassword) {
      console.log("inside er", toast)
      toast.error("Passowrd should be same as confirm password", toastOpts);
      return false;
    } else if (username.length < 3) {
      toast.error("Atleast 3 letters in username", toastOpts);
      return false;
    }
    else if (email === "") {
      toast.error("Email is required", toastOpts);
      return false;
    } else if (password.length < 8) {
      toast.error("Atleast 8 letters in password", toastOpts);
      return false;
    }
    return true;
  }

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    if (handleValidation()) {
      const { password, email, username } = val;
      const { data } = await axios.post(registerRoute,{
        username,
        email,
        password
      });
      console.log(data.status)
      if(data.status === false){
        toast.error(data.message)
      }
      if(data.status){
        localStorage.setItem("chat-app-user",JSON.stringify(data.user));
        navigate("/")
      }
    } 
  }

  const handleChange = (event) => {
    setVal({ ...val, [event.target.name]: event.target.value })
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Snappy</h1>
          </div>
          <input type="text" placeholder='username' name='username' onChange={e => handleChange(e)} />
          <input type="email" placeholder='Email' name='email' onChange={e => handleChange(e)} />
          <input type="password" placeholder='Password' name='password' onChange={e => handleChange(e)} />
          <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={e => handleChange(e)} />
          <button type='submit'>Register</button>
          <span>Already have an Account ? <Link to="/login">Login</Link></span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flext-direction:column;
  justify-content:center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
  .brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img {
      height:5rem
    }
    h1{
      color:white;
      test-transform:uppercase;
    }
  }
  form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    padding:3rem 5rem;
    input{
      background-color:transparent;
      padding:1rem;
      border:0.1rem solid #4e0eff;
      border-radius:0.4rem;
      color: white;
      width:100%;
      font-size:1rem;
      &:focus{
        border:0.1rem solid #997af0;
        outline:none;
      }
    }
    button{
      background-color:#997af0;
      color:white;
      padding:1rem 2rem;
      border:none;
      font-weight:bold;
      cursor:pointer;
      border-radius:0.4rem;
      font-size:1rem;
      text-transform:uppercase;
      transition:0.5s ease-in-out;
      &:hover:{
        background-color:#4e0eff;
      }
    }
    span{
      color:white;
      a{
        text-decoration:none
      }
    }
  }
`
import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
// import Test from './pages/Test.jsx'
import SetAvatar from './pages/SetAvatar'

export default function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/' element = {<Chat/>}/>
      <Route path='/setavatar' element = {<SetAvatar/>}/>
       {/* <Route path='/' element = {<Test/>}/> */}
    </Routes>

    </BrowserRouter>
  )
}

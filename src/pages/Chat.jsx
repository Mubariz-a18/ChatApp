import React, { useState, useEffect, useRef } from 'react'
import Styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { allUserRoutes,host } from '../utils/APIRoutes';
import Contact from '../components/Contact';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import {io} from "socket.io-client";

export default function Chat() {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [currentChat, setcurrentChat] = useState(undefined)
  const [isloaded, setIsloaded] = useState(false)
  useEffect(() => {
    async function onRender() {
      const user = JSON.parse(localStorage.getItem("chat-app-user"));
      if (!user) {
        navigate('/login');
      } else {
        setCurrentUser(user);
        setIsloaded(true)
      }
    }
    onRender()
  }, [])

  useEffect(() => {
    if (currentUser) {
        socket.current = io(host);
        socket.current.emit("add-user", currentUser._id); // Emit the "add-user" event with the user ID
    }
}, [currentUser]);
  
  const handleChatChange = (chat) => {
    setcurrentChat(chat)
  }

  useEffect(() => {
    async function onRender() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const response = await axios.get(`${allUserRoutes}/${currentUser._id}`);
          const data = response.data;

          setContacts(data)
        } else {
          navigate('/setAvatar')
        }
      }
    }
    onRender()
  }, [currentUser, navigate])
  return (
    <>
      <Container>
        <div className='container'>
          <Contact
            contacts={contacts}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {
            
            isloaded && currentChat === undefined ?
              (<Welcome
                currentUser={currentUser}
              />) :
              <ChatContainer
              currentChat={currentChat}
              currentUser = {currentUser}
              socket = {socket}
              />
          }
        </div>
      </Container>
    </>
  )
}

const Container = Styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:1rem;
background-color:#131324;
.container{
  height:85vh;
  width:85vw;
  background-color:#00000076;
   display:grid;
   grid-template-columns:25% 75%;
   @media screen and (min-width: 720px) and (max-width:1080px){
    grid-template-columns:35% 65%;
   }
}
`;

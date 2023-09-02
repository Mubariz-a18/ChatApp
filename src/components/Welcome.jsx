import React from 'react'
import Styled from "styled-components"
import Robo from "../assets/robot.gif"
function Welcome({currentUser}) {
  return (
    <>
    <Container>
    <img src={Robo} alt="robo" />
    <h1>
        Welcome <span>
            {currentUser.username}!
        </span>
    </h1>
    <h3>
        Please Select a chat to Message with. 
    </h3>
    </Container>
    </>
  )
}

const Container = Styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:white;
img{
    height:20rem;
}
span{
    color:#4e00ff
}
`;

export default Welcome
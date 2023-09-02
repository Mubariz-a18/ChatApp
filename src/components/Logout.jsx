import React from 'react'
import Styled from "styled-components";
import { BiPowerOff } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await localStorage.clear();
        navigate('/login')
    }
    return (
        <>
        <Container onClick={handleLogout}>
            <BiPowerOff />
        </Container>
        </>
    )
}

const Container = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0.5rem;
    border-radius:0.5rem;
    background-color:#9a86f3;
    cursor:pointer;
    svg{
        font-size:1.3rem;
        color:#ebe7ff;
    }
`

export default Logout
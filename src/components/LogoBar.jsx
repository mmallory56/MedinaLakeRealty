import React from 'react'
import styled from "styled-components";

const Bar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #505050;
    border-radius: .5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const LogoBox = styled.div`
    width:20%;
    height: 100%;
    background-color: white;
    border-radius: .5rem;
`
const LogoBar = () => {
  return (
    <Bar><LogoBox></LogoBox></Bar>
  )
}

export default LogoBar
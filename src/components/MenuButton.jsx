import React from 'react'
import styled from "styled-components";
const Box = styled.div`
  display: flex;
  position:fixed;
  top: 30px;
  left:30px;
  width: 30px;
  align-Items: center;
  justify-content: center ;
  flex-wrap: wrap;
  z-Index:100;
  transform: ${props => props.isOpen ?` translate(${props.translateX}px, ${props.translateY}px)` :""};
  transition-delay: .4s;
  transition:all .6s ease-in-out;
`
const Row = styled.div`
  margin-top: 5px;
  width: 30px;
  height: 5px;
  border-radius: 50px;
  background-color: #3e88b2;
  box-shadow:1px 1px 3px 1px #363636;
 transform: ${props => props.isOpen ?`rotate(${props.Amount}deg) translate(${props.translateX}px, ${props.translateY}px)` :""};
 transition:all .2s ease-in-out;
`;

const MenuButton = ({isOpen=false,setIsOpen}) => {
 
  return (
    <Box onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen} translateX={230} translateY={0}>
      <Row isOpen={isOpen} Amount={45} translateX={0} translateY={7}></Row>
      <Row isOpen={isOpen} Amount={135} translateX={0} translateY={7}></Row>
    </Box>
   
  )
}

export default MenuButton
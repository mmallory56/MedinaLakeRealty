import React from 'react'
import styled from "styled-components";
const Drawer = styled.div`
  position:fixed;
  display:flex; 
  flex-direction:column;
  align-items:center;
  padding-top:2em;
  font-size:2rem;
  top: 0px;
  left:${props=>props.isOpen?"0px":"-280px"};
  z-index:0;
  width: 280px;
  background-color:#7c7c7cd1;
  border-radius:5px ;
  height:100vh;
  transition:all .5s ease-in-out;
`
const MenuDrawer = ({isOpen,setIsOpen,children}) => {
  return (
    <Drawer isOpen={isOpen}>
      {children}
    </Drawer>
  )
}

export default MenuDrawer
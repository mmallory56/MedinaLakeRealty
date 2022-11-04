import React from 'react'
import {  useLayoutEffect } from 'react';

import styled from "styled-components"
import { createPortal } from 'react-dom';
const Background = styled.div`
position: fixed;
right:0;
left:0;
bottom:0;
top: 0;
background-color: rgba(0,0,0,.7);

`
const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: fixed;
top:50%;
right:50%;
background-color:  #fefeffea;
height:max(70vh,500px);
width: max(50vw,200px);
border-radius: 10px;
transform: translate(50%,-50%);
color: black;
`
const Button = styled.div`
margin-top: 50px;
margin-bottom: 0px;
color: #414141;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom:5px;
font-size: 20px;
border-color: black;
border-width: 1px;
border-radius: 10px;
border-style: solid;
transition: all .6s;
&:hover{
    box-shadow: 10px 10px 10x gray;
}
&:active{
    background-color: blue;
    box-shadow: inset 1px 1px 5px gray;

}

`
function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }
export const Modal= ({children, Visible,setVisible ,wrapperId="react-portal-wrapper"}) => {


useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    
  }, [wrapperId]);
  if(Visible!==true)return null;
  return createPortal(
    <>
    
    <Background>
    </Background>
    <Box>
    {children}
    
    <Button onClick={()=>setVisible(false)}>Close</Button>
    </Box>
    </>,document.getElementById(wrapperId)
  )
}

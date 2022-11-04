import React from 'react'
import styled from "styled-components"

const Button = styled.button`
display: inline-block;
position: static;
padding: .4rem .4rem;
box-sizing: border-box;
background: transparent;
margin-top: 10px;
background: #C2DFDA;
box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.83);
border-radius: 5px;
border-color: #1a1a1a1a;

font-family: 'Rosario';
font-style: normal;
font-weight: 400;
color: #000000;

text-shadow: 2px 1px 2px rgba(80, 80, 80, 0.99);
& a{
  color:rgba(67, 67, 67, 0.91);
  text-decoration: none;
  
  font-weight: bold;
}
&:hover{
  box-shadow: none;
}
@media screen and (min-width: 600px) {
     font-size: 1.2em;
  
}
  @media screen and (max-width: 400px) {
    font-size:.5em;
  
}
@media screen and (max-width: 300px) {
  font-size:.4em;
 
}
`;
const SolidButton = ({children,style}) => {
  return (
    <Button style={style}>
        {children}
    </Button>
  )
}

export default SolidButton
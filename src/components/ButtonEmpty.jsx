import React from 'react'
import styled from "styled-components"

const Button = styled.button`
display: inline-block;
position: static;
padding: .4rem .4rem;
box-sizing: border-box;
background: transparent;

border: 1px solid #C8E0D9;
box-sizing: border-box;
box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.83);
border-radius: 4px;

font-family: 'Rosario';
font-style: normal;
font-weight: 400;


color: #FEFEFE;
@media screen and (max-width: 600px) {
     font-size: .9em;
  
}
  @media screen and (max-width: 400px) {
    font-size:.5em;
  
}
@media screen and (max-width: 300px) {
  font-size:.4em;
 
}

text-shadow: 2px 1px 2px rgba(80, 80, 80, 0.99);
`;
const ButtonEmpty = ({children}) => {
  return (
    <Button>
        {children}
    </Button>
  )
}

export default ButtonEmpty
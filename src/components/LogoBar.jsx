import React from 'react'
import styled from "styled-components";
import{Link }from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
const Bar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #505050;
    border-radius: .5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


const Item = styled(Link)`
  width:auto;
  display: inline-block;
  position: relative;
  margin-right: 25px;
  color:white;
  text-decoration: none;
  font-size: larger;
  @media screen and (max-width: 400px) {
  
    font-size: smaller;
  margin-right:5px;

}

&:after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: #00768b;
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}
&:hover:after{
  transform: scaleX(1);
  transform-origin: bottom right;
}


`
const logoStyle={
  boxShadow:"2px 2px 5px black",
  borderRadius:"9px",
  marginRight:"10px"
  
}
const Image = styled(StaticImage)`
 
  box-shadow:2px 2px 5px black;
  border-radius:9px;
  margin-right:10px;
  `

const LogoBar = () => {
  return (
    <Bar>
      <Link to={"/"} href="/">
        <Image src="../images/MedinalakeLogo2.png" alt="Medina Lake Realty Logo"/>
      </Link>
      
        <Item to={"/Listing"} state={{search:""}}>Listings</Item>
      
      
        <Item to={"/Buying"}>Buying</Item>
      
  
        <Item to={"/Selling"}>Selling</Item>
     
    </Bar>
  )
}

export default LogoBar
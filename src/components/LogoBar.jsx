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
    background-color: #505050;
    border-radius: .5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


const Item = styled(Link)`
  width:auto;
  margin: auto;
  color:white;
  text-decoration: none;
  font-size: larger;
  @media screen and (max-width: 400px) {
  
    font-size: smaller;
  
  
}
`
const logoStyle={
  boxShadow:"2px 2px 5px black",
  borderRadius:"9px",
  marginLeft:"10px"
}
const LogoBar = () => {
  return (
    <Bar>
      <Link to={"/"} >
        <StaticImage style={logoStyle} src="../images/MedinalakeLogo2.png" alt="Medina Lake Realty Logo"/>
      </Link>
      
        <Item to={"/Listing"}>Listings</Item>
      
      
        <Item to={"/Buying"}>Buying?</Item>
      
  
        <Item to={"/Selling"}>Selling?</Item>
     
    </Bar>
  )
}

export default LogoBar
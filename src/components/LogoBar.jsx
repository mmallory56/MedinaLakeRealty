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

const Image = styled(StaticImage)`
margin-top:30px;
width:220px;
height:220px;
`
const Item = styled.div`
  width:auto;
  padding-right:40px;
  padding-left: 40px;
  color:white;
`
const LogoBar = () => {
  return (
    <Bar>
      <Link to={"/"}>
        <StaticImage src="../images/MedinalakeLogo2.png" alt={"Medina Lake Realty Logo"}/>
      </Link>
      <Link to={"/Listing"}>
        <Item>Listings</Item>
      </Link>
      <Link to={"/Listing"}>
        <Item>Buying?</Item>
      </Link>
      <Link to={"/Selling"}>
        <Item>Selling?</Item>
      </Link>
    </Bar>
  )
}

export default LogoBar
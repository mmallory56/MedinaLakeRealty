import React from 'react'
import styled from "styled-components";

const Background = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: top;
border-radius: 40px;
width:100%;
height:25vw;
background-repeat: no-repeat;
background-size: 100%;
background-image: url("./ListingbackGround.png");

`
const Box = styled.div`
display: flex;

align-items: center;
text-align: center;
padding-left: 40px;
font-size: x-large;
width:80%;
height:70%;
margin-top: 10px;
border-radius: 20px;
background-color: #8b8b8b94;
color: white;
text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.9);
`
const HeroListing = ({text="Water Front Properties For Sale",title}) => {
  return (
    <Background>
        <Box>
        {(title?title:"") +" Properties For Sale"}
        </Box>
        </Background>
  )
}

export default HeroListing
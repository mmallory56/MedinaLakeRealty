import React from 'react'
import { Link } from 'gatsby';
import styled from "styled-components"
import {CiFacebook} from "react-icons/ci"
import {AiOutlineGoogle} from 'react-icons/ai'
const Container  =styled.div`
display: flex;
flex-direction: row;
  position: relative;

width: 60%;
max-width: 1260px;

`
const Btn = styled(Link)`
position: relative;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
background: #fff;
box-shadow: 0 5px 15px -5px #aaa;
margin: 10px;
border-radius: 30%; 
overflow: hidden;
color: #1c5668;

& svg {
position: absolute;
z-index: 4;
line-height: 90px; 
font-size: 35px;
transition: 0.35s ease-in-out;
}
&::before{
 content: "";
position: absolute;
width: 125%; 
height: 125%;
background: linear-gradient(#002d59,#005263);
left: -110%;
top: 90%;

transform: rotate(45deg);

}
&:hover svg{
  color: #8fe6e6;
transform: scale(1.3);

}
&:hover::before{

left: -18%;
 top: -10%;
 animation: onHover .7s 1;

}
@keyframes onHover{
0%{
left: -110%;
top: 98%;
}
50%{
 left: 10%;
 top: -30%; 
}
100% {
top:-10%;
left:-10%;
} 
}

`
const SocialMedia = () => {
  return (
    <Container>
      <Btn href="https://www.facebook.com/MedinaLakeRealty/">
      <CiFacebook></CiFacebook>
      </Btn>
      <Btn href="https://www.google.com/search?q=medina+lake+realty&rlz=1C5CHFA_enUS988US1003&oq=medina+lake+realty&aqs=chrome.0.35i39j46i175i199i512j0i22i30l3j69i60l3.5875j0j7&sourceid=chrome&ie=UTF-8#lrd=0x865c119d463e0351:0x28cb4e3302f973b8,1,,,">
      <AiOutlineGoogle></AiOutlineGoogle>
      </Btn>
    </Container>
  )
}

export default SocialMedia
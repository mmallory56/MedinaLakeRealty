import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1.5em;
  padding-top:90px;
  background-image: url("/footerBackground.svg");
  
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30%;
  @media screen and (max-width: 1200px) {
     font-size: 1.2em;
}
  @media screen and (max-width: 900px) {
     font-size: 1.0em;
     padding-top:70px;
}
  @media screen and (max-width: 600px) {
     font-size: .9em;
     padding-top:30px;
    
}
  @media screen and (max-width: 400px) {
    font-size:.8 em;
    padding-top:20px;
    
}
@media screen and (max-width: 300px) {
  font-size:.5em;
  padding-top:0px;
}
`
const Section = styled.div`
display: flex;
align-items: center;
flex-direction: column;
    width:33%;
    height:500px;
    padding-top: 600px;
    
    color:#ffff;
`;
const Item = styled.div`
margin-top:90px;
color:white;
font-size: xx-large;
text-decoration-line: none;
-moz-text-decoration-line:none;
text-decoration: none !important;
`;
const Footer = () => {
  return (
    <FooterContainer>
        <Section>
          <Link to={"/About"}>
            <Item>About</Item>
            </Link>
            <Link to={"/Listing"}>
             <Item>Listings</Item> 
            </Link>
            
            <Item>Item</Item>
          
            
        </Section>
        <Section>
        <Item>Item</Item>
            <Item>Item</Item>
            <Item>Item</Item>
           
           
        </Section>
        <Section>
        <Item>Item</Item>
            <Item>Item</Item>
            <Item>Item</Item>
            
           
        </Section>
    </FooterContainer>
  )
}

export default Footer
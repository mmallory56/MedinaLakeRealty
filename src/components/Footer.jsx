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
margin-bottom: 150px;
flex-direction: column;
    width:33%;
    height:auto;
    padding-top: 600px;
    
    color:#ffff;
`;
const Item = styled(Link)`
margin-top:20px;
text-align: center;
color:white;
font-size: large;
text-decoration-line: none;
-moz-text-decoration-line:none;
text-decoration: none !important;
`;
const Footer = () => {
  return (
    <FooterContainer>
        <Section>
          
            <Item to="/About">About</Item>
          
             <Item to={"/Listing"}>Listings</Item> 
         
            <Item href={"https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0.pdf"}>Information about brokerage services</Item>
          
            
        </Section>
        <Section>
        <Item 
        href="https://www.edwardsaquifer.net/medina.html#:~:text=Medina%20Lake%20was%20constructed%20between,Antonio%2C%20just%20outside%20Loop%201604.">
          History of Medina Lake
          </Item>
          <Item href="https://www.facebook.com/MedinaLakeRealty/">Our Facebook </Item>
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
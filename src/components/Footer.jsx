import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import SocialMedia from './SocialMedia';
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,350px));
  justify-content: center;
  align-content: center;
  font-size: 1.5em;
  padding-top:450px;
  padding-bottom: 250px;
  margin-top: 20px;
  gap:10px;
  background-image: url("/footerBackground.svg");
  background-color: #02a0a5;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30%;
  @media screen and (max-width: 1200px) {
     font-size: 1.2em;
}
  @media screen and (max-width: 900px) {
     font-size: 1.0em;
  
}
  @media screen and (max-width: 600px) {
     font-size: .9em;
   
    
}
  @media screen and (max-width: 400px) {
    font-size:.8 em;
   
    
}
@media screen and (max-width: 300px) {
  font-size:.5em;
 
}
`
const Section = styled.div`
display: flex;
align-items: center;
padding: 10px;


text-align: center;
flex-direction: column;
    width:auto;
    height:auto;
   
   
    
    color:#e6e6e6;
    border-radius: 20px;
background-color: #0000002d;
`;
const Item = styled(Link)`

text-align: center;
color:#e2e2e2d4;
font-size: large;
text-decoration-line: none;
-moz-text-decoration-line:none;


`;
const Footer = () => {
  return (
    <FooterContainer>
        <Section>
            <h3>Listing and other Info</h3>
            <Item to="/About">About</Item>
          
             <Item to={"/Listing"}>Listings</Item> 
         
            <SocialMedia></SocialMedia>
            
        </Section>
        <Section>
        <h3>Medina Lake Info</h3>
        <Item 
        href="https://www.edwardsaquifer.net/medina.html#:~:text=Medina%20Lake%20was%20constructed%20between,Antonio%2C%20just%20outside%20Loop%201604.">
          History of Medina Lake
          </Item>
        
           
           
        </Section>
        <Section>
        <h3>Texas Real Estate Commision</h3>
        <Item href="https://www.trec.texas.gov/">TREC Website</Item>
        <Item href={"https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0.pdf"}>TREC Information about brokerage services</Item>
          
           
        </Section>
    </FooterContainer>
  )
}

export default Footer
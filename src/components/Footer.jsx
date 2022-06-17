import React from 'react'
import styled from 'styled-components'
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1.5em;
  padding-top:200px;
  background-image: url("./footerBackground.svg");
  
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
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
    height:700px;
    padding-top: 390px;
    
    color:#ffff;
`;
const Item = styled.div`
margin-top:30px;

`;
const Footer = () => {
  return (
    <FooterContainer>
        <Section>
            <Item>About</Item>
            <Item>Listings</Item>
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
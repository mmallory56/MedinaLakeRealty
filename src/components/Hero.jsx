import React from 'react'
import styled from "styled-components";
import ButtonEmpty from './ButtonEmpty';
import SolidButton from './SolidButton';
import { Link } from "gatsby"
const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
 
  font-size: 1.5em;
  padding-top:100px;
  background-image: url("./herogroup.svg");
  
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vw;
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
     margin-top:5px ;
}
  @media screen and (max-width: 400px) {
    font-size:.8em;
    padding-top:20px;
    margin-top:5px ;
}
@media screen and (max-width: 300px) {
  font-size:.6em;
  padding-top:0px;
}
//background-color: lightblue;
`
const TopSection= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:20vw;
 // background-color: green;
`
const BottomSection=styled.div`
    display: flex;
  flex-direction: column;
  padding-left:150px;
  font-size: 1.4em;
  align-items: right;
  margin-top:130px;
  text-align: left;
  width: 40%;
  height:25vw;
  @media screen and (max-width: 1400px) {
     font-size: 1.4em;
     margin-top:90px;
     width: 43%;
}
  @media screen and (max-width: 1200px) {
     font-size: 1.2em;
     margin-top:30px;
     width: 40%;
}
  @media screen and (max-width: 900px) {
     font-size: 1.1em;
     padding-left:50px;
    margin-top:20px;
    width: 40%;
}
  @media screen and (max-width: 600px) {
     font-size: .9em;
     padding-left:50px;
     width: 40%;
     margin-top:30px;
}
  @media screen and (max-width: 400px) {
    font-size:.7em;
    padding-left:20px;
    margin-top:25px;
    padding-right: 0px;
    width: 55%;
}
@media screen and (max-width: 300px) {
  font-size:.4em;
  padding-left:10px;
  padding-right: 0px;
  margin-top:10px;
  width: 55%;
}
//background-color: lightcoral;
`

const Header = styled.h1`
font-family: 'Rosarivo', serif;
padding-top:0px;
text-align: center; 
margin-top: 0px;
font-weight:400 ;
color:white;
text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.25);
//background-color: aqua;
`;
const HeaderFoot = styled.h3`
  font-family: 'Rosario', san-serif;
  width:200px;
  

padding-top:0px;
margin-top: 0px;
text-align: center; 
font-weight:200 ;
color:white;
text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.25);
//background-color: azure;
`
const BottomHeader = styled.h3`
  font-family: 'Rosario', san-serif;
  
margin-bottom: 0px;
font-style: normal;
font-weight: 700;
margin-right:50px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media screen and (max-width: 600px) {
    margin-right: 40px;
}
  @media screen and (max-width: 400px) {
    margin-right: 30px;
   // margin-left: 20px;
}
@media screen and (max-width: 300px) {
  margin-right: 10px;
  //margin-left: 20px;
}
`
const QuestionHeader = styled.h4`
  
font-family: 'Rosario';
font-style: normal;
font-weight: 700;
margin-right:50px;
margin-top: 0px;
margin-bottom: 0px;
color: #BABABA;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media screen and (max-width: 600px) {
    margin-right: 40px;
}
  @media screen and (max-width: 400px) {
    margin-right: 30px;
   // margin-left: 20px;
}
@media screen and (max-width: 300px) {
  margin-right: 0px;
  //margin-left: 20px;
}
`


const Hero = () => {
  return (
      
          <HeroItem>
          <TopSection>
             <Header>Medina Lake Realty</Header>
          <HeaderFoot>Experience. Trust. Results. </HeaderFoot>
          </TopSection>
         <BottomSection>
          <BottomHeader>
          Getting started Let us help you on the first steps.
          </BottomHeader>
          <QuestionHeader>
          Buying or Selling Property on Medina Lake?
          </QuestionHeader>
          <div>
            <ButtonEmpty ><Link to="/Listing">Buying?</Link></ButtonEmpty>
            <SolidButton style={{marginRight:"20px",marginLeft:"20px"}}>Selling?</SolidButton>
          </div>
          
         </BottomSection>
          </HeroItem>
          
         
      
   
  )
}

export default Hero
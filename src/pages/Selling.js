import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
height:100%;

`
const OutlineButton = styled.div`
    background-color: #e0e0e09f;
    color: black;
    border-color: #ffffff53;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    padding:20px;
    padding-top:5px;
    padding-bottom:5px;
    margin-left:10px;
    box-shadow: 2px 2px 3px #0000007b;
    & a{
        text-decoration: none;
        color: black;

    }
    &:hover{
        transition: all .3s ease-in-out;
        box-shadow: none;
    }
`
const Selling = () => {
  return (
    <> 
    <LogoBar></LogoBar>
     <Container>
     <h1>Lets get in contact:</h1>
     <OutlineButton alt="Call Now ">
                Call Now 
                <a href="tel:8306123709"> (830)-612-3709</a>
             </OutlineButton>
        <ContactForm StartMessage={"I'm interested in selling my property"}></ContactForm>
     </Container>
   
  
     <Footer></Footer>
     <NavBar></NavBar>
   </>
 
  )
}

export default Selling
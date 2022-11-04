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
const Selling = () => {
  return (
    <> 
    <LogoBar></LogoBar>
     <Container>
     <h1>Lets get in contact:</h1>
        <ContactForm StartMessage={"I'm interested in selling my property"}></ContactForm>
     </Container>
   
  
     <Footer></Footer>
     <NavBar></NavBar>
   </>
 
  )
}

export default Selling
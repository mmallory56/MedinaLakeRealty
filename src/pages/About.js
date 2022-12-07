import React from 'react'
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import NavBar from '../components/NavBar';
import styled from "styled-components"

const Container = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
`
const About = () => {
  return (
    <> 
     <LogoBar></LogoBar>
     <Container>
     <h1>About Us</h1>

<p>Welcome to <b>Medina Lake Realty</b>, your trusted source for real estate in Medina Lake, Lakehills, Bandera, and Mico. Since 2000, we have been helping clients buy and sell properties in this beautiful area, with a special focus on waterfront homes.</p>

<p>Our team is made up of experienced and knowledgeable real estate professionals who are passionate about the local area. We take pride in our ability to provide personalized service and expert advice to each and every client.</p>

<p>At <b>Medina Lake Realty</b>, we believe in the importance of building long-term relationships with our clients. We work hard to understand your unique needs and preferences, and we strive to exceed your expectations every step of the way.</p>

<p>If you are looking to buy or sell a property in Medina Lake, Lakehills, Bandera, or Mico, we encourage you to give us a call. We would be happy to assist you with all of your real estate needs.</p>

<p>Thank you for considering <b>Medina Lake Realty</b> for your real estate needs in Medina Lake, Lakehills, Bandera, and Mico. We look forward to working with you!</p>
     </Container>

      <Footer></Footer>
      <NavBar></NavBar>
    </>
  
  )
}

export default About;
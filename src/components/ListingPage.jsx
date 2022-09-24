import React from 'react'
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = styled(GatsbyImage)`
width:auto;
height:auto;
border-radius: 20px;
z-index: 0;
`
const Container = styled.div`
display:flex;
flex-direction: column;
margin:0px;
margin-top:20px;
padding:20px;
    width:94vw;
    height: 500px;
border-radius: 20px;
background: #F8F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

`
const Title = styled.div`
font-size: 50px;
font-style: bold;


`
const ShortDescription = styled.div`
font-style: italic;

font-size:30px;
`
const LongDescription = styled.div`
font-size:23px;

`
const ListingPage = ({data}) => {
   
  return (
    <Container>
     <Title>
      {data.Title}
      </Title> 
    <ShortDescription>
       {data.ShortDescription}
    </ShortDescription>
    <LongDescription>
      {data.LongDescription}
    </LongDescription>

      

    </Container>
    
  )
}

export default ListingPage
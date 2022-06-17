import React from 'react'
import styled from "styled-components";
import ReviewCard from './ReviewCard';
const Container = styled.div`
    display:flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 50px;
   padding-bottom: 50px;
   width: 100%;
   overflow-x: hidden;
`
const SectionBackground = styled.div`
  display:flex;
   flex-direction: row;
   padding-bottom:20px ;
   align-items:right;
   
   width: 100%;
  height: 50vw;
  background-color:#C2DFDA ;
 border-radius:2rem;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
overflow-x: scroll; 
`
const SectionHeading = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 4em;
text-align: center;
color: #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const SectionUnderline = styled.div`
background: #3E88B2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
width:587px;
height:10px;
margin-bottom:20px;
`
//C2DFDA
const ReviewSection = () => {
  return (
    <Container>
    <SectionHeading>Reviews</SectionHeading>
    <SectionUnderline></SectionUnderline>
    <SectionBackground>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
 
    </SectionBackground>
    </Container>
  )
}

export default ReviewSection
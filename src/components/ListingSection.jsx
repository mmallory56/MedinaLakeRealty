import React from 'react'
import styled from "styled-components";
import ListingCard from './ListingCard';

const Container = styled.div`
    display:flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 50px;
   width: 100%;
   overflow-x: hidden;
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

const CardContainer = styled.div`
display:flex;
   flex-direction: row;
   padding-bottom:20px ;
   align-items:right;
   overflow-x: scroll;
   width:100%;
   height:100%;
   
`

const ListingSection = ({data}) => {
  console.log(data.allStrapiListing.nodes)
  return (
   <Container>
       <SectionHeading>Featured Listings </SectionHeading>
       <SectionUnderline></SectionUnderline>
       <CardContainer>
           {data.allStrapiListing.nodes.map(item=>{
                return <ListingCard key={item.id} data={item}></ListingCard>
           })}
       </CardContainer>
       
   </Container>
  )
}
//  export const query = graphql`query HomePageQuery{

//   allStrapiListing{
//     nodes {
//       id
//       Title

//     }
//   }

// }`
export default ListingSection
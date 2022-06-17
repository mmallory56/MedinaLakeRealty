import React from 'react'
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Card = styled.div`
display:flex;
flex-direction: column;
width:350px;
height:auto;
margin-right:20px;
margin-Left:20px;
  background: #F2F2F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`
const Image = styled(GatsbyImage)`
width:auto;
height:auto;
border-radius: 20px;
z-index: 0;
`
const Price = styled.div`
font-family: 'Shadows Into Light Two', cursive;
padding:0px;
font-style: normal;

font-weight: 400;
line-height:auto;
margin-left:10px ;
margin-top:0px;
margin-bottom: 0px;

color: #000000;
text-overflow: ellipsis;
white-space: nowrap;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`
const Address = styled.div`
padding:0px;
font-family: 'Shadows Into Light Two', cursive;
font-weight: 400;
font-style: normal;
width:auto ;

font-size: 12px;
line-height: auto;
margin-left:10px;
color: #000000;


margin-top:10px;
margin-bottom: 10px;
text-overflow: ellipsis;
overflow:hidden ;
white-space: nowrap;
`
const ListingCard = ({data}) => {
  const image = getImage(data.Images?data.Images[0].localFile:"")
  console.log(image)

  return (
  <Card>
  {/* //    <Image src={data.Images?`http://localhost:3000${data.Images[0].url}`:"../../../Listingimage.png"}/> */}
     <Image image={image} alt={data.address} />
    <Price>{data?data.SalePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }):"$240,000"}</Price>
    <Address> {data?data.address:""}</Address>
    
   </Card>
  )
}

export default ListingCard
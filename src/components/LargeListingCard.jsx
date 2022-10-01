import React from 'react'
import styled from "styled-components";
import{Link }from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
const Card = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:auto;

margin-top:25px;
  background: #F2F2F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`
const LinkEdit = styled(Link)`
  width: 100%;
  height: auto;
`
const Image = styled(GatsbyImage)`
height:auto;
border-radius: 20px;
width:100%;
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
const ListingAgent= styled.div`
    padding:0px;
font-family: 'Shadows Into Light Two', cursive;
font-weight: 400;
font-style: normal;
width:auto ;

font-size: 12px;
line-height: auto;
margin-left:10px;
color: #525252;


margin-top:0px;
margin-bottom: 10px;
text-overflow: ellipsis;
overflow:hidden ;
white-space: nowrap;
`
const LargeListingCard = ({data}) => {
  const image = getImage(data.Images?data.Images[0].localFile:"")
  console.log(data)
  console.log(image)

  return (
   <Card>
  {/* //    <Image src={data.Images?`http://localhost:3000${data.Images[0].url}`:"../../../Listingimage.png"}/> */}
    
     
    <Link to={`/propertypage/${data?data.id:""}`}> <Image image={image} alt={data.Title} />
    </Link>
    <Price>{data.SalePrice?data.SalePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }):"$240,000"}</Price>
    <Address> {data?data.address:""}</Address>
    <ListingAgent>{data?`${data.company}, ${data.listingAgent}`:"N/A"}</ListingAgent>
   </Card>
  )
}

export default LargeListingCard
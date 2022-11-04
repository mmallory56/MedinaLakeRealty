import React from 'react'
import { graphql } from "gatsby"
import LogoBar from '../../components/LogoBar';
import MapComponent from '../../components/MapComponent';
import NavBar from '../../components/NavBar';
import ListingPage from '../../components/ListingPage';
import Carousel from '../../components/Carousel';
import PropertyInfoBar from '../../components/PropertyInfoBar';


export default function Component(props) {
 
  const data = props.data.allStrapiListing.nodes[0];
    return <>

      <LogoBar></LogoBar>
     
     <Carousel data={data}></Carousel>
    <PropertyInfoBar data={data}/>
     <MapComponent lng={data.LocationLongitute} ></MapComponent>
     <ListingPage data={data}></ListingPage>
     
      <NavBar></NavBar>
    
    </>
  }

  export const query = graphql`query ($id:String) {
    
     allStrapiListing(filter: { id:{eq:$id} }){
      
       nodes {
      
        Images {
          localFile{
            childImageSharp {
              gatsbyImageData(
                width: 1400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              }
         }
         
          
          
        }
         id
         Title
         SalePrice
         ListedDate
         ShortDescription
         LongDescription
         ForSale
         Beds
        Baths
         LocationLatitude
         LocationLongitute
         type
       
         
        address
        listingAgent
        company
         }
     
     }
   
   }`
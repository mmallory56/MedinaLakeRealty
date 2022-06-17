import React from 'react'
import { graphql } from "gatsby"
import { Data } from '@react-google-maps/api';
import LogoBar from '../../components/LogoBar';
import HeroListing from '../../components/HeroListing';
import SearchBar from '../../components/SearchBar';
import MapComponent from '../../components/MapComponent';
import NavBar from '../../components/NavBar';

export default function Component(props) {
  const data = props.data.allStrapiListing.nodes[0];
    return <div>
      <LogoBar></LogoBar>
     
     
  
     <MapComponent></MapComponent>
      {data.Title}
      {" "}
      {data.ForSale?"For Sale":"Off Market"}
      {" "}
      {data.ShortDescription?data.ShortDescription:""}
      {data.SalePrice}
      {data.listingAgent}
      {data.company}
      <NavBar></NavBar>
    </div>
  }

  export const query = graphql`query($id:String) {
    
     allStrapiListing(filter: { publishedAt: { ne: null },id:{eq:$id} }){
      
       nodes {
      
        Images {
          localFile{
            childImageSharp {
              gatsbyImageData(
                width: 900
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
         SalePrice
        
         LocationLatitude
         LocationLongitute
         type
         createdAt
         updatedAt
         publishedAt
        address
        listingAgent
        company
         }
     
     }
   
   }`
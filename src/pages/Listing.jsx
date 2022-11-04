import React from 'react'
import HeroListing from '../components/HeroListing'
import LogoBar from '../components/LogoBar'
import NavBar from "../components/NavBar"
import SearchBar from '../components/SearchBar'
import { graphql } from "gatsby"

import LargeListingCard from '../components/LargeListingCard'
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent'
import Search from '../components/SearchContainer'
import { ListingsToSearch } from '../components/ListingsToSearch'
const Listing = ({data}) => {
  return (
    <div>
      <LogoBar></LogoBar>
     
    <HeroListing></HeroListing>
  
    <ListingsToSearch data={data.allStrapiListing}></ListingsToSearch>
    
      <Footer></Footer>
    <NavBar></NavBar>

    </div> 
  )
}
export const query = graphql`query ($NameString: String){
  
   allStrapiListing(filter: { ForSale: {ne:false},Title:{eq:$NameString}}){
    
     nodes {
    
      Images {
        localFile{
          childImageSharp {
            gatsbyImageData(
              width: 1250
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
       
      
       LocationLatitude
       LocationLongitute
       type
      
      address
      listingAgent
      company
       }
   
   }
 
 }`
export default Listing
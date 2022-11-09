import React, { useState } from 'react'
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
import { useEffect } from 'react'
const Listing = ({data,location}) => {
  const [search ,setSearch ]=useState(location.state.search);
useEffect(()=>{
setSearch(location.state.search)
},[location])
  console.log(location)
  return (
    <div>
      <LogoBar></LogoBar>
     
    <HeroListing title={search}></HeroListing>
  
    <ListingsToSearch data={data.allStrapiListing} startSearch={location.state.search?location.state.search:""}></ListingsToSearch>
    
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
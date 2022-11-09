import React, { useState } from 'react'
import HeroListing from '../components/HeroListing'
import LogoBar from '../components/LogoBar'
import NavBar from "../components/NavBar"
import { graphql } from "gatsby"
import Footer from '../components/Footer'
import { ListingsToSearch } from '../components/ListingsToSearch'
import { useEffect } from 'react'
const Listing = ({data,location}) => {
  const [search ,setSearch ]=useState(location.state.search);
  console.log(data)
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
export const query = graphql`query Listings{
  
   allStrapiListing(filter: { ForSale: {ne:false} }) {
    
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
       SquareFootage
      
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
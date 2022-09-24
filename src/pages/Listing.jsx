import React from 'react'
import HeroListing from '../components/HeroListing'
import LogoBar from '../components/LogoBar'
import NavBar from "../components/NavBar"
import SearchBar from '../components/SearchBar'
import { graphql } from "gatsby"
import LargeListingCard from '../components/LargeListingCard'
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent'
const Listing = ({data}) => {
  return (
    <div>
      <LogoBar></LogoBar>
     
    <HeroListing></HeroListing>
   
    <MapComponent></MapComponent> 
    <SearchBar/>
    {data.allStrapiListing.nodes.map(item=>
      {
        return <LargeListingCard key={item.id} data={item}/>
      })}
      <Footer></Footer>
    <NavBar></NavBar>

    </div> 
  )
}
export const query = graphql`query ListingPageQuery{
  strapiMedia {
         localFile {
           url
         }
       }
   allStrapiListing(filter: { publishedAt: { ne: null },ForSale: {ne:false} }){
    
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
       SalePrice
       Title
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
export default Listing
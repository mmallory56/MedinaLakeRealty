import * as React from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

import ListingSection from "../components/ListingSection"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"

import { graphql } from "gatsby"
import { SEO } from "../components/seo"

const mainStyle = {
  
  margin: 0, 
  padding: 0 ,
  boxsizing:"border-box"

}

// markup
const IndexPage = ({data,title, description, pathname, children}) => {

  return (
    <main style={mainStyle}>

      <LogoBar></LogoBar>
      
      <Hero></Hero>
      <ListingSection data={data}></ListingSection>
      {/* <ReviewSection></ReviewSection> */}
      <Footer></Footer>
      <NavBar data={data}></NavBar>
      </main>
  )
}
export const query = graphql`query HomePageQuery{
 strapiMedia {
        localFile {
          url
        }
      }
  allStrapiListing(filter: {  },limit:4){
   
    nodes {
   
      Images {
        localFile{
          childImageSharp {
            gatsbyImageData(
              width: 350
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            }
       }
       
        
        
      }
    
    
     
    
      id
      Title
      SalePrice
      address
      }
  
  }

}`
export default IndexPage


export const Head = () => (
  <SEO />
)


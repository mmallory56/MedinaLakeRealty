import React from 'react'
import styled from 'styled-components';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CarouselProvider,Dot, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const ImageSlide =styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 5px;
  height: auto;
 object-fit: contain;

`
const StyledButtonBack = styled(ButtonBack)`
position:absolute;
top: 50%;
left:10px;
outline:none;
border-style:none;
border-radius: 20%;
transform: translateY(50%);
background-color: #00000022;
@media screen and (max-width: 600px) {
    top:30vw;
}
 
@media screen and (max-width: 300px) {
  top:30vw;
}
`
const StyledButtonNext = styled(ButtonNext)`
position:absolute;
top: 50%;
right:5px;
z-index: 120;
background-color: #00000022;
outline:none;
border-style:none;
border-radius: 20%;
transform: translateY(50%);
@media screen and (max-width: 600px) {
    top:30vw;
}
 
@media screen and (max-width: 300px) {
  top:30vw;
}
`
const LeftIcon = styled(AiOutlineLeft)`
  color: black;
  font-size: 4rem;
`
const RightIcon = styled(AiOutlineRight)`
  color:black;
  font-size: 4rem;
`
  
const Carousel = ({images=["",""],data}) => {
 
  
  return (
      <> 
         <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        totalSlides={data.Images.length}
        touchEnabled={true}
        dragEnabled={true}
        styles={{paddingTop: "100px"}}
      > 
        <Slider>
         
          {data.Images.map((item,index)=>{
          
            const image = getImage(item.localFile)
            return <Slide key={index} index={index}><ImageSlide image={image} alt={data.address} style={{width:"100%",borderRadius:"20px"}}/></Slide>
          })} 
          {data.Images.map((item,index)=>{
            
         

            return <Dot key={index}  style={{position:"absolute"}}index={index} disabled={false}/>
          })}
        </Slider>
       
        <StyledButtonBack><LeftIcon /></StyledButtonBack>
        <StyledButtonNext><RightIcon /></StyledButtonNext>
      </CarouselProvider></>
  )
}

export default Carousel
import React from 'react'
import styled from "styled-components";
import ButtonEmpty from './ButtonEmpty';

const Container = styled.div`
display:flex;
flex-direction: column;
    width:100%;
    height: auto;

background: #F8F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

`
const TopRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
 width: 100%;
 height: auto;
 padding-top:10px;
 padding-bottom: 10px;

border-top-left-radius: 20px;
border-top-right-radius: 20px;
`
const CenterRow = styled.div`
    width: 100%;
    height: auto;
 
 padding-bottom: 10px;
 
 
`
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
 padding-top:30px;
 padding-bottom:30px;
 
`
const Price = styled.div`
    margin-left:4%;
    font-weight: bold;
    font-style: normal;
    font-family:  'Roboto', sans-serif;
    font-size: larger;
`
const BedRoomsBaths = styled.div`
    margin-left: 1%;
    font-family: 'Cormorant SC', serif;
    font-weight: 300;
    color: grey;

`
const Address = styled.div`
    margin-left:4%;
    font-size: 1rem;
    font-family: 'Rosario', sans-serif;
    font-weight: bold;
`
const OutlineButton = styled.div`
    background-color: transparent;
    color: black;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    padding:20px;
    padding-top:5px;
    padding-bottom:5px;
    margin-left:10px;
    &hover{

    }
`
const ColorButton = styled.div`
    background-color: #4d4ddd;
    color: white;
    border-radius: 10px;
    padding:20px;
    padding-top:5px;
    padding-bottom:5px;
    margin-left:10px;
    &hover{

    }
`
function PropertyInfoBar() {
  return (
    <Container>
        <TopRow>
        <Price>
            $249,000
        </Price>
        <BedRoomsBaths>
            1 BD | 1 BTH | 1200 sqft
        </BedRoomsBaths>
        </TopRow>
        <CenterRow>
       <Address>
       792 Alamo Beach Rd, Pipe Creek, Tx 78062
       </Address>
        </CenterRow>
        <ButtonBox>
             <OutlineButton>
                Call Now
             </OutlineButton>
        <ColorButton>
        Message
        </ColorButton>
        </ButtonBox>
    </Container>
  )
}

export default PropertyInfoBar
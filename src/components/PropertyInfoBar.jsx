import React,{useState} from 'react'
import styled from "styled-components";

import ContactForm from './ContactForm';
import { Modal } from './Modal';

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
    background-color: #e0e0e09f;
    color: black;
    border-color: #ffffff53;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    padding:20px;
    padding-top:5px;
    padding-bottom:5px;
    margin-left:10px;
    box-shadow: 2px 2px 3px #0000007b;
    & a{
        text-decoration: none;
        color: black;

    }
    &:hover{
        transition: all .3s ease-in-out;
        box-shadow: none;
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
    box-shadow: 3px 3px 3px #0000007b;
    &:hover{
        transition: all .3s ease-in-out;
        box-shadow: none;
    }
`
function PropertyInfoBar({data}) {
    const [modalVisible,setModalVisible] = useState(false)
  return (
    <Container>
        <TopRow>
        <Price>
            {data? data.SalePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }):"N/A"}
            
        </Price>
        <BedRoomsBaths>
            {data?data.Beds:""} BD | {data?data.Baths:""} BTH | 1200 sqft
        </BedRoomsBaths>
        </TopRow>
        <CenterRow>
       <Address>
       {data.address}
       </Address>
        </CenterRow>
        <ButtonBox>
             <OutlineButton alt="Call Now ">
                Call Now 
                <a href="tel:8306123709"> (830)-688-3709</a>
             </OutlineButton>
        <ColorButton onClick={()=>setModalVisible(true)}>
        Message
        </ColorButton>
        </ButtonBox>
        <Modal setVisible={setModalVisible} Visible={modalVisible}><ContactForm StartMessage={`I'm interested in ${data.address}`}></ContactForm></Modal>
    </Container>
  )
}

export default PropertyInfoBar
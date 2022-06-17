import React from 'react'
import { GoogleMap, LoadScript, Marker,Circle,InfoBox } from '@react-google-maps/api';
import styled from "styled-components";

const CircleBox = styled.div`
  width:20px;
  height:20px;
  border-radius: 100%;
  border-color: red;
  border-width: 2px;
  border-style: inset;
  background-color: #ffffff;

`
const InfoBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`


const containerStyle = {
  marginTop:10,
  width: '100%',
  height: '40vw',
  borderRadius:20
};

const center = {
  lat: 29.5991112339752,
  lng: -98.93125807183542
};


const MapComponent = ({data}) => {
  const options = { closeBoxURL: '', enableEventPropagation: true };

  const onLoad = infoBox => {
  console.log('infoBox: ', infoBox)
};
  return (
    <LoadScript
    googleMapsApiKey="AIzaSyAQtP28DhAu5tb5W_qFyDwKtUaeynCzg_Y"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}

    >
      {/* <Marker position={{ lat: 29.5991112339752,
  lng: -98.93125807183542}} label={"Medina Lake Realty"}></Marker> */}
  <Circle position={{ lat: 29.5991112339752,
  lng: -98.93125807183542}} radius={2} />
    <InfoBox
      onLoad={onLoad}
      options={options}
      position={center}
      style={{width:"auto"}}
    >
      <InfoBoxContainer> 
      <CircleBox></CircleBox>
      <div style={{ borderRadius:20, backgroundColor: 'white', opacity: 1, padding:"0px 10px" }}>
        <div style={{ fontSize: 16, fontColor: `#08233B` ,padding:"0px 0px"}}>
          200k
        </div>
      </div>
      </InfoBoxContainer>
     
    </InfoBox>
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  </LoadScript>
  )
}

export default MapComponent
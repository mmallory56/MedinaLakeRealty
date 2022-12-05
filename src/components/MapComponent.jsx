import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';





const containerStyle = {
  marginTop:10,
  width: '100%',
  height: '60vw',
  borderRadius:20
};

const center = {
  lat: 29.5991112339752,
  lng: -98.93125807183542
};


const MapComponent = ({lng= -98.93125807183542, lat=29.5991112339752,markers=[{lng:20,lat:20}]}) => {
  center.lat = lat;
  center.lng = lng;
 
  return (
    <LoadScript
    googleMapsApiKey={"AIzaSyAQtP28DhAu5tb5W_qFyDwKtUaeynCzg_Y"}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}

    >
      {markers.map((Item,index)=>{
        return <Marker key={index} position={Item}></Marker>
      })}
      <Marker position={{ lat: lat,
  lng: lng}} ></Marker> 
  
    
    </GoogleMap>
  </LoadScript>
  )
}

export default MapComponent

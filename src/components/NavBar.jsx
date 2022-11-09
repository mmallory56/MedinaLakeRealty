import React, { useState } from "react";
import DrawerItem from "./DrawerItem";
import MenuButton from "./MenuButton";
import MenuDrawer from "./MenuDrawer";
import { StaticQuery, graphql } from "gatsby"

const header = {
  position:"fixed",
  display: "flex",
  left:"0px",
  top:"-3px",
  right:"0px",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "50px",
  borderRadius: "5px",
  backgroundColor: "#ffffff9bf",
  color: "white"
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <>
 
  <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}></MenuButton>
  <MenuDrawer isOpen={isOpen}>
    <DrawerItem id="" search="">Home</DrawerItem>
    <DrawerItem id="Listing" search="Waterfront">Water Front </DrawerItem>
    <DrawerItem id="Listing" search="Residential">Houses</DrawerItem>
    <DrawerItem id="Listing" search="Land">Land</DrawerItem>
    <DrawerItem id="Listing" search="">Buying?</DrawerItem>
    <DrawerItem id="Listing" search="">Selling?</DrawerItem>
    
  </MenuDrawer>
  </>

  
 
      

  
};


export default NavBar;

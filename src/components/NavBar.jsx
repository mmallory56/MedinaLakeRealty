import React, { useState } from "react";
import DrawerItem from "./DrawerItem";
import MenuButton from "./MenuButton";
import MenuDrawer from "./MenuDrawer";
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
  return <div style={header}>
    <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}></MenuButton>
    <MenuDrawer isOpen={isOpen}>
      <DrawerItem id="waterfront">Water Front</DrawerItem>
      <DrawerItem>Houses</DrawerItem>
      <DrawerItem>Land</DrawerItem>
      <DrawerItem>Buying?</DrawerItem>
      <DrawerItem>Selling?</DrawerItem>
      
    </MenuDrawer>
      

  </div>;
};

export default NavBar;

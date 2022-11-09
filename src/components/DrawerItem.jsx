import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
const Item = styled(Link)`
width:auto;
  margin-top:20px;
  border-radius:.2rem ;
  color: white;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: inline-block;
  position: relative;
  text-align: right;
  &:after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: #00768b;
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}
&:hover:after{
  transform: scaleX(1);
  transform-origin: bottom right;
}

`
const DrawerItem = ({children,id="",search}) => {
  return (
    <Item to={`/${id}`}  search={search} state={{search:search}}>
     
     {children} 
      </Item>
  )
}

export default DrawerItem
import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
const Item = styled(Link)`
width:65%;
  margin-top:20px;
  border-radius:.2rem ;
  color: white;
  transition: all 0.3s ease-in-out;
  :hover {
  background-color: #a7a7a712;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  text-decoration: underline;
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
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
text-align: left;
display: flex;
align-items: center;
justify-content: left;
  width: 100%;
  height: 50px;
  background-color: #C4C4C4;
  border-radius: .5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Input = styled.input`
  width: 200px;
  height: 20px;
  margin-left:20px;
  background: #F1EDED;
box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.25);
border: none;
padding:10px;
    background-image:none;
border-radius: 39px;
`

const SearchBar = () => {
  return (
    <Container><Input type="search" placeholder='search'></Input></Container>
  )
}

export default SearchBar
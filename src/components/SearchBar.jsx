import React from 'react'
import styled from "styled-components";

const Container = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
  width: 100%;
  height: 90px;
  background-color: green;
  border-radius: .5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Input = styled.input`
  width: 200px;
  height: 20px;
`

const SearchBar = () => {
  return (
    <Container>SearchBar<Input></Input></Container>
  )
}

export default SearchBar
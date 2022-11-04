import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:max(200px,40vw);
height: 70%;
& label {
  text-align: left;
  margin-top: 20px;
}
& label, input, button {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
}

& input::placeholder {
  color: gray;
  
}

& label {
  margin-bottom: 4px;
}

& label:nth-of-type(2) {
  margin-top: 12px;
}
& a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}
`
const Input = styled.input`
background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 30px;
  font-size: 14px;
  border-radius: 50px;
  padding-left:30px;
  padding-right:20px;
  margin-top:20px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  `;

 const Button = styled.input`
  color: white;
  margin-top: 20px;
  background: #1DA1F2;
  height: 40px;
  border-radius: 20px;
width: max(50px,300px);
  cursor: pointer;
  text-align: center;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  &:hover{
    box-shadow: none;
  }
  `
  const Message = styled.textarea`
  background: #ecf0f3;
 padding:20px;
  height: 80px;
  width:calc(100% - 40px);
  font-size: 14px;
  border-radius: 20px;
  
  margin-top:10px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  
  `
const ContactForm = ({StartMessage}) => {
  const [message, setMessage] = useState(StartMessage)
  const handleChangeMessage = e=>{
    setMessage(e.target.value)
  }
  return (
    <Form>
  <label className="reveal">
    Name:
    <Input type="text" name="name" placeholder='Name?' />
  </label>
  <label className="reveal">
    Email:
    <Input type="email" name="email" placeholder='example@email.com'/>
  </label>
  <label >
    Message:
    <Message type="textarea" name="name" placeholder='A Nice Message ex.' value={message} onChange={handleChangeMessage} />
  </label>
  <Button type="submit" value="Submit" />
</Form>
  )
}

export default ContactForm
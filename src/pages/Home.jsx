import React from 'react'
import styled from 'styled-components'

const Home = () => {
  const MyDiv = styled.h1`
    color : ${({theme})=> theme.colors.red}
  `
  return (
    <MyDiv>Home</MyDiv>
  )
}

export default Home
import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Header = () => {
const Header = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${'' /* .logo {
    height: 5rem;
  } */}
`;
  return (
    <Header>
        <NavLink to = "/">
            <img style={{height: '8rem'}} src='./images/logo.png' />
        </NavLink>
        <Navbar />
    </Header>
  )
}

export default Header
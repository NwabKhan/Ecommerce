import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <img style={{ height: "8rem" }} src="./images/logo.png" alt="LOGO"/>
      </NavLink>

      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;

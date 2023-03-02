import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  const Wrapper = styled.div`
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
    padding-left: 1.2rem;
    a {
      font-size: 3.2rem;
    }
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 2.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.helper};
        transition: color 0.3s linear;
        margin: 0 5px
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  `;
  return (
    <Wrapper>
      <NavLink  className="navbar-link" to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

export default PageNavigation;

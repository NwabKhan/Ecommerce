import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Nav>
      <div className={toggle ? "active" : ""}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className="navbar-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className="navbar-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={() => setToggle(false)}
              className="navbar-link"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className="navbar-link"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              onClick={() => setToggle(false)}
              className="navbar-link cart-icon-link"
            >
              <AiOutlineShoppingCart className="cart-icon" />
              <span className="cart-items-count">4</span>
            </NavLink>
          </li>
        </ul>

        {/* for small screens */}
        <div className="mobile-navbar-btn">
          <AiOutlineMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setToggle(true)}
          />
          <AiOutlineClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setToggle(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .cart-icon-link {
    position: relative;
    .cart-icon {
      position: relative;
      font-size: 3rem;
    }
    .cart-items-count {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
  .user-login--name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.5rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      ${"" /* if you want to remove that slowly then use this */}
      ${
        "" /* transform: translateX(100%);
        transform-origin: top; 
        transition: all 3s linear; */
      }
    }
    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: none;
      transition: all 3s linear;
      .navbar-link {
        font-size: 4rem;
      }
    }
    .cart-icon-link {
      position: relative;
      .cart-icon {
        position: relative;
        font-size: 5rem;
      }
      .cart-items-count {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }
    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../styles/Button";

const HeroSection = ({ desc }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>Discountify</h1>
            <p>
              {desc}
            </p>

            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img src="images/pic.jpeg" alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 2rem;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${"" /* colorful shadow/Box behind the image */}
  figure {
    position: relative;
    &::after {
      content: "";
      width: 90%;
      height: 100%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 20%;
      top: -2rem;
      border-radius: 3px;
      z-index: -1;
    }
  }
  .img-style {
    width: 40rem;
    height: 40rem;
    border-radius: 3px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    ${"" /* if we want that colorful shadow , uncommint this code */}
    figure::after {
      display: none;
      ${
        "" /* content: "";
        width: 50%;
        height: 100%;
        left: 0;
        top: 10%;
        background-color: rgba(81, 56, 238, 0.4); */
      }
    }
  }
`;

export default HeroSection;

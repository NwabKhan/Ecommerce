import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../../featureproduct/Product";
const GridView = ({ admin }) => {
  const [availableProducts, setAvailableProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}get-all-products`
      );
      const data = await res.json();
      setAvailableProducts(data);
    } catch (error) {
      console.log("first", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {availableProducts.map((currentProduct) => {
          return (
            <Product
              key={currentProduct.ID}
              {...currentProduct}
              admin={admin}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    ${
      "" /* &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    } */
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.4);
    }
    &:hover .edit {
      display: block;
      position: absolute;
      bottom: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

    .edit,
    .delete {
      display: none;
    }

    &:hover .delete {
      display: block;
      position: absolute;
      bottom: 15%;
      right: 30%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  ${"" /* these classes coming from Product component */}
  .card {
    background-color: ${({ theme }) => theme.colors.product_bg};

    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default GridView;

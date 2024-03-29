import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import { useCartHook } from "../../context/CartContext";
import { Button } from "../../styles/Button";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartHook();

  const { stock, color, ID, maxQuantity } = singleProduct; // Destructing the data from finalData
  const [amount, setAmount] = useState(1); //For the quantity of the product

  const setIncrease = () => {
    amount < maxQuantity ? setAmount(amount + 1) : setAmount(maxQuantity);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Availabe Color:
          <button
            style={{ backgroundColor: color }}
            className={color ? "btnStyle active" : "btnStyle"}
          >
            {color ? <FaCheck className="checkStyle" /> : null}
          </button>
        </p>
      </div>

      {/* To set the quantity of a particualr product in SingleProduct Page */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <div className="cart-two-button">
        <NavLink to="ordernow">
          <Button>Buy Now</Button>
        </NavLink>
        <NavLink
          to="/cart"
          onClick={() => addToCart(ID, color, amount, singleProduct)}
        >
          <Button className="btn-clear">Add To Cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .cart-two-button {
    margin-top: 2rem;
    .btn-clear {
      margin-left: 5rem;
      background-color: #e74c3c;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cart-two-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .btn-clear {
        margin: 1rem;
      }
    }
  }
`;

export default AddToCart;

import  React , { useState } from "react";
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import {Button} from '../../styles/Button' 
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ singleProduct }) => {

  const { stock, colors, id } = singleProduct; // Destructing the data from finalData
  const [color, setColor] = useState(colors[0]); // using this to change the active color onclick
  const [amount, setAmount] = useState(1); //For the quantity of the product

  const setIncrease = ()=>{
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }

  const setDecrease = ()=>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

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
  `;

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((currentColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: currentColor }}
                onClick={() => setColor(currentColor)}
                className={
                  color === currentColor ? "btnStyle active" : "btnStyle"
                }
              >
                {color === currentColor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <NavLink to = '/cart'>
        <Button>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

export default AddToCart;
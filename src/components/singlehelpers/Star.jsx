import React from "react";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";
const Star = ({ stars, reviews }) => {
  // Array.form will return an array of five element using its callback ftn
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    // debugger; // use this command for debugging
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsFillStarFill className="icon" />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf className="icon" />
        ) : (
          <BsStar className="icon empty-icon" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 1.8rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;

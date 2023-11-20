import React from "react";
import styled from "styled-components";

import { useFilterHook } from "../../../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, grid_view } = useFilterHook(); // getting the data from filter context

  if (filterProducts[0] === undefined) {
    // sinse for first time products are emty then loaded, so handling undefined
    return (
      <Wrapper>
        <h2 className="container">UH OH! No Product Available</h2>
      </Wrapper>
    );
  } else {
    // if (grid_view === true) {
    //   return <GridView products={filterProducts} />;
    // }
    // if (grid_view === false) {
    //   return <ListView products={filterProducts} />;
    // }
    return <GridView />;
  }
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.btn};

    h2 {
      font-size: 10rem;
    }
  }
`;

export default ProductList;

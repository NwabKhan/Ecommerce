import React from "react";
import styled from "styled-components";
import FilterSection from "../components/producthelpers/FilterSection";
import ProductList from "../components/producthelpers/ProductList";
import SortSection from "../components/producthelpers/SortSection";
import {useFilterHook} from '../context/FilterContext'
const Products = () => {
  const {filterProducts} = useFilterHook()
  if(filterProducts[0] === undefined){
    return <h2>---Loading</h2>
  }else{
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <section>
          <FilterSection />
        </section>
        <section className="product-view--sort">
          <div className="sort-filter">
            <SortSection />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
  }
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;

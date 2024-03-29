import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterHook } from "../../context/FilterContext";

const SortSection = () => {
  const { grid_view, setGridView, setListView, filterProducts, sorting } =
    useFilterHook();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView} // this ftn will call in FilterContext and make grid_view true
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView} // make grid_veiw false in FilterContext(FilterReducer)
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${filterProducts.length} Products Available`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <select
            id="sort"
            name="sort"
            className="sort-selection--style"
            onClick={(e) => sorting(e)}
          >
            <option value="lowest">Price(lowest)</option>
            <option disabled></option>
            <option value="highest">Price(highest)</option>
            <option disabled></option>
            <option value="a-z">Sorting(a-z)</option>
            <option disabled></option>
            <option value="z-a">Sorting(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.bg};

    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
  .product-data p{
    color: ${({ theme }) => theme.colors.btn};
  }
`;

export default SortSection;

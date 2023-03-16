import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import { useFilterHook } from "../../context/FilterContext";
import { Button } from "../../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    allProducts,
    clearFilters,
  } = useFilterHook();

  //To get an array of unique data for each category like all, mobilem laptop etc.
  const getUniqueData = (data, property) => {
    let newData = data.map((currentData) => {
      return currentData[property];
    });

    // We want a single aaray of unique colors but colors are
    //  also in array, to get value in that we are using this one
    //  [...new Set([].concat(...newData))] => this mathod was use earlier to get unique
    //  data(array of arrays). Now we use data.flat()
    if (property === "colors") {
      // return (newData =  ["all", ...new Set([].concat(...newData))])
      newData = newData.flat();
    }
    //the data in the output array(newData) is repeated
    //So, to get an array of unique elements we use [...new Set(newData)]
    return (newData = ["all", ...new Set(newData)]);
  };

  const categoryData = getUniqueData(allProducts, "category"); // an arry of unique categories
  const companyData = getUniqueData(allProducts, "company"); // an array of unique companies
  const colorsData = getUniqueData(allProducts, "colors"); // an array of unique colors

  return (
    <Wrapper>
      <div
        className="filter-search"
        style={{
          backgroundColor: "#E2EAFC",
          padding: "4rem",
          borderRadius: "1rem",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search_form">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="SEARCH"
              onChange={(e) => updateFilterValue(e)}
            />
            <BiSearch className="search_icon" />
          </div>
        </form>

        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryData.map((currentCategory, index) => {
              //name property should be same as in data beacuse we are searching throug names in data
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={currentCategory}
                  className={currentCategory === category ? "active" : ""}
                  onClick={(e) => updateFilterValue(e)}
                >
                  {currentCategory}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter-company">
          <h3>Company</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onClick={(e) => updateFilterValue(e)}
            >
              {companyData.map((currentCompany, index) => {
                return (
                  <option key={index} value={currentCompany} name="company">
                    {currentCompany}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="filter-colors colors">
          <h3>Colors</h3>
          <div className="filter-color-style">
            {colorsData.map((currentColor, index) => {
              if (currentColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={currentColor}
                    name="color"
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={currentColor}
                  name="color"
                  style={{ backgroundColor: currentColor }}
                  className={
                    color === currentColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={updateFilterValue}
                >
                  {color === currentColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="filter-clear">
            <Button className="btn" onClick={() => clearFilters()}>
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .search_form {
    border: 1px solid ${({ theme }) => theme.colors.btn};
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: between;
    align-items: center;
    input{
      border: none;
      outline: none;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.btn};
      padding: 1.6rem 2.4rem;
      box-shadow: none ;
    }
    .search_icon{
      cursor: pointer;
      width: 10rem !important ;
      height: 2rem !important ;
    }

}
  h3 {
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 600;

  }
  .filter-search {
    color: ${({ theme }) => theme.colors.btn};
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: #F6F8fa;
        background-color: ${({ theme }) => theme.colors.bg};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    background-color: ${({ theme }) => theme.colors.bg}

    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear {
    margin-top: 3rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;

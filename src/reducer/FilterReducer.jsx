const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LoadFilterProduct":
      // 1st method
      // getting the aaray of the prices of products for finding
      //max_pice(used in range filter section). Directly using max
      //we cannot find max number since max does not accest array.(can find in object).
      //so we can use apply function which accept an array as parameter, using this code
      // const max_price = Math.max.apply(null,priceArray)

      // 2nd method
      //We can also use spread operator in Math.max to get the max value
      //let max_value = Math.max(...priceArray)

      // 3nd method(preffered)
      //We can also find max number in array using reducer method, but it will
      //cause error because we don't have initial value, so put zero(0) after
      //Math.max(initailPrice, currentPrice) as used below

      let priceArray = action.payload.map(
        (currentProduct) => currentProduct.price
      );
      const max_price = priceArray.reduce(
        (initailPrice, currentPrice) => Math.max(initailPrice, currentPrice),
        0
      );

      return {
        ...state,
        filterProducts: [...action.payload], //making the copy of original data
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          price: max_price,
          maxPrice: max_price,
        },
      };

    case "GridView":
      return {
        ...state,
        grid_view: true,
      };

    case "ListView":
      return {
        ...state,
        grid_view: false,
      };

    case "getSortValue": //It run when we change the sorting values i.e chnaging lowest to z-a in select
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SortingProduct":
      var sortedData;
      var { allProducts, sorting_value } = state;
      var tempProducts = [...allProducts]; //making copy of the allProducts in tempProducts

      //sorting data on differnt checks
      const sortingProduct = (a, b) => {
        //sort by price(lower first then higher)
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        //sort by price(higher first then lower)
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        //sort by name alphabetically (ascending)
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        //sort by name alphabetically (descending)
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      // using ftn sortingProduct getting the sorted products
      sortedData = tempProducts.sort(sortingProduct);

      return {
        ...state,
        filterProducts: sortedData,
      };

    case "updateFilterValue":
      const { value, name } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value.toLowerCase(),
        },
      };
    //it will be triggerd when the value in the text(filters:{text}) changes
    case "FilterProduct":
      let filterdProducts;
      let { filterProducts } = state;
      let temp = [...filterProducts];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        filterdProducts = temp.filter(
          (
            currentProduct //in arrow frn if we have single line return
          ) => currentProduct.name.toLowerCase().includes(text) //then there is no need for curly brackets and return keyword
        );
      }
      if (text === "") {
        filterdProducts = temp;
      }
      if (category !== "all") {
        //if (category is anythind except 'all') do this
        filterdProducts = filterdProducts.filter(
          (currentProduct) => currentProduct.category === category
        );
      }
      if (company !== "all") {
        filterdProducts = filterdProducts.filter(
          (currentProduct) => currentProduct.company === company
        );
      }
      if (color !== "all") {
        filterdProducts = filterdProducts.filter((currentProduct) =>
          currentProduct.colors.includes(color)
        );
      }
      if (price === 0) {
        filterdProducts = filterdProducts.filter(
          (currentProduct) => currentProduct.price === price
        );
      } else {
        filterdProducts = filterdProducts.filter(
          (currentProduct) => currentProduct.price <= price
        );
      }

      return {
        ...state,
        filterProducts: filterdProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: 0,
          maxPrice: 0,
          minPrice: 0,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;

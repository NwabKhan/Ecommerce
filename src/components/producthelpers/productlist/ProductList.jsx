import React from 'react'
import { useFilterHook } from '../../../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const {filterProducts, grid_view} = useFilterHook() // getting the data from filter context

  if(filterProducts[0] === undefined){ // sinse for first time products are emty then loaded, so handling undefined
    return <h2>---Loading</h2>
  }
  else{
    if(grid_view === true){
      return <GridView products = {filterProducts}/>
    }
    if(grid_view === false){
      return <ListView products = {filterProducts} />
    }
  }
};

export default ProductList
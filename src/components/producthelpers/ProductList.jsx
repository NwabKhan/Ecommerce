import React from 'react'
import { useFilterHook } from '../../context/FilterContext';
import GridView from './GridView';

const ProductList = () => {

  const {filterProducts, grid_view} = useFilterHook()

  if(filterProducts[0] === undefined){
    return <h2>---Loading</h2>
  }
  else{
    if(grid_view){
      return <GridView products = {filterProducts}/>
    }
  return (
    <div>

    </div>
  );
  }
};

export default ProductList
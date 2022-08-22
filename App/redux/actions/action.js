import {ADD_TO_CART, GET_PRODUCT_LIST} from '../constants';


  export const addProductList =(data) => {
    return {
      type: GET_PRODUCT_LIST,
      data:data
    };
  };
  export const addToCart =(dataItem) => {
    return {
      type: ADD_TO_CART,
      data:dataItem
    };
  };
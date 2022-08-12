import {GET_PRODUCT_LIST} from '../constants';


  export const addProductList =(data) => {
    return {
      type: GET_PRODUCT_LIST,
      data:data
    };
  };
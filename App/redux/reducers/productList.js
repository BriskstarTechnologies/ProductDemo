import { ensureBlock } from '@babel/types';
import { GET_PRODUCT_LIST } from '../constants';
const initialState = {
  productList: [],
};

const productList = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_PRODUCT_LIST:
      return {
        productList: action.data
      };
    default:
      return state;
  }
};
export default productList;

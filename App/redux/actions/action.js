import {ADD_QUANTITY, ADD_TO_CART,REMOVE_FROM_CART} from '../constants';

export const addToCart = (data)=>{

    return({
        type:ADD_TO_CART,
        data:data
    })
}

export const decrementNumber = ()=>{
    return({
        type:DECREMENT,
      
    })
}
export const removeFromCart=(id)=>{
    return({
        type:REMOVE_FROM_CART,
        id:id

    })
}
export const addQuantity =(id) => {
    return {
      type: ADD_QUANTITY,
      id:id,
    };
  };
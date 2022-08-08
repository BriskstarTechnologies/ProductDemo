import {ensureBlock} from '@babel/types';
import {ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART} from '../constants';
const initialState = {
  cartData: [],
  grandTotal: 0,
  deliveryCharges: 0.00,
};
let grandTotal = 0;
let isDeliveryChargesAdded = false;

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let existed_item = state.cartData.find(
        item => action.data.id === item.id,
      );

      // if (existed_item) {
      //   alert("Exists")
      //   action.data.quantity += 1;
      //   let itemTotal = action.data.price + action.data.total;
      //   action.data.total = itemTotal;

      //   //Apply delivery charges
      //   if(itemTotal >= 1000)
      //   {
      //       deliveryCharges="FREE";
      //       grandTotal = state.cartData.reduce(function (prev, current) {
      //         return prev + +current.total;
      //       }, 0);
      //   }
      //   else
      //   {
      //     deliveryCharges = 50;
      //     grandTotal = state.cartData.reduce(function (prev, current) {
      //       return prev + +current.total;
      //     }, 0) ;
      //   }

      //   return {
      //     ...state,
      //     grandTotal: grandTotal,
      //     deliveryCharges,
      //   };
      // }
      if (!existed_item) {
        action.data.quantity = 1;
        action.data.total = 0;

        //Set total in array item.
        let itemTotal = action.data.total + action.data.price;
        action.data.total = itemTotal;
        //*****

        let subTotal = state.grandTotal + action.data.price;
        //Set grandTotal.
     //   alert(subTotal)

        deliveryCharges = subTotal >= 1000 ? 'Free' : 50.00;

      
        
          
      grandTotal =   state.cartData.reduce((result, item) => item.quantity * item.price + result, 0); 
       
        
        // //Apply delivery charges
        // if (isDeliveryChargesAdded) {
        //   if (subTotal >= 1000) {
        //     grandTotal = subTotal;
        //   } else {
        //     isDeliveryChargesAdded = true;
        //     grandTotal = subTotal + deliveryCharges;
        //   }
        // }
        // else
        // {
        //   if (subTotal >= 1000) {
        //     grandTotal = subTotal;
        //   } else {
        //     isDeliveryChargesAdded = true;
        //     grandTotal = subTotal + deliveryCharges;
        //   }
        // }
        // if (state.cartData.length > 0) {
        //   grandTotal = subTotal >= 1000 ? subTotal : subTotal;
        // } else {
        //   grandTotal = subTotal >= 1000 ? subTotal - deliveryCharges : subTotal;
        // }

        return {
          ...state,
          cartData: [...state.cartData, action.data],
          grandTotal: grandTotal,
          deliveryCharges,
        };
      }
      break;
    case REMOVE_FROM_CART:
      let itemToRemove = state.cartData.find(item => action.id === item.id);
      let new_items = state.cartData.filter(item => action.id !== item.id);

      //calculating the grandtotal

      //Apply delivery charges
      if (new_items.grandTotal >= 1000) {
        deliveryCharges = 'FREE';
        grandTotal =
          state.grandTotal - itemToRemove.price * itemToRemove.quantity;
      } else if (new_items.grandTotal > 0) {
        deliveryCharges = 50.00;
        grandTotal =
          state.grandTotal -
          itemToRemove.price * itemToRemove.quantity -
          deliveryCharges;
      } else {
        deliveryCharges = 0.00;
        grandTotal =
          state.grandTotal -
          itemToRemove.price * itemToRemove.quantity -
          deliveryCharges;
      }

      return {
        ...state,
        cartData: new_items,
        grandTotal: grandTotal,
        deliveryCharges,
      };
      break;
    case ADD_QUANTITY:
      let addedItem = state.cartData.find(item => item.id === action.id);
      addedItem.quantity += 1;
      addedItem.total = addedItem.price * addedItem.quantity;

      //Set grandTotal
      grandTotal = state.grandTotal + addedItem.price;
      //  alert(state.grandTotal)

      //Apply delivery charges
      if (grandTotal >= 1000) {
        deliveryCharges = 'FREE';
        grandTotal = state.grandTotal + addedItem.price;
      } else {
        deliveryCharges = 50.00;
        grandTotal = state.grandTotal + addedItem.price + deliveryCharges;
      }

      return {
        ...state,
        grandTotal: grandTotal,
      };
    default:
      return state;
  }
};
export default cartItems;

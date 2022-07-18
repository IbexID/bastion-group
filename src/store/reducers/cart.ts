
import { CartState, CartAction, CartActionTypes } from "../../types/cart";



const initialState: CartState = {
    cart: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState =>{
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT_TO_CART:
            return state.cart ?  {cart: [...state.cart, action.payload]} :  {cart: action.payload}
        default:
            return state;
    }
}
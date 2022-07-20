import { Dispatch } from 'react';
import { CartAction, CartActionTypes } from '../../types/cart';
export const addProductToCart = (cartProductInfo: {}) => {
    
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionTypes.ADD_PRODUCT_TO_CART, payload:cartProductInfo  })

        } catch (e) {
            console.log(e)
        }
    }
}
export const removeProductFromCart = (id: number) => {
    
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionTypes.REMOVE_PRODUCT_FROM_CART, id  })

        } catch (e) {
            console.log(e)
        }
    }
}
export const clearCart = () => {
    
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionTypes.CLEAR_CART  })

        } catch (e) {
            console.log(e)
        }
    }
}
export const quantityUp = (id: number, val: number) =>{
    return (dispatch: Dispatch<CartAction>) =>{
        try {
            dispatch({type: CartActionTypes.QUANTITY_UP, id, up: val})
        } catch(e){
            console.log(e)
        }
    }
}
export const quantityDown = (id: number, val: number) =>{
    return (dispatch: Dispatch<CartAction>) =>{
        try {
            dispatch({type: CartActionTypes.QUANTITY_DOWN, id, down: val})
        } catch(e){
            console.log(e)
        }
    }
}
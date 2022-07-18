import { Dispatch } from 'react';
import { CartAction, CartActionTypes } from '../../types/cart';
export const addProductToCart = (cartProductInfo: {}) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionTypes.ADD_PRODUCT_TO_CART, payload: { ...cartProductInfo } })

        } catch (e) {
            console.log(e)
        }
    }
}
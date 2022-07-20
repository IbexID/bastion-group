import { Dispatch } from 'react';
import { ProductAction, ProductActionTypes } from '../../types/product';
export const addProduct = (productInfo: {}) => {
    return (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({ type: ProductActionTypes.ADD_PRODUCT_SUCCESS, payload: { ...productInfo } })

        } catch (e) {
            console.log(e);
        }
    }
}
import { Dispatch } from 'react';
import { ProductTypeAction, ProductTypeActionTypes } from '../../types/productTypes';
export const addProductType = (productTypeInfo: {}) => {
    return (dispatch: Dispatch<ProductTypeAction>) => {
        try {
            dispatch({ type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS, payload: { ...productTypeInfo } })

        } catch (e) {
            dispatch({ type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
import { ProductState, ProductAction, ProductActionTypes } from "../../types/product";

const initialState: ProductState = {
    products: [],
    error: null
}

export const productReducer = (state = initialState, action: ProductAction): ProductState =>{
    switch(action.type){
        case ProductActionTypes.ADD_PRODUCT:
            return {error: null, products: []}
        case ProductActionTypes.ADD_PRODUCT_ERROR:
            return {error: action.payload, products: []}
        case ProductActionTypes.ADD_PRODUCT_SUCCESS:
            return {error: null, products: [...state.products, action.payload]}
        default:
            return state;
    }
}
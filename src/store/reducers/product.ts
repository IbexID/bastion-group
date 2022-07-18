
import { ProductState, ProductAction, ProductActionTypes } from "../../types/product";



const initialState: ProductState = {
    products: []
}

export const productReducer = (state = initialState, action: ProductAction): ProductState =>{
    switch(action.type){
        
        case ProductActionTypes.ADD_PRODUCT_SUCCESS:
            
            return state.products ?  {products: [...state.products, action.payload]} :  {products: action.payload}
        default:
            return state;
    }
}
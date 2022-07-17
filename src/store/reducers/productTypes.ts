
import { ProductTypeState, ProductTypeAction, ProductTypeActionTypes } from "../../types/productTypes";


const initialState: ProductTypeState = {
    types: []
}

export const productTypeReducer = (state = initialState, action: ProductTypeAction): ProductTypeState =>{
    switch(action.type){
        case ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS:
            return state.types ?  {types: [...state.types, action.payload]} :  {types: action.payload}
        default:
            return state;
    }
}
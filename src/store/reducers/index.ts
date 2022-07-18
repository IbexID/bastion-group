import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productReducer } from "./product";
import { productTypeReducer } from "./productTypes";

export const rootReducer = combineReducers({
    products: productReducer,
    types: productTypeReducer,
    cart: cartReducer
})
export type RootState = ReturnType<typeof rootReducer>



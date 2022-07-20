import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productReducer } from "./product";
import { productTypeReducer } from "./productTypes";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    products: productReducer,
    types: productTypeReducer,
    cart: cartReducer,
    user: userReducer
})
export type RootState = ReturnType<typeof rootReducer>



import { combineReducers } from "redux";
import { productReducer } from "./product";
import { productTypeReducer } from "./productTypes";

export const rootReducer = combineReducers({
    products: productReducer,
    types: productTypeReducer
})
export type RootState = ReturnType<typeof rootReducer>



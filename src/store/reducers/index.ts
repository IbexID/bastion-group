import { combineReducers } from "redux";
import { productReducer } from "./product";

export const rootReducer = combineReducers({
    products: productReducer
})
export type RootState = ReturnType<typeof rootReducer>



import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/product'

import { productTypeReducer } from './reducers/productTypes';
import { rootReducer } from './reducers';
import { cartReducer } from './reducers/cart';



export const store = configureStore({
    reducer:rootReducer
})




import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/product'

import { productTypeReducer } from './reducers/productTypes';
import { rootReducer } from './reducers';



export const store = configureStore({
    reducer:{
        products: productReducer,
        types: productTypeReducer
    },
})




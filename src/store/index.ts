import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/product'

import {saveState} from '../localStorage';


export const store = configureStore({
    reducer:{
        products: productReducer,
       
    },
})

store.subscribe(()=>{
    saveState(store.getState())
})

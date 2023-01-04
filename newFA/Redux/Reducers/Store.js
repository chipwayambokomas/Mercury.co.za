import {configureStore} from '@reduxjs/toolkit'
import { productReducer } from './ProductReducer'

const Store = configureStore({
    reducer:{
        products: productReducer,
    }

})

export default Store
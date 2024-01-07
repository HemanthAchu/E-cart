import { configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./Slices/ProductSlice"
import wishlistSlice from "./Slices/wishlistSlice"
import CartSlice from "./Slices/CartSlice"


const cartSore = configureStore({
    reducer:{
        ProductSlice,
        wishlistSlice,
        cartReducer:CartSlice
    }
})
export default cartSore
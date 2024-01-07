import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts = createAsyncThunk('allproducts/fetchproducts', async()=>{
    const response = await axios.get("https://dummyjson.com/products")
    localStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data.products
})

 const productSlice = createSlice({
    name:'allproducts',
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    extraReducers:(builder )=>{
        builder.addCase(fetchproducts.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchproducts.rejected,(state)=>{
            state.loading = false
            state.products = []
            state.error = "API call failed.please Wait!!!"
        })

    }
})
export default productSlice.reducer
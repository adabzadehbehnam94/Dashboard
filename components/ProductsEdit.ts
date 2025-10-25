
import { createSlice } from "@reduxjs/toolkit";

interface State  {
    products : object[]
}

export const EditProducts = createSlice({
    name : "edProducts",
    initialState : {
        products : [],
        total : 0,
        count : 0
    },
    reducers :{
        add : (state : State , action)=>{
            state.products = [...state.products , action.payload.product]
        }
    }
})
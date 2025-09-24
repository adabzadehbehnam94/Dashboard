"use client"
import { createSlice } from "@reduxjs/toolkit";


interface State {
    porducts : [] | object[],
    count : number |string ,
    total : number | string
}


export const ShopingCard = createSlice({
    name : "card",
    initialState : {
        products : [],
        count : 0,
        total : 0
    },
    reducers :{
        add : (state : {products : [] | object[] ,count : string | number , total : string |number} , action)=> {
                state.products = [...state.products, {name : action.payload.name  , price : action.payload.price ,id : action.payload.id }]
                state.count = state.products.length
                const Sum = ()=>{
                    let sum = 0
                    const sumprice = state.products.map((item :any) =>{
                        const number = parseInt(item.price)
                        sum += number
                    })
                    return sum
                }

                state.total = Sum().toLocaleString("fa-IR")
        }

    }

})

export const {add} = ShopingCard.actions
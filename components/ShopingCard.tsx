"use client"
import { createSlice } from "@reduxjs/toolkit";


interface Products {
    id : string,
    price :string,
    name :string
}


export const ShopingCard = createSlice({
    name : "card",
    initialState : {
        products : [],
        count : 0,
        total : 0
    },
    reducers :{
        add : (state : {products : [] | Products[] ,count : string | number , total : string |number} , action)=> {
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
        },

        removeOne : (state : {products : [] | Products[] ,count : string | number , total : string |number},action)=> {
                state.products = state.products.filter(item => item.id != action.payload.id)
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
        },

        removeAll : (state)=>{
            state.products = []
            state.count = 0
            state.total = 0
        }

    }

})

export const {add , removeOne , removeAll} = ShopingCard.actions
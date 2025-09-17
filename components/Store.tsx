"use client"
import { configureStore } from "@reduxjs/toolkit";
import { ShopingCard } from "./ShopingCard";

export default configureStore({
    reducer : {
        card : ShopingCard.reducer
    }
})
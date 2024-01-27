import { IProduct } from "@/interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";

type ICart = {
    products: Array<IProduct>
}

const initialState: ICart = {
    products: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.products.push(action.payload)
        },
        removeCartProduct(state, action) {
            state.products = state.products.filter((p) => p.id !== action.payload)
        }
    }
})

export const { addToCart, removeCartProduct } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let item = state.cart.find((pizza) => {
                if(!pizza.customized && ! action.payload.customized){
                    return pizza.id === action.payload.id;
                }
                if (pizza.customized && action.payload.customized){
                    return(
                        pizza.id === action.payload.id &&
                        JSON.stringify(pizza.selectedIngredients) ===
                        JSON.stringify(action.payload.selectedIngredients)
                    );
                }
                return false;
        });
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                }
                );
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(
                (pizza) =>{
                    if(!action.payload.customized){
                        return pizza.id !== action.payload.id;
                    }

                    return !(pizza.id === action.payload.id && pizza.customized && JSON.stringify(pizza.selectedIngredients) === 
                    JSON.stringify(action.payload.selectedIngredients));
                }
            );
        },
        increaseQty: (state, action) => {
            let item = state.cart.find((pizza) =>{
                if(!action.payload.customized)
                    return pizza.id === action.payload.id;
                return(
                    pizza.id === action.payload.id &&
                    pizza.customized && 
                    JSON.stringify(pizza.selectedIngredients) ===
                    JSON.stringify(action.payload.selectedIngredients)
                );
        });
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQty: (state, action) => {
            let item = state.cart.find((pizza) => {
                if(!action.payload.customized) {
                  return  pizza.id === action.payload.id;
                }
                return (
                    pizza.id === action.payload.id &&
                    pizza.customized &&
                    JSON.stringify(pizza.selectedIngredients) ===
                    JSON.stringify(action.payload.selectedIngredients)
                );
        });
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.cart = []
        },
    }
})
export const { addToCart, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
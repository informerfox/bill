import { createSlice } from "@reduxjs/toolkit";

import productsjson from "../../products.json"

const data = productsjson.products;
export const productSlice = createSlice({
    name: 'product',
    initialState:{
        items:data,
        money: 10000000000,
        initialMoney:10000000000,
        negativeMoney:0,
    },
    reducers:{
        updateCount:(state,action)=>{
            const {id,count} = action.payload;
            const item = state.items.find((tmp) => tmp.id===id);
            item.count=count;
            let price=0;

            state.items.map((tmp)=>{
                price += Number(tmp.count)*Number(tmp.productPrice);
            });
            state.money= Number(state.initialMoney-price);
            if(state.money<0){
                state.negativeMoney=state.money;
            }
        }
    },
})

export const {updateCount} = productSlice.actions;
export default productSlice.reducer;
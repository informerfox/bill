import { createSlice } from "@reduxjs/toolkit";

import productsjson from "../../products.json"

const data = productsjson.products;
export const productSlicer = createSlice({
    name: 'product',
    initialState:{
        items:data,
        
    },
    reducers:{

    },
})

export default productSlicer.reducer;
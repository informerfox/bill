import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        money: 10000000000,
        shoppingCard:[],
    },
    reducers:{

    }
})

export default userSlice.reducer;
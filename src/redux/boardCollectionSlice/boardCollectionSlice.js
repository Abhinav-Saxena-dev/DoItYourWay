import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const boardCollectionSlice = createSlice({
    name: "boardCollection",
    initialState,
    reducers: {
        storeNewBoard: (state, {payload}) => {
            state = [...state, payload];
        }
    }
});

export const {storeNewBoard} = boardCollectionSlice.actions;

export default boardCollectionSlice.reducer;
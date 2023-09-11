import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

const initialState = {
    isBoardOpen: false,
    title: null,
    id: null,
    success: false,
};

const boardSlice = createSlice({
    name : 'board',
    initialState,
    reducers : {
        createNewBoard : (state) => {
            state.id = null;
            state.title = null;
            state.isBoardOpen = true;
            state.success = false;
        },
        cancelNewBoard : (state) => {
            state.isBoardOpen = false;
        },
        submitNewBoard : (state, {payload}) => {
            state.isBoardOpen = false;
            state.title = payload;
            state.id = uniqueId('');
        }
    }
});

export const {createNewBoard, cancelNewBoard, submitNewBoard} = boardSlice.actions;

export default boardSlice.reducer;
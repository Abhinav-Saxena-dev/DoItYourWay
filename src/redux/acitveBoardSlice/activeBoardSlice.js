import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: null,
    id: null,
    isFetching: false,
    isEditingList: false,
}

const activeBoardSlice = createSlice({
    name : 'activeBoard',
    initialState,
    reducers : {
        selectActiveBoard : (state, {payload}) => {
            state.title = payload.title;
            state.id = payload.id;
            state.isFetching = true;
        },
        setActiveBoardSuccess : (state) => {
            state.isFetching = false;
        },
        stopEditingList: (state) => {
            state.isEditingList = false;
        },
        listEditModeEnabled: (state) => {
            state.isEditingList = true
        }
    }
});

export const {selectActiveBoard, setActiveBoardSuccess, stopEditingList, listEditModeEnabled} = activeBoardSlice.actions;

export default activeBoardSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { reducer as formReducer } from 'redux-form';
import boardSlice from './boardSlice/boardSlice';
import boardCollectionSlice from './boardCollectionSlice/boardCollectionSlice';
import activeBoardSlice from './acitveBoardSlice/activeBoardSlice';
import activeBoardDataSlice from './activeBoardDataSlice/activeBoardDataSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        newBoard: boardSlice,
        boardsCollection: boardCollectionSlice,
        activeBoard: activeBoardSlice,
        activeBoardData: activeBoardDataSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
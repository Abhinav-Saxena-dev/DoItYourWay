import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

const initialState = {};

const activeBoardDataSlice = createSlice({
  name: "activeBoardData",
  initialState,
  reducers: {
    selectActiveBoard: (state, { payload }) => {
      state = payload.data || [];
    },
    submitList: (state, { payload }) => {
      const listId = uniqueId("list_");
      state[listId] = {
        name: payload,
        id: listId,
        cards: [],
      };
    },
    submitNewCard: (state, { payload }) => {
      console.log('====================================');
      console.log(payload);
      console.log('====================================');
      const { listId, cardName, cardId } = payload;
      const currentList = state[listId];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId,
        isArchived: false,
      });
      state[listId] = currentList;
    },
    handleDrop: (state, { payload }) => {
      const { cardId, cardName, listId, newListId } = payload;
      const currentList = state[newListId];
      currentList.cards.push({ name: cardName, cardId, listId: newListId });
      const removeCard = state[listId].cards.findIndex(
        (card) => card.cardId === cardId
      );
      state[listId].cards.splice(removeCard, 1);
      state[newListId] = currentList;
    },
    archivePost: (state, { payload }) => {
      const { cardId, listId } = payload;
      const currentList = state[listId];
      console.log('====================================');
      console.log(payload);
      console.log('====================================');
      const findCard = currentList.cards.find((card) => card.cardId === cardId);

      if (findCard.isArchived === false) {
        findCard.isArchived = true;
      } else {
        findCard.isArchived = false;
      }
      state[listId] = currentList;
    },
  },
});

export const {
  selectActiveBoard,
  submitList,
  submitNewCard,
  handleDrop,
  archivePost,
} = activeBoardDataSlice.actions;

export default activeBoardDataSlice.reducer;

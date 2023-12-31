import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

const initialState = {};

const removeFromList = (list, index) => {  
  const result = Array.from(list);  
  const [removed] = result.splice(index, 1);  
  return [removed, result];
}

const addToList = (list, index, element) => {  
  const result = Array.from(list);  
  result.splice(index, 0, element);  
  return result;
}

const activeBoardDataSlice = createSlice({
  name: "activeBoardData",
  initialState,
  reducers: {
    selectActiveBoard: (state, { payload }) => {
      state = payload.data || [];
    },
    submitList: (state, { payload }) => {
      const listId = uniqueId("list_");
      const {boardId, listItem} = payload;
      state[boardId] = {
        ...state[boardId],
        [listId]: {
          name: listItem,
          id: listId,
          cards: [],
        }
      }
    },
    submitNewCard: (state, { payload }) => {
      const { listId, cardName, cardId, boardId } = payload;
      const currentList = state[boardId][listId];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId,
        isArchived: false,
      });
      state[boardId][listId] = currentList;
    },
    handleDrop: (state, { payload }) => {
      const {cardId, list_id, newList_id, sourceIndex, destinationIndex, boardId } = payload;
      const sourceList = state[boardId][list_id].cards;
      sourceList.find(card => card.cardId === cardId).listId = newList_id;
      const [removedElement, newSourceList] = removeFromList(sourceList, sourceIndex);
      state[boardId][list_id].cards = newSourceList;

      const destinationList = state[boardId][newList_id].cards;
      state[boardId][newList_id].cards = addToList(destinationList, destinationIndex, removedElement);  
    },
    archivePost: (state, { payload }) => {
      const { cardId, listId, boardId } = payload;
      const currentList = state[boardId][listId];
      const findCard = currentList.cards.find((card) => card.cardId === cardId);

      if (findCard.isArchived === false) {
        findCard.isArchived = true;
      } else {
        findCard.isArchived = false;
      }
      state[boardId][listId] = currentList;
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

import React from "react";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import mapValues from "lodash/mapValues";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { handleDrop } from "../../../../redux/activeBoardDataSlice/activeBoardDataSlice";

const ListItemsWrapper = styled.div`
  display: flex;
`;

const ListItemsContainer = ({boardId}) => {
  const activeBoardData = useSelector((state) => state.activeBoardData);
  const dispatch = useDispatch();

  const handleDrag = (result) => {
    if(result.source?.index == null || result.destination?.index == null){
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const list_id = result.source.droppableId;
    const newList_id = result.destination.droppableId;
    const cardId = result.draggableId;
    dispatch(handleDrop({cardId, list_id, newList_id, sourceIndex, destinationIndex, boardId}));
  }

  const renderListItems = () => {
    const mappedList = mapValues(activeBoardData[boardId], (list) => list.name);
    const mappedKeys = Object.keys(mappedList);
    return mappedKeys.map((id, i) => {
      return <ListItem id={id} key={i} name={mappedList[id]} />;
    });
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <ListItemsWrapper>{renderListItems()}</ListItemsWrapper>
      </DragDropContext>
    </div>
  );
};

export default ListItemsContainer;

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import mapValues from "lodash/mapValues";
import ListItem from "./ListItem";
import { DragDropContext } from "react-beautiful-dnd";

const ListItemsWrapper = styled.div`
  display: flex;
`;

const ListItemsContainer = () => {
  const activeBoardData = useSelector((state) => state.activeBoardData);

  const renderListItems = () => {
    const mappedList = mapValues(activeBoardData, (list) => list.name);
    const mappedKeys = Object.keys(mappedList);
    return mappedKeys.map((id, i) => {
      return <ListItem id={id} key={i} name={mappedList[`list_${2}`]} />;
    });
  };
  return (
    <div>
      <DragDropContext>
        <ListItemsWrapper>{renderListItems()}</ListItemsWrapper>
      </DragDropContext>
    </div>
  );
};

export default ListItemsContainer;

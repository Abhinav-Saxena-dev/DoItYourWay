import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import mapValues from "lodash/mapValues";
import ListItem from "./ListItem";

const ListItemsWrapper = styled.div`
  display: flex;
`;

const ListItemsContainer = () => {
  
  const activeBoardData = useSelector((state) => state.activeBoardData);

  const renderListItems = () => {
    const mappedList = mapValues(
      activeBoardData,
      (list) => list.name
    );
    const mappedKeys = Object.keys(mappedList);

    console.log('====================================');
    console.log();
    console.log('====================================');

    return mappedKeys.map((id, i) => {
      return <ListItem id={id} key={i} name={mappedList[`list_${2}`]} />;
    });
  };
  return (
    <div>
      <ListItemsWrapper>{renderListItems()}</ListItemsWrapper>
    </div>
  );
};

export default ListItemsContainer;

import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../helper/Animations";
import { archivePost } from "../../../../redux/activeBoardDataSlice/activeBoardDataSlice";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

const CardWrapper = styled.div`
  margin: 10px 0;
  padding: 14px 7px;
  background: rgb(241, 241, 241);
  border-radius: 4.5px;
  cursor: grab;
  animation: ${fadeIn} 300ms linear;
  display: flex;
  justify-content: space-around;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 19px;
  margin: 0;
`;

const ArchiveTask = styled.div`
  padding: 4px 7px;
  opacity: 0.4;
  border: none;
  border-radius: 9999;
  cursor: pointer;
  font-size: 16px;
`;
const Card = ({ title, cardId, listId, isArchived }) => {
  const dispatch = useDispatch();

  const togglePost = (cardId, listId) => {
    dispatch(archivePost({ cardId, listId }));
  };

  const cardStyles = {
    opacity: isArchived ? 0.35 : 1,
    boxShadow: "0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)",
    textDecoration: isArchived ? "line-through" : "none",
    backgroundColor: isArchived ? "#DECAFF" : "#caffde",
  };

  return (
    <div>
      <CardWrapper
        style={cardStyles}
      >
        <CardTitle>{title}</CardTitle>
        <ArchiveTask onClick={() => togglePost(cardId, listId)}>✓</ArchiveTask>
      </CardWrapper>
    </div>
  );
};

export default Card;

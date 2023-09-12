import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "./CreateBoard";
import BoardTitleForm from "./BoardTitleForm";
import {
  submitNewBoard,
  cancelNewBoard,
} from "../../../redux/boardSlice/boardSlice";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";
import { storeNewBoard } from "../../../redux/boardCollectionSlice/boardCollectionSlice";
import { reset } from "redux-form";

const Title = styled.h3`
  color: white;
  text-shadow: 0px 0px 3px #000;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px rgb(240, 240, 240);
`;

const CloseBoardIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.25) rotate(4.5deg);
  }
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const BoardNamingTitle = styled.h5`
  color: white;
  text-shadow: 0px 0px 3px #000;
  font-weight: 400;
`;

const ActiveCreateBoard = () => {
  const dispatch = useDispatch();

  const submit = (values) => {
    try {
      dispatch(submitNewBoard(values.boardTitle));
      const newBoard = {
        id: store.getState().newBoard.id,
        title: store.getState().newBoard.title,
      };
      dispatch(storeNewBoard(newBoard));
      dispatch(reset('boardTitle')); 
    } catch (err) {
      console.log(err);
    }
  };

  const cancelCreatingBoard = () => {
    dispatch(cancelNewBoard());
  };

  return (
    <Wrapper>
      <TopWrapper>
        <Title>Creating a board</Title>
        <CloseBoardIcon
          onClick={cancelCreatingBoard}
          src={require("../../Assets/closeIcon.svg")}
        />
      </TopWrapper>

      <BodyWrapper>
        <BoardNamingTitle>What shall we call the board?</BoardNamingTitle>
        <BoardTitleForm
          onSubmit={submit}
          cancelAction={cancelCreatingBoard}
        />
      </BodyWrapper>
    </Wrapper>
  );
};

export default ActiveCreateBoard;

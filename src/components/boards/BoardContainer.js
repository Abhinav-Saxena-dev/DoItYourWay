import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CreateBoardContainer from "./boardCreation/CreateBoardContainer";
import ShowAllBoards from "./ShowAllBoards";
import { fadeIn } from "../helper/Animations";

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  animation: ${fadeIn} 300ms linear;
`;

const BoardContainer = () => {

  const { boardsCollection } = useSelector((state) => state.boardsCollection);

  const renderAllBoards = () => {
    return boardsCollection?.map((board) => {
      return <ShowAllBoards id={board.id} key={board.id} title={board.title} />;
    });
  };

  return (
    <Wrapper>
      <CreateBoardContainer />
      {renderAllBoards()}
    </Wrapper>
  );
};

export default BoardContainer;

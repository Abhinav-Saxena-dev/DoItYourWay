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

const backgroundStyle = {
  background: 'linear-gradient(119deg, rgba(4,128,213,1) 0%, rgba(13,112,152,1) 37%, rgba(0,212,255,1) 100%, rgba(6,165,226,1) 100%)',
  height: '100vh'
};

const BoardContainer = () => {

  const boardsCollection = useSelector((state) => state.boardsCollection);

  const renderAllBoards = () => {
    return boardsCollection?.map((board) => {
      return <ShowAllBoards id={board.id} key={board.id} title={board.title} />;
    });
  };

  return (
    <div style={backgroundStyle}>
    <Wrapper>
      <CreateBoardContainer />
      {renderAllBoards()}
    </Wrapper>
    </div>
  );
};

export default BoardContainer;

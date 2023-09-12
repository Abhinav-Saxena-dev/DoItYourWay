import React from "react";
import { useSelector } from "react-redux";
import CreateBoard from "./CreateBoard";
import ActiveCreateBoard from "./ActiveCreateBoard";

const CreateBoardContainer = () => {
  const newBoard = useSelector(state => state.newBoard);

  return (
    <div>{newBoard?.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}</div>
  );
};

export default CreateBoardContainer;
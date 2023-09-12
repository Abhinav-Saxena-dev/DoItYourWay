import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './lists/ListWrapper';
import CreateNewList from './lists/CreateNewList';
import ListEditingMode from './lists/ListEditingMode';
import ListItemsContainer from './lists/ListItemsContainer';
import { listEditModeEnabled, selectActiveBoard, setActiveBoardSuccess } from '../../../redux/acitveBoardSlice/activeBoardSlice';
import { submitList, selectActiveBoard as selectActiveBoard2 } from '../../../redux/activeBoardDataSlice/activeBoardDataSlice';
import store from '../../../redux/store';

const backgroundStyle = {
  background: 'linear-gradient(119deg, rgba(4,128,213,1) 0%, rgba(13,112,152,1) 37%, rgba(0,212,255,1) 100%, rgba(6,165,226,1) 100%)',
  height: '100vh'
};


const ShowActiveBoard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const activeBoard = useSelector((state) => state.activeBoard);

  useEffect(() => {
    const boardsCollection = store.getState().boardsCollection;
    const activeBoard = boardsCollection.find(board => board.id === id);
    dispatch(selectActiveBoard(activeBoard));
    dispatch(selectActiveBoard2(activeBoard));

    dispatch(setActiveBoardSuccess());
  }, [id, dispatch]);

  const getTitle = () => {
    return activeBoard.title;
  };

  const handleListSubmit = (values) => {
    dispatch(submitList(values.listItem));
  };

  if (activeBoard.isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div style={backgroundStyle}>
      <ActiveBoardTitle>{getTitle()}</ActiveBoardTitle>
      <ListWrapper>
        <ListItemsContainer />
        {activeBoard.isEditingList ? (
          <ListEditingMode onSubmit={handleListSubmit} />
        ) : (
          <CreateNewList addList={() => dispatch(listEditModeEnabled())} />
        )}
      </ListWrapper>
    </div>
  );
};

export default ShowActiveBoard;

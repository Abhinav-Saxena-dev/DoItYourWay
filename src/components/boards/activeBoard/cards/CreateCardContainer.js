import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import uniqueId from "lodash/uniqueId";
import BoardTitleInput from "./../../boardCreation/BoardTitleInput";
import Card from "./Card";
import { submitNewCard } from "../../../../redux/activeBoardDataSlice/activeBoardDataSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";

const CreateCardContainer = ({ handleSubmit, listId }) => {
  const dispatch = useDispatch();
  const activeBoardData = useSelector((state) => state.activeBoardData);
  const activeBoard = useSelector(state => state.activeBoard);

  const submit = (values) => {
    let cardName = `cardName_${listId}`;

    const data = {
      listId: listId,
      cardName: values[cardName],
      cardId: uniqueId("cardItem_"),
      boardId: activeBoard.id
    };
    dispatch(submitNewCard(data));
  };

  const renderCards = () => {
    return (
      <Droppable droppableId={listId} type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {activeBoardData[activeBoard.id][listId].cards.map((card, i) => (
              <Draggable key={card.cardId} draggableId={card.cardId} index={i}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    key={i}
                  >
                    <Card
                      id={i}
                      title={card.name}
                      cardId={card.cardId}
                      listId={card.listId}
                      isArchived={card.isArchived}
                      boardId = {activeBoard.id}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <Field
            type="text"
            component={BoardTitleInput}
            name={`cardName_${listId}`}
          />
        </label>
      </form>
      {renderCards()}
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.cardName) {
    errors.cardName = "oops!";
  }

  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("cardName"));
};

export default reduxForm({
  validate,
  form: "cardName",
  onSubmitSuccess: afterSubmit,
})(CreateCardContainer);

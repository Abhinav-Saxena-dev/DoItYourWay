import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import BoardTitleInput from './../../boardCreation/BoardTitleInput';
import Card from './Card';
import { submitNewCard } from '../../../../redux/activeBoardDataSlice/activeBoardDataSlice';

const CreateCardContainer = ({ handleSubmit, listId }) => {
  const dispatch = useDispatch();
  const activeBoardData = useSelector((state) => state.activeBoardData);

  const submit = (values) => {
    let cardName = `cardName_${listId}`;
    dispatch(submitNewCard(values[cardName], uniqueId('cardItem_'), listId));
  };

  const renderCards = () => {
    return activeBoardData[listId].cards.map((card, i) => {
      return (
        <Card
          key={i}
          title={card.name}
          cardId={card.cardId}
          listId={card.listId}
          isArchived={card.isArchived}
        />
      );
    });
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
    errors.cardName = 'oops!';
  }

  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset('cardName'));
};

export default reduxForm({
  validate,
  form: 'cardName',
  onSubmitSuccess: afterSubmit,
})(CreateCardContainer);
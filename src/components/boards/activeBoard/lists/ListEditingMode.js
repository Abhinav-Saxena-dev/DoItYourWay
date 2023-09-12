import React from "react";
import { useDispatch } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import styled from "styled-components";
import DisableListEditMode from "./DisableListEditMode";
import BoardTitleInput from "./../../boardCreation/BoardTitleInput";
import { stopEditingList } from "../../../../redux/acitveBoardSlice/activeBoardSlice";

const ListEditingModeWrapper = styled.div`
  padding: 20px 12px;
  height: 75px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.45);
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const ListEditingMode = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  return (
    <ListEditingModeWrapper>
      <form onSubmit={handleSubmit}>
        <Field
          name="listItem"
          component={BoardTitleInput}
          type="text"
          placeholder="Add a card"
        />
      </form>
      <DisableListEditMode disableList={() => dispatch(stopEditingList())} />
    </ListEditingModeWrapper>
  );
};

const validate = (values) => {
  let errors = {};
  if (!values.listItem) {
    errors.listItem = "give me a name!";
  }
  return errors;
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("listItem"));
};

export default reduxForm({
  validate: validate,
  form: "listItem",
  onSubmitSuccess: afterSubmit,
})(ListEditingMode);

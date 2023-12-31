import React from "react";
import styled from "styled-components";
import CreateCardContainer from "./../cards/CreateCardContainer";
import { fadeIn } from "./../../../helper/Animations";

const ListItemWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  width: 300px;
  background-color: #F7A8B1;
  border-radius: 3px;
  padding: 5px 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 150ms ease-in-out;
  animation: ${fadeIn} 300ms linear;
`;

const ListItemHeader = styled.h4`
  color: white;
  letter-spacing: 1.66;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const ListItem = ({ name, id }) => {
  return (
      <div>
        <ListItemWrapper>
          <ListItemHeader>{name}</ListItemHeader>
          <hr />
          <CreateCardContainer listId={id} />
        </ListItemWrapper>
      </div>
  );
};

export default ListItem;

import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { createNewBoard } from '../../../redux/boardSlice/boardSlice';

export const Wrapper = styled.div`
    width: 345px;
    height: auto;
    margin: 20px;
    background-color: #F48A96;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.10);
    }

`

const Text = styled.h3`
    color: white;
`


const CreateBoard = () => {

    const dispatch = useDispatch();

    const handleCreateNewBoard = () => {
        try{
            dispatch(createNewBoard());
        }catch(err){
            console.log("An Error has occured");
            alert("OPPS, Something went wrong :( Refresh and try again.") // replace with SWAL.
        }
    }

    return (
        <Wrapper onClick={ () => handleCreateNewBoard() }>
            <Text>Create a new board...</Text>
        </Wrapper>
    );
};

export default CreateBoard;

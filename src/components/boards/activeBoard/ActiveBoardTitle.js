import React from 'react';
import styled from 'styled-components';
import { fadeIn } from './../../helper/Animations';

const TitleWrapper = styled.div`
    display: flex;
    justify-content: start;
    padding: 10px 60px;
    animation: ${fadeIn} 300ms linear;
`

const Title = styled.h1`
    color: white;
    word-break: break-all;
    background-color: #F7A8B1;
    text-shadow: 0px 0px 3px #000;
    border-radius: 3.5px;
    font-size: 50px;
    padding: 10px 60px;
    margin: 0 0 0 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const ActiveBoardTitle = ({ children }) => (
    <TitleWrapper>
        <Title>{children}</Title>
    </TitleWrapper>
)

export default ActiveBoardTitle;

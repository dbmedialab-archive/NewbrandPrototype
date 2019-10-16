import React from "react";
import styled from '@emotion/styled';
import Link from 'next/link';

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    background: #1d1d1d;
    color: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box

    h1{
        font-size: 2rem;
        margin: 0rem 0rem 0rem 0rem;
    }

    h3 {
        font-size: 1.1rem;
        margin: 0rem;
        font-weight: 300;
    }
`   

const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    background-position: center center;
    background-image: url(${props => props.bildeURL});
    padding: 0;
    width: 100%;
    height: 15vh;
`

const Label = styled.label `
    width: 200px;
    padding-top: .6rem;
`

function ArticleCard(props) {
    return (

        <Card>
        <Image bildeURL={props.bildeURL}>
        </Image>
            <h1>{props.title} </h1>
            <h3>{props.subtitle}</h3>
            <Label>{props.brand}</Label>
        </Card>
    
    );
}

export default ArticleCard;


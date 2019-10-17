import React from 'react';
import styled from '@emotion/styled';

 const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    bottom: 0;
    background: #1d1d1d;
    height: 6vh;
    width: 100%;
    color: #fff;

    ul{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
 `

function Footer() {
    return(
        <FooterWrapper>
            <ul>
                <li>Siden er laget av Aller Media </li>
            </ul>
        </FooterWrapper>
    )
}

export default Footer
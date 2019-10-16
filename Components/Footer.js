import React from 'react';
import styled from '@emotion/styled';

 const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    background: #1d1d1d;
    height: 20vh;
    width: 100%;
    color: #fff;
 `

function Footer(props) {
    return(
        <FooterWrapper>
            <ul>
                <li>Hei Hei</li>
                <li>Hei Hei</li>
                <li>Hei Hei</li>
                <li>Hei Hei</li>
            </ul>
        </FooterWrapper>
    )
}

export default Footer
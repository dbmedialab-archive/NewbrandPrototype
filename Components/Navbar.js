import React, { Component } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarWrapper = styled.div`
position: absolute;
z-index: 9;
left: 0;
top: 0;
background-color: #2d2d2d;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;
height: 150px;
transition: all 0.5s ease-in;
padding: 0rem .8rem 0rem .8rem;
color: white;   

.logo img{
    width: 60px;
    transition: all 1s ease-in;

}
`

export default function Navbar (props) {
    return(
 
        <NavbarWrapper>
            <Link href="/">
                <a>
                <div className="logo">
                    <img src="../static/img/logo_white.svg" alt="elbilvelger" width="140" />
                </div>
                </a>
            </Link>
            <nav>
            <ul>
                <li>Hei</li>
                <li>Hei</li>
                <li>Hei</li>
            </ul>
            </nav>
           
        </NavbarWrapper>
        
    )
}




import React, { Component } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: realtive;
z-index: 9;
background: greenyellow;
width: 100%;
box-sizing: border-box;
text-align: center;
height: 180px;
color: #2d2d2d;   

.logo {
    margin-top: 3rem;
    img{
        width: 60px;
        margin: 0 auto;
    }
}
    nav{
        background: #fff;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: .7rem 0rem;
        overflow-x: scroll;
        @media (min-width: 720px) {
            justify-content: center;
        }
    ul{
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;

        li{
            min-width: 100px;
            margin: 0rem 1rem;
            font-size: 1.2rem;
        }

        

        a{
            font-weight: bold;
            color: #000;
            &:hover{
                color: #000;
            }
        }
    }
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
                <li><Link href="/">Forside</Link></li>
                <li>Oppskrifter</li>
                <li>Ned i vekt</li>
                <li>Sunn mat</li>
                <li>Weekendkos</li>
            </ul>
            </nav>
           
        </NavbarWrapper>
        
    )
}




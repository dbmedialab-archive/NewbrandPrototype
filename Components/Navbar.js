import React, { Component } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavbarWrapper = styled.div`
position: realtive;
z-index: 9;
background-color: #2d2d2d;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
box-sizing: border-box;
text-align: center;
height: 150px;
color: white;   

.logo img{
    width: 60px;
    margin: 0 auto;
    transition: all 1s ease-in;
}
    nav{

    ul{
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;

        li{
            margin: 0rem 1rem;
        }

        

        a{
            font-weight: bold;
            color: #fff;
            &:hover{
                color: #ffff00;
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
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
            </ul>
            </nav>
           
        </NavbarWrapper>
        
    )
}




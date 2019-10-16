import React, { Component } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
// import { Global, css } from '@emotion/core'
import "../style.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbarHeight: 45,
            logoWidth: 140
        };
    }
    
    handleScroll = () => {
        if (pageYOffset > 100){
            this.setState({navbarHeight: 30, logoWidth: 100})
        } else if (pageYOffset < 300) {
            this.setState({navbarHeight: 45, logoWidth: 140})
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {

    const NavbarWrapper = styled.div`
        position: fixed;
        z-index: 9;
        left: 0;
        top: 0;
        background-color: #3CA069;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        height: ${this.state.navbarHeight + "px"};
        transition: all 0.5s ease-in;
        padding: 0rem .8rem 0rem .8rem;
        color: white;   
        
        .logo img{
            width: ${this.state.logoWidth + "px"};
            transition: all 1s ease-in;

        }
    `
        return(
 
            <NavbarWrapper onScroll={this.handleScroll}>
                <Link href="/">
                    <a>
                    <div className="logo">
                        <img src="../static/img/elbilvelgerlogo.svg" alt="elbilvelger" width="140" />
                    </div>
                    </a>
                </Link>
               
            </NavbarWrapper>
            
        )
    }
}


export default Navbar;
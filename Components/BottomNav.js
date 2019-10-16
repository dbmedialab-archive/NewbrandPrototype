import React from "react";
import styled from '@emotion/styled';

const Footer = styled.footer`
position: fixed;
display: flex;
width: 100vw;
box-sizing: border-box;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
bottom: 0;
left: 0;
background: rgba(255,255,255,1)       
`

const Footerinner = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;

button, input{
  background: none; 
  border: none;
  margin: .5rem;
  outline: none;
  font-size: .7rem;
  font-weight: 200;
  color: #2d2d2d;

  svg{
    width: 20px;
    height: 20px;
    margin-bottom: .3rem;
  }
}
`

class BottomNav extends React.Component {
  render() {

    return (
      <>
        <Footer>
          <Footerinner>
            {this.props.children}
          </Footerinner>
        </Footer>
      </>
    );
  }
}

export default BottomNav;

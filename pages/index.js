import React, { Component } from 'react';
import Navbar from "../Components/Navbar";
import styled from '@emotion/styled';


const FlexWrapper = styled.div`
    display: flex;
    background: #1d1d1d;
    flex-direction: column;
    justify-content: center;
    padding: 3.5rem .5rem 3rem .5rem;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .react-reveal{
      width: 100%;

      @media (min-width: 800px) {
        width: 40vw;
        margin: 1rem;
      }

      @media (min-width: 1280px) {
        width: 25vw;
        margin: 1rem;
      }
  }
  `

class App extends Component {
  render() {
    return (
        <FlexWrapper>
          <Navbar />

        </FlexWrapper>
    );
  }
}

export default App;


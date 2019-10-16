import React from "react";
import CarCard from "./CarCard";
import BottomNav from "./BottomNav"
import Fade from 'react-reveal/Fade';
import elbiler from '../elbiler.json';
import styled from '@emotion/styled';

import Modal from 'react-awesome-modal';
import { FaMapMarkerAlt, FaCoins, FaArrowsAltV, FaRedo, FaSlidersH } from 'react-icons/fa';

const ModalContent = styled.div`
  color: #2d2d2d;
  text-align: center;
  padding: 1rem;
`

class AllCars extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      elbiler: elbiler,
      elbilDefault: [...elbiler],
      orderByRange: 'asc',
      orderByPrice: 'asc',
      orderBySize:  'asc',
      visible: false
    };
  }

  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

  // Have to change from string to number  in json for it to work
  sortBySize = () => {
    let elbilerSize = [...this.state.elbiler]
    elbilerSize.sort(function(a, b) {
      return a.storelse - b.storelse
    })

    if(this.state.orderByRange === "desc") {
      elbilerSize.reverse() 
    }

    this.setState({elbiler: elbilerSize})
  }

  sortByRange = () => {
    let elbilerCopy = [...this.state.elbiler]
    elbilerCopy.sort(function(a, b) {
      return a.rekkevidde - b.rekkevidde;
    })

    if(this.state.orderByRange === "desc") {
      elbilerCopy.reverse() 
    }
    
    this.setState({elbiler: elbilerCopy});
  }

  sortByPrice = () => {
    let elbilerCopy = [...this.state.elbiler]
    elbilerCopy.sort(function(a, b) {
      return a.pris - b.pris
    })

    if(this.state.orderByPrice === "desc") {
      elbilerCopy.reverse() 
    }

    this.setState({elbiler: elbilerCopy});
  }

  reset = () =>{
    this.setState({elbiler: this.state.elbilDefault});
  }

  render() {
    const elBiler = this.state.elbiler.map(elbil => 
  <li key={elbil.id}>
    <Fade>
      <CarCard 
          merke={elbil.modell} 
          modell={elbil.merke}  
          rekkevidde={elbil.rekkevidde} 
          pris={elbil.pris} 
          bildeURL={elbil.bildeURL}
          type={elbil.type}
          id={elbil.id}
      /> 
    </Fade>
    </li>
    );

    return (
      <>
        {elBiler}        
        <BottomNav>
                <button onClick={() => {
                  this.setState({
                    orderByRange: (this.state.orderByRange === 'asc' ? 'desc' : 'asc')
                  }, () => {
                    this.sortByRange();
                  })
                }}>
                <FaMapMarkerAlt  /><br />Rekkevidde
                </button>
                
                <button onClick={() => {
                  this.setState({
                    orderByPrice: (this.state.orderByPrice === 'asc' ? 'desc' : 'asc')
                  }, () => {
                    this.sortByPrice();
                  })
                }}>
                <FaCoins  /><br />Pris
                </button>
            

                <button onClick={() => {
                  this.setState({
                    orderBySize: (this.state.orderBySize === 'asc' ? 'desc' : 'asc')
                  }, () => {
                    this.sortBySize();
                  })
                  }}>
                  <FaArrowsAltV  /> <br />Størrelse
                </button>

                <button onClick={this.reset}>
                  <FaRedo  /> <br />Tilbakestill
                </button>
                

        </BottomNav>
      </>
    );
  }
}

export default AllCars;

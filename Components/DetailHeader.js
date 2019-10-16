import React, { Component } from "react";
import { FaMapMarkerAlt} from 'react-icons/fa';
import styled from '@emotion/styled';

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
background-size: cover;
background-position: center center;
background-image: url(/static/img/${props => props.bildeURL});
padding: 0;
margin-bottom: .3rem;
height: 50vh;

a{
  text-decoration: none;
}

  .imgTitle{
    position: relative;
    color: #fff;
    width: auto;
    bottom: 0;
    font-weigth: bold;
    padding: 2rem 0 .7rem 0rem;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
 
  }
  
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 ;
    padding: 0;
 }

  ul li{
    margin: 1rem;
  }

  .cardFooter{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: .5rem;
    background: linear-gradient(to top, #1d1d1d 0%,rgba(0,0,0,0) 100%);
    color: #fff;  

    li{
      font-size: 1.2rem;
      font-weight: bold;

      .price{
        font-weight: 400;
        background: #3CA069;
        color: #fff;
        padding: .2rem .7rem;
        border-radius: 3px;
      }

      .light{
        font-weight: 200;
      }
    }
  }
`

export default function DetailHeader(props) {
   function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

    return (
    
      <Card bildeURL={props.bildeURL}>
        <div className="imgTitle">
          <span>{props.modell} </span>
          <span>{props.merke} </span>
          <span>{props.type}</span>
        </div>

        <div className="cardFooter">
          <ul>
            <li><span><FaMapMarkerAlt  /></span> {props.rekkevidde} <span className="light">km</span></li>
            <li><span className="price">Fra: {numberWithSpaces(`${props.pris}`)},-</span></li>   
          </ul>
        </div>
      </Card>
      
      

    );
  
}


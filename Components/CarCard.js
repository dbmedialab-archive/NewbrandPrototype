import React from "react";
import { FaMapMarkerAlt} from 'react-icons/fa';
import styled from '@emotion/styled';
import Link from 'next/link';

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
background-size: cover;
background-position: center center;
background-image: url(/static/img/${props => props.bildeURL});
padding: 0;
margin-bottom: 1.3rem;
height: 35vh;
max-width: 1024px;
color: #fff;  
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px; 

a{
  text-decoration: none;
}

  .imgTitle{
    position: relative;
    color: #fff;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);
    width: auto;
    bottom: 0;
    font-weigth: bold;
    padding: 2rem 0 .7rem 0rem;
    font-size: 1.4rem;
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
    background: rgba(0,0,0,0.8);
    color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    li{
      font-size: 1.2rem;
      font-weight: bold;

      .price{
        font-weight: 400;
        background: #3CA069;
        padding: .2rem .7rem;
        border-radius: 3px;
      }

      .light{
        font-weight: 200;
      }
    }
  }
`

export default function CarCard(props) {
   function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

    return (
    <Link href={{ pathname: '/elbil', query: { id: `${props.id}` } }}>
      <a title="CarDetail">
      <CardWrapper bildeURL={props.bildeURL}>
       
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
      </CardWrapper>
      </a>
      </Link>
    );
  
}


import React from "react";
import Card from "./Card";
import Fade from 'react-reveal/Fade';
import articles from '../artikler.json';
import styled from '@emotion/styled';

const CenterWrapper = styled.div`

@media (min-width: 720px) {
  margin: 0 auto;
max-width: 1024px;
display: grid;
grid-template-columns: 1.5fr repeat(2, 1fr);
grid-template-rows: 1fr repeat(4, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;

li:first-child{
  grid-column: 1 / 4;
}

li:nth-child(5){
  grid-column: 1 / 3;
}
      }


`

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      articles: articles,
      articlesDefault: [...articles],
    };
  }

  render() {
  const artikler = this.state.articles.map(article => 
  <li key={article.id}>

      <Card 
          title={article.title} 
          bildeURL={article.bildeURL}
          id={article.id}
      /> 

    </li>
    );

    return (
      <CenterWrapper>
        {artikler}        
      </CenterWrapper>
    );
  }
}

export default Articles;

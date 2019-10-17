import React from "react";
import Card from "./Card";
import Fade from 'react-reveal/Fade';
import articles from '../artikler.json';
import styled from '@emotion/styled';

const CenterWrapper = styled.div`
max-width: 1024px;
display: flex;
flex-wrap: wrap;
align-self: center;
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

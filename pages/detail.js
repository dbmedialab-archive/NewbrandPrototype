import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import ArticleCard from "../Components/ArticleCard";
import styled from '@emotion/styled';

import artikler from '../artikler.json';

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from "../lib/apollo"

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin: 0;

    @media (min-width: 800px) {
      max-width: 680px;
      flex-direction: column;
      align-align: center;
      justify-content: center;
      flex-wrap: wrap;
    }

  }
  `

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;  
    background: #1d1d1d;
    color: #fff;
    padding: .5rem;
    margin: 0;

  p{
    margin: 0;
    line-height: 1.4rem;

  }

  h1, h2, h3, h4{
    margin-bottom: .3rem;
  }

  h4{
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
`

const ALL_POSTS_QUERY = gql`
query MyBodyText($id: Int) {
  labrador {
    article(id: $id) {
      title
      subtitle
      publishedURL
      sectionTag
      tags
      siteDomain
      imageId
      bodytextStructured {

        ... on Labrador_HTMLElement {
          name
          attributes {
            key
            value
          }
          children {

            ... on Labrador_HTMLElement {
              name
              attributes {
                key
                value
              }
              children {

                ... on Labrador_HTMLElement {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
    
                    ... on Labrador_HTMLElement {
                      name
                      attributes {
                        key
                        value
                      }
                      children {
      
                        ... on Labrador_HTMLElement {
                          name
                          attributes {
                            key
                            value
                          }
                     
                        }
                        ... on Labrador_Text {
                          text
                        }
                      }
                    }
                    ... on Labrador_Text {
                      text
                    }
                  }
                }
                ... on Labrador_Text {
                  text
                }
              }
            }
            ... on Labrador_Text {
              text
            }
          }
        }
      }
    }
  }
}
`

// Getinng props from query
ElbilDetail.getInitialProps = async ({req, query}) =>{
  let elbilId = Number(query.id)
  return {elbilId};
}

// Getting the text from bodytextStrutured
  const traverseElements = (elements = []) => {
    if (!elements) {
        return null
    }
  
    return elements.map((el, i) => {
      if (el["__typename"] === "Labrador_Text") {
          return el.text
      } else {
          switch (el.name) {
              default:
                return (
                  <el.name>
                    {traverseElements(el.children)}
                  </el.name>
                )
          }
      }
    })
  }
  

function ElbilDetail({elbilId}) {
  // Getting article id of tester
  const articleID = elbiler[elbilId].tester

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: { id: articleID }
    }
  )
  
  // Stopping if error
  if (error) {
    console.log("Error while fetching data")
    return null
  } 

  // Using State Hook
  const [articleTitle, setTitle] = useState("Tittel");
  const [articleSubtitle, setSubtitle] = useState("undertittel");
  const [articleImage, setImage] = useState(undefined);
  const [brand, setBrand] = useState("brandnavn")
  
  useEffect(() => {
    // Update the document title using the browser API
    if (data.labrador === undefined) {
      const waitMessage = "Loading"
      setTitle(waitMessage), setSubtitle(waitMessage), setImage(waitMessage)
    } else {
      const articleTitle = data.labrador.article.title
      const subTitle = data.labrador.article.subtitle
      const imageId = data.labrador.article.imageId
      const image = "https://www.dagbladet.no/images/" + imageId + ".jpg?imageId=" + imageId + "&width=400&height=auto"
      console.log(image)
      const brand = data.labrador.article.siteDomain

      setTitle(articleTitle)
      setSubtitle(subTitle)
      setImage(image)
      setBrand(brand)
    }

  }, [data.labrador] );

  // Filtering out the car that matches the elbilId to an Array with that ID
  const singleElbil = elbiler.filter (elbil => elbil.id === elbilId)  
  console.log(singleElbil)
  const header =  
      <DetailHeader
        merke={singleElbil[0].modell} 
        modell={singleElbil[0].merke}  
        type={singleElbil[0].type}
        rekkevidde={singleElbil[0].rekkevidde} 
        pris={singleElbil[0].pris} 
        bildeURL={singleElbil[0].bildeURL}
        id={singleElbil[0].id}
      />
      
    return (
      <div>
      {header}
      <DetailWrapper>
        <Navbar />
        <Detail>
        <p>Fusce ornare interdum lectus, sodales placerat dolor semper sed. Curabitur lacinia nibh sit amet iaculis ultricies. Ut vel ante vel ligula sagittis finibus in ac leo. Nulla ante dolor, sagittis luctus efficitur a, mollis vitae tellus. Donec blandit lobortis urna sed facilisis. Vivamus consectetur risus at tortor viverra vulputate.</p>
          <h2>Saker om {singleElbil[0].merke} {singleElbil[0].modell}:</h2>

            <ArticleCard title={articleTitle} 
                          subtitle={articleSubtitle} 
                          bildeURL={articleImage}
                          brand={brand}
            
            />   
        </Detail>           


      </DetailWrapper>
      </div>
    )
}

export default withApollo(ElbilDetail);




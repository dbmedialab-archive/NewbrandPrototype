import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from '@emotion/styled'
import "../style.css"

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`

export default ({ children, title = 'Prototype' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <header>
      <NavBar/>
    </header>

    <ContentWrapper>
      {children}
    </ContentWrapper>

    <Footer />
  </>
)
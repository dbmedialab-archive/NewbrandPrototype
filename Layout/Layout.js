import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import "../style.css"


export default ({ children, title = 'Prototype' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <NavBar/>
    </header>

    {children}

    <Footer />
  </div>
)
// components & data
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// custom components
import Navbar from './navbar'

// styles

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(
        graphql`
        query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }      
        `
    )

    return(
        <>
        <Helmet>
            <title>{data.site.siteMetadata.title} - {pageTitle}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>

        <div className='bg-slate-800 text-white'>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
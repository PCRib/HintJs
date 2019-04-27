import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
// import Menu from './menu'
import './layout.css'

const meta = [
  { name: 'description', content: 'This is a test website for my blog' },
  { name: 'keywords', content: 'gatsby,react,blog' },
]

const ContentContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} meta={meta}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentContainer>
          {children}
        </ContentContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

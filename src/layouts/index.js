import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql,  useStaticQuery, Link, navigate } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1660px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allShopifyPage {
        nodes {
          title
          handle
        }
      }
  
 
          site {
            siteMetadata {
              title
            }
          }
        
      }

   `)
  
  return (
    <ContextProvider>
      <GlobalStyle />
        <div class="noise"></div>
        <Navigation siteTitle={data.site.siteMetadata.title} />
          <div>
            <Wrapper>
              {children}
            </Wrapper>
          </div>


    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

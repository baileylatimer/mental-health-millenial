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

  
  return (
    <ContextProvider>
      <GlobalStyle />
        <div class="noise"></div>
        <Navigation siteTitle='Mental Health Millenial' />
          <div>
            <Wrapper>
              {children}
            </Wrapper>
          </div>
          <footer className="width-100% bg-contrast-higher">
            <div class="content flex justify-between color-bg padding-top-md">
              <ul>
                <Link className="text-md color-bg" data-text='Blog' to='/'>
                  Blog
                </Link>
                <Link className="text-md color-bg margin-left-sm" data-text='Contact' to='/'>
                Contact
                </Link>
              </ul>
              <div className="flex text-md color-bg ">
                © {new Date().getFullYear()}<span className="hide show@md">, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> + <a href="https://www.shopify.com">Shopify</a>
                </span>
              </div>
            </div>
          </footer>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

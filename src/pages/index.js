import React from 'react'
import { Link } from 'gatsby'


import { useStaticQuery, graphql } from "gatsby"
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Img from "~/components/pic"
import Image from "../components/pic"


export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "cover_gosun.jpg"}) {
        childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="project-page padding-y-xl flex flex-column items-center">
      <div class="hero" >
        <Image filename="home-hero.jpg" style={{ height: "825px", width: "100%" }} imgStyle={{ objectFit: "cover" }} />
        <div class="content">
          <h1 class="text-xxxxl color-bg">Welcome to your mental freedom.</h1>
        </div>
      </div>
    </section>

  </>
)
}


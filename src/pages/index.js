import React from 'react'
import { Link } from 'gatsby'


import { useStaticQuery, graphql } from "gatsby"
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Img from "~/components/pic"
import Image from "../components/pic"
import ProjectCard from "../components/project-card"
import ArticleImg from "../images/article-img.jpg"
import HeroImg from "../images/home-hero.jpg"


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
    <section class="project-page padding-y-lg flex flex-column items-center">
      <main class="margin-sm">
        <div class="hero radius-lg"  style={{
          backgroundImage: `url('${HeroImg}')`}}>
          {/* <Image filename="home-hero.jpg" style={{ height: "825px", width: "100%" }} imgStyle={{ objectFit: "cover" }} /> */}
          <div class="content position-relative">
            <h1 class="text-xxl text-xxxxl@md color-bg">Welcome to your mental freedom.</h1>
            <p class="text-md color-bg margin-top-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit ac amet et rutrum curabitur.</p>
            <div class="flex">
              <a class="btn btn--primary margin-right-sm">Read more</a>
              <a class="btn btn--accent">Contact</a>
            </div>
          </div>
        </div>
        <div class="margin-top-lg">
          <p class="text-md color-contrast-higher"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit ac amet et rutrum curabitur.</p>
        </div>
        <ul class="grid gap-sm padding-bottom-sm">
          <ProjectCard classes="col-6@md" title="10 ways to be happy" url="latimer-app" cover={ArticleImg} />
          <ProjectCard classes="col-6@md" title="10 ways to be happy" url="latimer-app" cover={ArticleImg} />
          <ProjectCard classes="col-4@md" title="10 ways to be happy" url="latimer-app" cover={ArticleImg} />
          <ProjectCard classes="col-4@md" title="10 ways to be happy" url="latimer-app" cover={ArticleImg} />
          <ProjectCard classes="col-4@md" title="10 ways to be happy" url="latimer-app" cover={ArticleImg} />
        </ul>
      </main>
    </section>

  </>
)
}


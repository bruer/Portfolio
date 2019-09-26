import React from "react"
import { graphql, Link } from "gatsby"
import styles from "./project-post.module.css"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <section className={styles.container}>
      <h1>{post.frontmatter.title}</h1>
      <Img className={styles.image} fluid={featuredImgFluid} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link className={styles.link} to="/">Back</Link>
    </section>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"
import styles from "./project-post.module.css"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div className={styles.background}>
      <section className={styles.container}>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div>
            <a
              href={post.frontmatter.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img className={styles.image} fluid={featuredImgFluid} />
            </a>
            <p className={styles.imageText}>
              Click the image to go to the project
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Link className={styles.link} to="/#projects">
          Back
        </Link>
      </section>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
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

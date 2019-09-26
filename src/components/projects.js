import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./projects.module.css"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )
  return (
    <section className={styles.container} id="projects">
      <h2>My Projects</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link className={styles.link} to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p className={styles.date}>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </section>
  )
}

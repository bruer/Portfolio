import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>hej</h1>
      <ul>
        {data.allFile.edges.forEach(element =>
          console.log(element.node.relativePath)
        )}
        {data.allFile.edges.map(({ node }) => (
          <li key={node.id}>{node.relativePath}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          id
        }
      }
    }
  }
`

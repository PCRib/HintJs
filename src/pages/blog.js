import React from 'react'
import {Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({data}) => (
  <Layout>
    <h1>Latest Posts</h1>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
    {data.allMarkdownRemark.edges.map((post,index) =>(
      
        <div style={{
          boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
          boxSizing:'border-box',
          // padding: "0px 25px",
          width: "15em",
          minHeight:'15em',
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          borderRadius:'10px',
          margin: '1em 2em 0 0'
        }} key={index}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height:"100%"
          }}>
            <h3 style={{
              fontSize:'1em',
              textAlign:'center',
              margin:'0',
              padding: "0 0 1em 0"
            }}>{post.node.frontmatter.title}</h3>
            
            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent: "flex-end",
              // height: "50%"
            }}>
              <small>Posted by</small>
              <small> {post.node.frontmatter.author}</small>
              <small> on {post.node.frontmatter.date}</small>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </div>
          </div>
        </div>
      
    ))}
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery{  
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
          edges{
            node {
              id
              frontmatter {
                path
                title
                date
                author
              }
            }
          }
        }
      }
`

export default BlogPage

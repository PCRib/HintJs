import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { HeaderOne } from '../components/base/text'
import BlogCard from '../components/blog-card'
import BlogHero from '../components/blog-hero';

const PageTitle = styled(HeaderOne)`
  padding-left: 1rem;
`

const BlogPage = ({data}) => (
  <>
    <Layout>
    <BlogHero/>
      <PageTitle>Latest Posts</PageTitle>
      {data.allMarkdownRemark.edges.map((post,index) => (
         <BlogCard {...post.node.frontmatter} key={index} />
      ))}
    </Layout>
  </>
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
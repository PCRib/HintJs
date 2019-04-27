import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { HeaderOne, Body } from '../components/base/text'
import arrowLeft from '../images/arrow-left.svg'

const BlogContainer = styled.div`
    padding: 1rem 0;
`;

export default function Template({data}) {
    const post = data.markdownRemark
  return (
    <Layout>
        <BlogContainer>
            <Link to="/blog">
                <img src={arrowLeft} alt="go back"/>
            </Link>
            <HeaderOne>{post.frontmatter.title}</HeaderOne>
            <Body diminished>Posted by {post.frontmatter.author} on {post.frontmatter.date}</Body>
            <div dangerouslySetInnerHTML={{__html:post.html}}></div>
        </BlogContainer>
    </Layout>
    
  )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path:{eq: $path}}) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

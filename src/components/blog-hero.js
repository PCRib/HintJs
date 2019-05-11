import React from 'react'
import styled from 'styled-components'
import { colour } from '../util/styles'
import { StaticQuery, graphql } from 'gatsby'
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

const Title = styled.h1`
    color: ${colour.white};
    text-shadow: 4px 3px ${colour.black};
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
    justify-self: center;
    align-self: center;
`

const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `
const HeroImage = styled(BackgroundImage)`
    height: 30vh;
`

function renderImage({file}) {
    console.log({file})
    return <Hero>
            <HeroImage
            fluid={file.childImageSharp.fluid}
            >
            <Title>Check out the latest posts below</Title>
            </HeroImage> 
            </Hero>       
}

const BlogHero = () => (
    <StaticQuery
    query = {graphql`
    query {
        file(relativePath: {eq: "ducks.jpeg"}) {
          childImageSharp {
            fluid(maxWidth: 1000 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    
    render ={renderImage}
    />
    
);

export default BlogHero


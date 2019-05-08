import React from 'react'
import styled from "styled-components"
import { colour } from '../util/styles'

const Hero = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1499334758287-dc8133b315e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
`

const Title = styled.h1`
    color: ${colour.white};
    text-shadow: 4px 3px ${colour.black};
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
`

const BlogHero = () => (
    <Hero>
        <Title>Need a Rubber Duck? Talk to the blog!</Title>
    </Hero>
)

export default BlogHero
 


import React from 'react'
import styled from "styled-components"
import { Logo } from './base/text'

const Hero = styled.div`
    width: 100%;
    height: 40%;
    background-color: #ff7f9d;
    display: flex;
`

const BlogHero = () => (
    <Hero>
        <Logo>Latest Posts</Logo>
    </Hero>
)

export default BlogHero
 


import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Body, HeaderOne } from '../components/base/text'

const AboutPage = () => {
  return (
    <Layout>
        <HeaderOne>About Us</HeaderOne>
        <Body>We're Full Stack Developers</Body>
    </Layout>
  )
}

export default AboutPage
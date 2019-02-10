import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>  
        <div>
            <h1>About Us</h1>
            <p>We're Full Stack Developers</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            </div>
            <Link to="/">Go to Homepage</Link>
        </div>
    </Layout>
  )
}

export default AboutPage
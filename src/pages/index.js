import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to our Blog</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      {/* <Image /> */}
    </div>
    <div style={{
      display:'flex',
      justifyContent:'space-between'
    }}>
        <Link style={{
          width: "30%",
        }} to="/blog">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-around',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3 style={{
              margin:'0'
            }}> Blog</h3>
              <p style={{
              fontSize:'0.75em'
            }}>Read about what we've been up to</p>
              <p>Learn more</p>
          </div>
        </Link>
        <Link style={{
          width: "30%",
        }}to="/about">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-around',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3 style={{
              margin:'0'
            }}>About</h3>
              <p style={{
              fontSize:'0.75em'
            }}>A little about us and how we strive to learn more</p>
              <p>Learn more</p>
          </div>
        </Link>
        <Link style={{
          width: "30%",
        }} to="/contact">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-around',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3 style={{
              margin:'0'
            }}>Contact</h3>
            <p style={{
              fontSize:'0.75em'
            }}>Get info on how to reach us</p>
            <p>Learn more</p>
          </div>
        </Link>
    </div>
  </Layout>
)

export default IndexPage

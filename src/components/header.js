import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'
import { Logo } from './base/text'
import './header.css'

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>
      <Link to="/">{siteTitle}</Link>
    </Logo>
    <Menu />
  </HeaderContainer>
)

export default Header

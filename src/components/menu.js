import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.75rem;
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`
const NavListItem = styled.li`
    margin: 0 0.75rem;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
`

const navigationItems = [
    {link: '/', text: 'Home'},
    {link: '/blog', text: 'Blog'},
    {link: '/about', text: 'About'},
    {link: '/contact', text: 'Contact'},
]

const Menu = () => (
    <Navigation>
        <NavList>
            {navigationItems.map(({link, text}) => (
                <NavListItem>
                    <Link to={link}>{text}</Link>
                </NavListItem>
            ))}
        </NavList>
    </Navigation>
  )


export default Menu
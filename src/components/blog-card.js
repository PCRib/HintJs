import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HeaderTwo, Body } from './base/text'
import { colour } from '../util/styles'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  transition: ease-in 300ms all;

  & > * {
    margin-bottom: 0.5rem;
  }

  &:hover {
    font-style: bold;
    background: ${colour.white};
  }
`

export default ({title, author, date, path}) => (
  <Link to={path}>
    <Card>
      <HeaderTwo>{title}</HeaderTwo>
      <Body>Posted By: {author}</Body>
      <Body diminished>on {date}</Body>
    </Card>
  </Link>
)
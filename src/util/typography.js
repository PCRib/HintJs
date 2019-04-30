import Typography from 'typography'
import { colour } from './styles'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Playfair Display', 'Georgia', 'serif'],
  bodyFontFamily: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
  headerWeight: 700,
  headerColor: colour.black,
  bodyWeight: 400,
  boldWeight: 700,
  bodyColor: colour.black,
  scaleRatio: 2,
})

export default typography
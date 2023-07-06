import { css } from '../../styled-system/css'
export const sectionStyle = css({
  py: '10',
  maxW: '95%',
  m: 'auto',
  h: 'screen',
  sm: {
    maxW: '9/12',
  },
  lg: {
    maxW: '3/5',
  },
  xl: {
    maxW: '2/5',
  },
})

export const divStyle = css({
  color: 'white',
  p: '10',
  border: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.400',
  rounded: 'md',
})

export const h2Style = css({
  fontSize: '3xl',
  fontWeight: 'bold',
  mb: '6',
  lg: {
    fontSize: '4xl',
  },
})

export const inputStyle = css({
  w: 'full',
  px: '4',
  py: '3',
  rounded: 'md',
})

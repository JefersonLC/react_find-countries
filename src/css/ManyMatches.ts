import { css } from '../../styled-system/css'

export const ulStyle = css({
  px: '3'
})

export const liStyle = css({
  textAlign: 'start',
  fontSize: 'xl',
  mt: '1.5',
  display: 'flex',
  justifyContent: 'space-between',
})

export const buttonStyle = css({
  bgColor: 'green.500',
  p: '1px 10px',
  fontSize: 'md',
  color: 'gray.900',
  rounded: 'lg',
  ml: '4',

  '&:hover': {
    color: 'green.500',
    bgColor: 'gray.800',
    cursor: 'pointer'
  },
})

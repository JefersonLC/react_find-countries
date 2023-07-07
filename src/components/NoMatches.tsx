import {
  p1SpanStyle,
  p1Style,
  spanStyle
} from '../css/NoMatches'

export default function NoMatches() {
  return (
    <>
      <p className={p1Style}>
        No matches found <span className={p1SpanStyle}>:(</span>
      </p>
      <span className={spanStyle}>404</span>
    </>
  )
}

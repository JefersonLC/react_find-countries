import { divStyle, p1Style, p2SpanStyle, p2Style } from '../css/TooManyMatches'

export default function TooManyMatches() {
  return (
    <div className={divStyle}>
      <p className={p1Style}>There are too many matches</p>
      <p className={p2Style}>
        Please be more specific <span className={p2SpanStyle}>;)</span>
      </p>
    </div>
  )
}

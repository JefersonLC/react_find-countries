import { colSpanStyle } from '../../css/OneMatch'

export default function Info({
  children,
  data,
}: {
  children: string
  data: string | number
}) {
  return (
    <p>
      {children} <span className={colSpanStyle}>{data}</span>
    </p>
  )
}

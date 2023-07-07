import { cardH6Style } from '../../css/OneMatch'

export default function Subtitle({ children }: { children: string }) {
  return <h6 className={cardH6Style}>{children}</h6>
}

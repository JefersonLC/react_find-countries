import { buttonStyle, liStyle, ulStyle } from '../css/ManyMatches'
import { Countries } from '../services/api.d'

interface ManyMatchesProps {
  countries: Countries
  getCountry: (name: string) => void
}

export default function ManyMatches({
  countries,
  getCountry,
}: ManyMatchesProps) {
  return (
    <ul className={ulStyle}>
      {countries.map(({ name }) => (
        <li key={name.official} className={liStyle}>
          {name.common}{' '}
          <button
            onClick={() => getCountry(name.common)}
            className={buttonStyle}
          >
            Show
          </button>
        </li>
      ))}
    </ul>
  )
}

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
    <div>
      {countries.map(({ name }) => (
        <div key={name.official}>
          {name.common}{' '}
          <button onClick={() => getCountry(name.common)}>show</button>
        </div>
      ))}
    </div>
  )
}

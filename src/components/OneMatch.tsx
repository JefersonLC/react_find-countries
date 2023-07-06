import { Country } from '../services/api.d'

export default function OneMatch({ country }: { country: Country }) {
  return <div>{country.flag}</div>
}

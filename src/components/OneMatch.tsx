import useSWR from 'swr'
import { getData } from '../services/api'
import { Country, CountryInfo } from '../services/api.d'

export default function OneMatch({ country }: { country: Country }) {
  const API_WEATHER_URL = 'http://api.weatherstack.com/current'
  const key: string = import.meta.env.VITE_API_KEY
  const name = country.name.common

  const { data, error, isLoading } = useSWR<CountryInfo>(
    `${API_WEATHER_URL}?access_key=${key}&query=${name}`,
    getData
  )

  console.log(data)

  return <div>{country.flag}</div>
}

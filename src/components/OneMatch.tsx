import useSWR from 'swr'
import {
  cardH5Style,
  cardStyle,
  imgStyle,
  liStyle,
  ulStyle,
} from '../css/OneMatch'
import { getData } from '../services/api'
import { Country, CountryInfo } from '../services/api.d'
import Info from './oneMatch/Info'
import Subtitle from './oneMatch/Subtitle'

export default function OneMatch({ country }: { country: Country }) {
  const API_WEATHER_URL = 'http://api.weatherstack.com/current'
  const key: string = import.meta.env.VITE_API_KEY
  const name = country.name.common

  const { data, error, isLoading } = useSWR<CountryInfo>(
    `${API_WEATHER_URL}?access_key=${key}&query=${name}`,
    getData
  )

  if (!data) return <p>Error... Retrying...</p>
  if (error) return <p>Error!</p>
  if (isLoading) return <div>Loading...</div>

  return (
    <div className={cardStyle}>
      <div>
        <h5 className={cardH5Style}>{name}</h5>
        <Info data={country.capital[0]}>Capital:</Info>
        <Info data={country.population}>Population:</Info>
        <Subtitle>Spoken languages:</Subtitle>
        <ul className={ulStyle}>
          {Object.keys(country.languages).map((e) => (
            <li className={liStyle} key={e}>
              {country.languages[e]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className={imgStyle}
        />
        <Subtitle>{`Weather in ${name}`}</Subtitle>
        <img src={data.current.weather_icons[0]} />

        <Info data={data.current.temperature}>Temperature:</Info>
        <Info
          data={`${data.current.wind_speed} mph direction ${data.current.wind_dir}`}
        >
          Wind:
        </Info>
      </div>
    </div>
  )
}

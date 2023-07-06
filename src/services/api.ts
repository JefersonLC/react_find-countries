import { useState } from 'react'
import useSWR from 'swr'
import { Countries } from './api.d'

const API_COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=name,flag,population,languages'

export async function getData(url: string) {
  const res = await fetch(url)
  return await res.json()
}

export function useCountry() {
  const [countries, setCountries] = useState<Countries>([])

  const response = useSWR<Countries>(API_COUNTRIES_URL, getData)

  function findCountry({ currentTarget }: React.FormEvent<HTMLInputElement>) {
    const countryName = currentTarget.value.toLowerCase().trim()

    if (!countryName || !response.data) {
      setCountries([])
      return
    }

    const filteredCountries = response.data.filter(({ name: { common } }) =>
      common.toLowerCase().includes(countryName)
    )

    setCountries(filteredCountries)
  }

  function getCountry(name: string) {
    const filteredCountry = countries.find(
      ({ name: { common } }) => common === name
    )

    if (!filteredCountry) {
      setCountries([])
      return
    }

    setCountries([filteredCountry])
  }

  return { response, findCountry, countries, getCountry }
}

import { useState } from 'react'
import useSWR from 'swr'
import { Countries } from './api.d'

const API_URL = 'https://restcountries.com/v3.1/all'

async function getCountries(url: string) {
  const res = await fetch(url)
  return await res.json()
}

export function useCountry() {
  const [countries, setCountries] = useState<Countries>([])

  const response = useSWR<Countries>(API_URL, getCountries)

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

  return { response, findCountry, countries }
}

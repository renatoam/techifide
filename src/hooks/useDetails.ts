import { getCountryDetails } from "@/adapters"
import httpClient from "@/config/httpClient"
import { BorderCountryType, Country } from "@/contexts/homeServices.props"
import { useCallback, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export type UseDetails = ReturnType<typeof useDetails>

export default function useDetails() {
  const { name } = useParams()
  const [borderCountries, setBorderCountries] = useState<BorderCountryType[]>([])

  const {
    data: country,
    isLoading,
    isError
  } = useQuery<Country>(['countryDetails', name], async () => {
    const { data } = await httpClient.get(`/name/${name}?fullText=true`)
    return data[0]
  })

  async function getBorderCountries(country: Country): Promise<Country[]> {
    try {
      const requests = country.borders.map((code: string) => httpClient.get<Country>(`/alpha/${code}`))
      const responses = await Promise.all(requests)
      return responses.flatMap(response => response.data)
    } catch (error) {
      return []
    }
  }

  const handleBorderCountries = useCallback(async (country: Country) => {
    const responses = await getBorderCountries(country)
    
    if (responses.length === 0) return

    const countries = responses
      .map(cty => ({
        name: cty.name.common,
        link: cty.name.common.toLowerCase()
      }))
    setBorderCountries(countries)
  }, [])

  useEffect(() => {
    if (country) {
      handleBorderCountries(country)
    }
  }, [])

  return {
    country,
    borderCountries,
    isLoading,
    isError,
    countryDetails: country ? getCountryDetails(country) : null
  }
}

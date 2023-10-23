import { getCountryDetails } from "@/adapters"
import httpClient from "@/config/httpClient"
import { useServices } from "@/contexts/services"
import { BorderCountryType, Country } from "@/contexts/services.props"
import { useCallback, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function useDetails() {
  const { name } = useParams()
  const { getBorderCountries } = useServices()
  const [borderCountries, setBorderCountries] = useState<BorderCountryType[]>([])

  const {
    data: country,
    isLoading,
    isError
  } = useQuery<Country>(['countryDetails', name], async () => {
    const { data } = await httpClient.get(`/name/${name}?fullText=true`)
    return data[0]
  })

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
  }, [country, name])

  return {
    country,
    borderCountries,
    isLoading,
    isError,
    countryDetails: country ? getCountryDetails(country) : null
  }
}

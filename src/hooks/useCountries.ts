import { useServices } from "@/contexts/homeServices"
import { ChangeEvent, MouseEvent, useCallback, useEffect } from "react"

export type UseCountries = ReturnType<typeof useCountries>

export default function useCountries() {
  const {
    controlState,
    getCountryByName,
    getCountriesByRegion,
    dispatch
  } = useServices()

  const { filtered, selected } = controlState

  let timeout: string | number | NodeJS.Timeout
  const searchCountry = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    
    if (!value.trim()) return
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(async () => {
      const response = await getCountryByName(value)
      dispatch({ type: 'FILTER', payload: response })
    }, 500)
  }, [])

  const filterByRegion = useCallback(async (region: string) => {
    const response = await getCountriesByRegion(region.toLowerCase())
    dispatch({ type: 'FILTER', payload: response })
  }, [])

  const selectRegion = useCallback((event: MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement
    const selectedRegion = target.textContent ?? ''

    dispatch({ type: 'REGION', payload: selectedRegion })
  }, [])

  useEffect(() => {
    if (selected && selected !== 'Filter by Region') {
      filterByRegion(selected)
    }
  }, [selected])

  return {
    filtered,
    selected,
    searchCountry,
    selectRegion
  }
}

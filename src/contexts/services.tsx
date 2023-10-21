import httpClient from "@/config/httpClient";
import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";
import { Country, ServicesContextProps, ServicesContextProviderProps } from "./services.props";

export const ServicesContext = createContext<ServicesContextProps>({
  countries: [],
  getCountryByName: Function,
  getCountriesByRegion: Function
})

export const useServices = () => useContext(ServicesContext)

export const ServicesContextProvider = ({ children }: ServicesContextProviderProps) => {
  const { data } = useQuery<Country[]>('countries', async () => {
    const response = await httpClient.get<Country[]>('all')
    return response.data.slice(0, 8)
  })

  async function getCountryByName(name: string): Promise<Country[] | undefined> {
    try {
      const { data } = await httpClient.get(`/name/${name}`)
      return data ?? []
    } catch {
      return
    }
  }

  async function getCountriesByRegion(region: string): Promise<Country[] | undefined> {
    try {
      const { data } = await httpClient.get(`/region/${region}`)
      return data ?? []
    } catch {
      return
    }
  }

  const countries = data ?? []
  const value = useMemo(() => ({ countries, getCountryByName, getCountriesByRegion }), [countries])

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  )
}


import httpClient from "@/config/httpClient";
import { initialControlState } from "@/constants";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { useQuery } from "react-query";
import { controlReducer } from "./reducers";
import {
  Country,
  ServicesContextProps,
  ServicesContextProviderProps
} from "./homeServices.props";

export const ServicesContext = createContext<ServicesContextProps>({
  getCountryByName: async (_name: string) => [],
  getCountriesByRegion: async (_region: string) => [],
  dispatch: () => {},
  controlState: initialControlState
})

export const useServices = () => useContext(ServicesContext)

export const ServicesContextProvider = ({ children }: ServicesContextProviderProps) => {
  const [controlState, dispatch] = useReducer(controlReducer, initialControlState)

  const { data } = useQuery<Country[]>('countries', async () => {
    const response = await httpClient.get<Country[]>('all')
    return response.data.slice(0, 8)
  })

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch({ type: 'FILTER', payload: data })
    }
  }, [data])

  async function getCountryByName(name: string): Promise<Country[]> {
    try {
      const { data } = await httpClient.get(`/name/${name}`)
      return data ?? []
    } catch {
      return []
    }
  }

  async function getCountriesByRegion(region: string): Promise<Country[]> {
    try {
      const { data } = await httpClient.get(`/region/${region}`)
      return data ?? []
    } catch {
      return []
    }
  }

  const value = useMemo(() => ({
    getCountryByName,
    getCountriesByRegion,
    controlState,
    dispatch
  }), [
    getCountryByName,
    getCountriesByRegion,
    controlState,
    dispatch
  ])

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  )
}


import { ReactNode } from "react"

export interface Country {
  name: {
    common: string
  }
  tld: string[]
  population: string
  region: string
  capital: string
  flags: {
    svg: string
    alt: string
  }
}

export interface ServicesContextProviderProps {
  children: ReactNode
}

export type ControlStateType = {
  filtered: Country[]
  selected: string
}

type FilterType = { type: 'FILTER', payload: Country[] }
type RegionType = { type: 'REGION', payload: string }
export type ActionType = FilterType | RegionType

export interface ServicesContextProps {
  getCountryByName(name: string): Promise<Country[]>
  getCountriesByRegion(name: string): Promise<Country[]>
  controlState: ControlStateType
  dispatch: React.Dispatch<ActionType>
}

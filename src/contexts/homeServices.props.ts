import { ReactNode } from "react"

export type BorderCountryType = {
  link: string
  name: string
}

export interface Country {
  name: {
    common: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    } 
  }
  tld: string[]
  population: string
  region: string
  subregion: string
  capital: string
  flags: {
    svg: string
    alt: string
  }
  borders: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages: {
    [key: string]: string
  }
}

export type CountryDetail = {
  label: string
  value: string
}

export type CountryKeys = keyof Omit<Country, 'flags' | 'borders'> | 'nativeName'
export type GetCountryDetails = Record<CountryKeys, CountryDetail>

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

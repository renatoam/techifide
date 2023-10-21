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

export interface ServicesContextProps {
  countries: Country[]
  getCountryByName(name: string): unknown
  getCountriesByRegion(name: string): unknown
}

export interface ServicesContextProviderProps {
  children: ReactNode
}

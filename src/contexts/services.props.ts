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
  getCountryByName(name: string): any
  getCountriesByRegion(name: string): any
}

export interface ServicesContextProviderProps {
  children: ReactNode
}

import { Country, CountryDetail, GetCountryDetails } from "@/contexts/homeServices.props";

export function getNativeName(country: Country) {
  const name = Object.keys(country.name.nativeName)
    .reduce((acc, key, index) => {
      if (index > 0) return acc
      acc = country.name.nativeName[key].common
      return acc
    }, '')

  return name ?? country.name.common
}

export function getCountryDetails(country: Country): GetCountryDetails {
  return {
    name: {
      label: '',
      value: country.name.common
    },
    nativeName: {
      label: 'Native Name: ',
      value: getNativeName(country)
    },
    population: {
      label: 'Population: ',
      value: country?.population
    },
    region: {
      label: 'Region: ',
      value: country?.region
    },
    subregion: {
      label: 'Sub-Region: ',
      value: country?.subregion
    },
    capital: {
      label: 'Capital: ',
      value: country?.capital
    },
    tld: {
      label: 'Top Level Domain: ',
      value: country?.tld.join(', ')
    },
    currencies: {
      label: 'Currencies: ',
      value: Object.keys(country?.currencies)
        .map(key => country.currencies[key].name)
        .join(', ')
    },
    languages: {
      label: 'Languages: ',
      value: Object.keys(country?.languages)
        .map(key => country.languages[key])
        .join(', ')
    },
  }
}

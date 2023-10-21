import { Button, Typography, Wrapper } from "@/components/atoms"
import httpClient from "@/config/httpClient"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import styles from "./CountryDetailsPage.module.scss"
import { Image } from "@/components/molecules"
import { useCallback, useEffect, useState } from "react"

export default function CountryDetailsPage() {
  const { name } = useParams()
  const [borders, setBorders] = useState<any>([])

  const { data: country, isLoading, isError } = useQuery<any>(['countryDetails', name], async () => {
    const { data } = await httpClient.get(`/name/${name}?fullText=true`)
    return data[0]
  })

  const border = useCallback(async () => {
    if (!country) return
    const requests = country.borders.map((code: string) => httpClient.get(`/alpha/${code}`))
    const responses = await Promise.all(requests)
    const result = responses
      .flatMap(response => response.data)
      .map(cty => ({
        name: cty.name.common,
        link: cty.name.common.toLowerCase()
      }))
    setBorders(result)
  }, [country])

  useEffect(() => {
    if (country) {
      border()
    }
  }, [country, name])


  function getNativeName() {
    const name = Object.keys(country.name.nativeName).reduce((acc, key, index) => {
      if (index > 0) return acc
      acc = country.name.nativeName[key].common
      return acc
    }, '')

    return name ?? country.name.common
  }

  if (isLoading) return <h1>Loading...</h1>
  if (isError || !country) return (
    <Button link="/">Back to Home</Button>
  )

  return (
    <Wrapper className={styles.details}>
        <Button link="/">Back</Button>
        <Wrapper className={styles.details__container}>
          <Wrapper className={styles.details__image}>
            <Image src={country.flags.svg} alt={country.flags.alt} />
          </Wrapper>
          <Wrapper className={styles.details__info}>
            <Typography element="h2">{country.name.common}</Typography>
            <Wrapper className={styles.details__columns}>
              <Wrapper className={styles.info}>
                <Typography element='p'><span>Native Name: </span>{getNativeName()}</Typography>
                <Typography element='p'><span>Population: </span>{country.population}</Typography>
                <Typography element='p'><span>Region: </span>{country.region}</Typography>
                <Typography element='p'><span>Sub-Region: </span>{country.subregion}</Typography>
                <Typography element='p'><span>Capital: </span>{country.capital}</Typography>
              </Wrapper>
              <Wrapper className={styles.info}>
                <Typography element='p'><span>Top Level Domain: </span>{country.tld}</Typography>
                <Typography element='p'><span>Currencies: </span>{Object.values(country.currencies).map((val: any) => val.name).join(', ')}</Typography>
                <Typography element='p'><span>Languages: </span>{Object.values(country.languages).join(', ')}</Typography>
              </Wrapper>
            </Wrapper>
            <Wrapper className={styles.border}>
              <Typography element='p'>Border Countries: </Typography>
              {borders.map((bdr: any) => (
                <Link to={`/country/${bdr.link}`} key={bdr.link}>
                  <Button icon={false}>{bdr.name}</Button>
                </Link>
              ))}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
  )
}

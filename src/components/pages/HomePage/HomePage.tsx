import { Typography, Wrapper } from "@/components/atoms";
import { Image, Input } from "@/components/molecules";
import styles from "./HomePage.module.scss";
import { ChangeEvent, useCallback, useState } from "react";
import { useServices } from "@/contexts/services";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { countries, getCountryByName } = useServices()
  const [filtered, setFiltered] = useState([])
  const list = filtered.length > 0 ? filtered : countries

  const searchCountry = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const response = await getCountryByName(event.target.value)
    setFiltered(response)
  }, [])

  return (
    <Wrapper className={styles.container}>
      <Wrapper className={styles.controls}>
        <Wrapper>
          <Input placeholder='Search for a country' onChange={searchCountry} />
        </Wrapper>
      </Wrapper>
      <Wrapper role="banner" className={styles.list}>
        {list.map(country => (
          <Link
            key={`${country.name.common}_${country.tld}`}
            to={`/country/${country.name.common.toLowerCase()}`}
          >
            <Wrapper className={styles.card}>
              <Image src={country.flags.svg} alt={country.flags.alt} height={200} />
              <Wrapper className={styles.card__info}>
                <Typography element='h2'>{country.name.common}</Typography>
                <Typography element='p'><span>Population: </span>{country.population}</Typography>
                <Typography element='p'><span>Region: </span>{country.region}</Typography>
                <Typography element='p'><span>Capital: </span>{country.capital}</Typography>
              </Wrapper>
            </Wrapper>
          </Link>
        ))}
      </Wrapper>
    </Wrapper>
  )
}

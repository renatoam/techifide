import { Typography, Wrapper } from "@/components/atoms";
import { Image } from "@/components/molecules";
import { UseCountries, useCountries } from "@/hooks";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomeList() {
  const { filtered }: UseCountries = useCountries()
  return (
    <Wrapper role="banner" className={styles.list}>
      {filtered.map(country => (
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
  )
}

export default memo(HomeList)

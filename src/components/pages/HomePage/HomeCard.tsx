import { Typography, Wrapper } from "@/components/atoms";
import { Country, CountryKeys } from "@/contexts/homeServices.props";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { Image } from "@/components/molecules";
import { getCountryDetails } from "@/adapters";
import { memo } from "react";

function HomeCard(props: { country: Country }) {
  const { country } = props
  const countryDetails = getCountryDetails(country)

  return (
    <Link
      key={`${country.name.common}_${country.tld}`}
      to={`/country/${country.name.common.toLowerCase()}`}
    >
      <Wrapper className={styles.card}>
        <Image src={country.flags.svg} alt={country.flags.alt} height={200} />
        <Wrapper className={styles.card__info}>
          <Typography element="h2">{country.name.common}</Typography>
          {Object.keys(countryDetails).map((key, index) => {
            if (index > 2) return
            const detail = countryDetails[key as CountryKeys]
            return (
              <Typography element="p" key={detail.label}>
                <span>{detail.label}</span>
                {detail.value}
              </Typography>
            )
          })}
        </Wrapper>
      </Wrapper>
    </Link> 
  )
}

export default memo(HomeCard)

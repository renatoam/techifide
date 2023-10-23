import { Button, Typography, Wrapper } from "@/components/atoms";
import { memo } from "react";
import styles from "./CountryDetailsPage.module.scss"
import { Link } from "react-router-dom";
import { UseDetails, useDetails } from "@/hooks";

function CountryDetailsPageBorder() {
  const { borderCountries }: UseDetails = useDetails()
  return (
    <Wrapper className={styles.border}>
      <Typography element="p">Border Countries: </Typography>
      {borderCountries.map(bdr => (
        <Link to={`/country/${bdr.link}`} key={bdr.link}>
          <Button icon={false}>{bdr.name}</Button>
        </Link>
      ))}
    </Wrapper>
  )
}

export default memo(CountryDetailsPageBorder)

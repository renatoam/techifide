import { Button, Typography, Wrapper } from "@/components/atoms";
import { memo } from "react";
import styles from "./CountryDetailsPage.module.scss"
import useDetails from "@/hooks/useDetails";
import { Link } from "react-router-dom";

function CountryDetailsPageBorder() {
  const { borderCountries } = useDetails()
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

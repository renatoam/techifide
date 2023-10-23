import { Wrapper } from "@/components/atoms";
import { Image } from "@/components/molecules";
import useDetails from "@/hooks/useDetails";
import { memo } from "react";
import styles from "./CountryDetailsPage.module.scss";

function CountryDetailsPageImage() {
  const { country } = useDetails()

  if (!country) return <p>Image not available.</p>

  return (
    <Wrapper className={styles.details__image}>
      <Image src={country.flags.svg} alt={country.flags.alt} />
    </Wrapper>
  )
}

export default memo(CountryDetailsPageImage)

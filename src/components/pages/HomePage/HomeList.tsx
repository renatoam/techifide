import { Wrapper } from "@/components/atoms";
import { UseCountries, useCountries } from "@/hooks";
import { memo } from "react";
import HomeCard from "./HomeCard";
import styles from "./HomePage.module.scss";

function HomeList() {
  const { filtered }: UseCountries = useCountries()
  return (
    <Wrapper role="banner" className={styles.list}>
      {filtered.map(country => (
        <HomeCard key={country.name.common} country={country} />
      ))}
    </Wrapper>
  )
}

export default memo(HomeList)

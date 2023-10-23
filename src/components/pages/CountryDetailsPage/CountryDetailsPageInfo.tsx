import { Typography, Wrapper } from "@/components/atoms"
import { PropsWithChildren, memo } from "react"
import styles from "./CountryDetailsPage.module.scss"
import { CountryKeys } from "@/contexts/homeServices.props"
import { UseDetails, useDetails } from "@/hooks"

function CountryDetailsPageInfo(props: PropsWithChildren) {
  const { countryDetails }: UseDetails = useDetails()

  if (!countryDetails) return <p>Country data unavailable.</p>

  return (
    <Wrapper className={styles.details__info}>
      <Typography element="h2">{countryDetails.name.value}</Typography>
      <Wrapper className={styles.details__columns}>
        <Wrapper className={styles.info}>
          {Object.keys(countryDetails).map((key, index) => {
            if (index > 5 || key === 'name') return
            const detail = countryDetails[key as CountryKeys]
            return (
              <Typography element="p" key={detail.label}>
                <span>{detail.label}</span>
                {detail.value}
              </Typography>
            )
          })}
        </Wrapper>
        <Wrapper className={styles.info}>
          {Object.keys(countryDetails).map((key, index) => {
            if (index < 6) return
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
      {props.children}
    </Wrapper>
  )
}

export default memo(CountryDetailsPageInfo)

import { Button } from "@/components/atoms"
import CountryDetailsPageBorder from "./CountryDetailsPageBorder"
import CountryDetailsPageImage from "./CountryDetailsPageImage"
import CountryDetailsPageInfo from "./CountryDetailsPageInfo"
import CountryDetailsPageWrapper from "./CountryDetailsPageWrapper"
import { UseDetails, useDetails } from "@/hooks"

export default function CountryDetailsPage() {
  const { isError, isLoading, country }: UseDetails = useDetails()

  if (isLoading) return <h1>Loading...</h1>
  if (isError || !country) return (
    <Button link="/">Back to Home</Button>
  )

  return (
    <CountryDetailsPageWrapper>
      <CountryDetailsPageImage />
      <CountryDetailsPageInfo>
        <CountryDetailsPageBorder />
      </CountryDetailsPageInfo>
    </CountryDetailsPageWrapper>
  )
}

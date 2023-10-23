import { Button } from "@/components/atoms"
import useDetails from "@/hooks/useDetails"
import CountryDetailsPageBorder from "./CountryDetailsPageBorder"
import CountryDetailsPageImage from "./CountryDetailsPageImage"
import CountryDetailsPageInfo from "./CountryDetailsPageInfo"
import CountryDetailsPageWrapper from "./CountryDetailsPageWrapper"

export default function CountryDetailsPage() {
  const { isError, isLoading, country } = useDetails()

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

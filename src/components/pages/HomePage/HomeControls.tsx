import { memo } from "react";
import styles from "./HomePage.module.scss";
import { Wrapper } from "@/components/atoms";
import { Input, Select } from "@/components/molecules";
import { UseCountries, UseDropdown, useCountries, useDropdown } from "@/hooks";
import { REGIONS } from "@/constants";

function HomeControls() {
  const {
    selected,
    selectRegion,
    searchCountry
  }: UseCountries = useCountries()

  const {
    handleVisibility,
    selectVisibility
  }: UseDropdown = useDropdown()

  return (
    <Wrapper className={styles.controls}>
      <Wrapper>
        <Input placeholder='Search for a country' onChange={searchCountry} />
      </Wrapper>
      <Select
        id="region"
        handleSelection={selectRegion}
        options={REGIONS}
        display={selected}
        visibility={selectVisibility}
        handleVisibility={handleVisibility}
      />
    </Wrapper>
  )
}

export default memo(HomeControls)

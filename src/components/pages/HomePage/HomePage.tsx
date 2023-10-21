import { Typography, Wrapper } from '@/components/atoms';
import { Image, Input, Select } from '@/components/molecules';
import { useServices } from '@/contexts/services';
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const { countries, getCountryByName, getCountriesByRegion } = useServices()
  const [filtered, setFiltered] = useState([])
  const [selected, setSelected] = useState('Filter by Region')
  const [selectVisibility, setSelectVisibility] = useState(false)
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]

  const list = filtered.length > 0 ? filtered : countries

  const searchCountry = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const response = await getCountryByName(event.target.value)
    setFiltered(response)
  }, [])

  const selectRegion = useCallback(async(event: MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement
    const selectedRegion = target.textContent ?? ''
    
    setSelected(selectedRegion)
    const response = await getCountriesByRegion(selectedRegion.toLowerCase())
    setFiltered(response)
  }, [])

  const closeModal = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    
    if (target.id !== "region" && !target.closest("#region")) {
      return setSelectVisibility(false)
    }
  }

  const handleVisibility = useCallback(() => {
    setSelectVisibility(!selectVisibility)
  }, [selectVisibility])

  return (
    <Wrapper element="main" id="main" className={styles.main} onClick={closeModal}>
      <Wrapper className={styles.container}>
        <Wrapper className={styles.controls}>
          <Wrapper>
            <Input placeholder='Search for a country' onChange={searchCountry} />
          </Wrapper>
          <Select
            id="region"
            handleSelection={selectRegion}
            options={regions}
            display={selected}
            visibility={selectVisibility}
            handleVisibility={handleVisibility}
          />
        </Wrapper>
       <Wrapper role="banner" className={styles.list}>
          {list.map(country => (
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
      </Wrapper>
    </Wrapper>
  )
}

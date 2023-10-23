import { Button, Wrapper } from "@/components/atoms";
import { PropsWithChildren, memo } from "react";
import styles from "./CountryDetailsPage.module.scss";

function CountryDetailsPageWrapper(props: PropsWithChildren) {
  return (
    <Wrapper className={styles.details}>
      <Button link="/">Back</Button>
      <Wrapper className={styles.details__container}>
        {props.children}
      </Wrapper>
    </Wrapper>
  )
}

export default memo(CountryDetailsPageWrapper)

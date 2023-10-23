import { Wrapper } from "@/components/atoms";
import { UseDropdown, useDropdown } from "@/hooks";
import { PropsWithChildren, memo } from "react";
import styles from "./HomePage.module.scss";

function HomeWrapper(props: PropsWithChildren) {
  const { closeModal }: UseDropdown = useDropdown()
  return (
    <Wrapper element="main" id="main" className={styles.main} onClick={closeModal}>
      <Wrapper className={styles.container}>{props.children}</Wrapper>
    </Wrapper>
  )
}

export default memo(HomeWrapper)

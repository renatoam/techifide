import { Icon, List, Typography, Wrapper } from "@/components/atoms";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import styles from "./Select.module.scss";
import { SelectWrapperProps } from "./Select.props";

function SelectWrapper(props: SelectWrapperProps) {
  const {
    display,
    handleVisibility,
    visibility,
    id,
    children,
    ...rest
  } = props

  return (
    <Wrapper
      className={styles.select__wrapper}
      onClick={handleVisibility}
      id={id}
    >
      <Wrapper className={styles.select} {...rest}>
        <Typography element="p">{display}</Typography>
        <List className={`${styles.select__options} ${visibility ? styles.active : ''}`}>
          {children}
        </List>
      </Wrapper>
      <Icon label="chevron" icon={faChevronDown} />
    </Wrapper>
  )
}

export default memo(SelectWrapper)

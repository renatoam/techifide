import { ListItem } from "@/components/atoms"
import { memo } from "react"
import styles from "./Select.module.scss"
import { SelectOptionsProps } from "./Select.props"

function SelectOptions(props: SelectOptionsProps) {
  const { options, handleSelection } = props

  return (
    <>
      {options.map((option, idx) => {
        const key = `${option}_${idx}`
        return (
          <ListItem
            key={key}
            className={styles.option}
            role="option"
            onClick={handleSelection}
          >
            {option}
          </ListItem>
        )
      })}
    </>
  )
}

export default memo(SelectOptions)

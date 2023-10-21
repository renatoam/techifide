import { SelectProps } from './Select.props';
import SelectOptions from './SelectOptions';
import SelectWrapper from './SelectWrapper';

export default function Select(props: SelectProps) {
  const {
    display,
    options = [],
    handleSelection,
    handleVisibility,
    visibility,
    ...rest
  } = props

  return (
    <SelectWrapper
      visibility={visibility}
      handleVisibility={handleVisibility}
      display={display}
      {...rest}
    >
      <SelectOptions
        options={options}
        handleSelection={handleSelection}
      />
    </SelectWrapper>
  )
}

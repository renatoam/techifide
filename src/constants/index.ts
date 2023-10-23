import { ControlStateType } from "@/contexts/homeServices.props"

export const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"]
export const initialControlState: ControlStateType = {
  filtered: [],
  selected: 'Filter by Region'
}

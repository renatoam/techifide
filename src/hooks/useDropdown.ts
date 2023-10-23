import { MouseEvent, useCallback, useState } from "react"

export type UseDropdown = ReturnType<typeof useDropdown>

export default function useDropdown() {
  const [selectVisibility, setSelectVisibility] = useState(false)

  const closeModal = useCallback((event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    
    if (target.id !== "region" && !target.closest("#region")) {
      setSelectVisibility(false)
    }
  }, [setSelectVisibility])

  const handleVisibility = useCallback(() => {
    setSelectVisibility(!selectVisibility)
  }, [selectVisibility])

  return {
    selectVisibility,
    handleVisibility,
    closeModal
  }
}

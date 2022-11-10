import { useEffect } from "react"

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ?  `${title} - Sangita's Kitchen (Classic Food)` : "Sangita's Kitchen (Classic Food)";
  }, [title]);  
}

export default usePageTitle
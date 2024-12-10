import { useEffect, useRef, useState } from "react"
import { Laptop } from "@/components/laptop/Laptop"
import { Mobile } from "@/components/mobile/Mobile"

const LAPTOP_WIDTH = 1024

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null)
  const [isLaptop, setIsLaptop] = useState(false)

  useEffect(() => {
    const mainEl = mainRef.current
    const observer = new ResizeObserver(() => {
      if (mainEl) setIsLaptop(mainEl.clientWidth > LAPTOP_WIDTH)
    })

    if (mainEl) observer.observe(mainEl)

    return () => {
      if (mainEl) observer.unobserve(mainEl)
    }
  }, [])

  return <main ref={mainRef}>{isLaptop ? <Laptop /> : <Mobile />}</main>
}

export default App

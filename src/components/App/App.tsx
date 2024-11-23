import { Mobile } from "@/components/mobile/Mobile"
import "./App.css"

const App: React.FC = () => {
  const isLaptop = innerWidth > 1024

  return <main>{isLaptop ? <h1>desktop</h1> : <Mobile />}</main>
}

export default App

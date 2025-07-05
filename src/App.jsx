import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div className="flex min-h-full flex-col bg-white ">
      <Navbar/>
    </div>
    
  )
}

export default App

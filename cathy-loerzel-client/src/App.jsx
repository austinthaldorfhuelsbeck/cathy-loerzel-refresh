import { useEffect } from "react"
import { Switch } from "react-router-dom"
import Layout from "./Layout/Layout"
import "./Layout/css/normalize.css"
import "./Layout/css/webflow.css"
import "./Layout/css/App.css"

// Animate on scroll effects
import Aos from "aos"
import "aos/dist/aos.css"

export default function App() {  
  // Animate on scroll speed control
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="app-routes">
      <Switch>
        <Layout />
      </Switch>
    </div>
  )
}
import Card from "./Components/Card/Card"
import Cardholder from "./Components/Cardholder/Cardholder"
import Navbar from "./Components/Navbar/Navbar"
import { Fetchdata } from "./Services/Fetchproduct"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Cardholder/>
    </>
  )
}

export default App

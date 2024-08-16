import Card from "./Components/Card/Card"
import Navbar from "./Components/Navbar/Navbar"
import { Fetchdata } from "./Services/Fetchproduct"

function App() {

  return (
    <>
      <Navbar />
      <Card/>
      {/* <button onClick={() => {
        const ans = Fetchdata()
        console.log(ans)
      }}>click</button> */}
    </>
  )
}

export default App

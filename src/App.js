import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Loginpage1 from "./components/login1"
import Mainpage1 from "./components/mainpage1"
import Secondpage from "./components/Secondpage"
import Thirdpage from "./components/thridpage"
import Forthpage from "./components/forthpage"
// import Fifthpage from "./components/fifthpage"
function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Mainpage1 />} />

          <Route path="/Secondpage" element={<Secondpage />} />

          <Route path="/thridpage" element={<Thirdpage />} />

          <Route path="/back" element={<Secondpage />} />

          <Route path="/forthpage" element={<Forthpage />} />

          <Route path="/back" element={<Thirdpage />} />




        </Routes>

      </Router>
    </div>
  )
}

export default App

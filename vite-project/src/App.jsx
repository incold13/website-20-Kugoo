import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.scss'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Page1 from "./components/Page1/Page1.jsx"
import Page2 from "./components/Page2/Page2.jsx"
import Page3 from "./components/Page3/Page3.jsx"
import Page4 from "./components/Page4/Page4.jsx"
import Page5 from "./components/Page5/Page5.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" index element={<Page1 />} />
        <Route path="/servise" element={<Page2 />} />
        <Route path="/coop" element={<Page3 />} />
        <Route path="/test" element={<Page4 />} />
        <Route path="/catalog" element={<Page5 />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

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
import Page6 from "./components/Page6/Page6.jsx"
import Page7 from "./components/Page7/Page7.jsx"
import Page8 from "./components/Page8/Page8.jsx"
import Page9 from "./components/Page9/Page9.jsx"
import Page10 from "./components/Page10/Page10.jsx"

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
        <Route path="/catalog_prod" element={<Page6 />} />
        <Route path="/product" element={<Page7 />} />
        <Route path="/about" element={<Page8 />} />
        <Route path="/delivery" element={<Page9 />} />
        <Route path="/promos" element={<Page10 />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

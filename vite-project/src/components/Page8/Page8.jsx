import { useState } from "react"
import About_sect1 from "./about_sect1/about_sect1.jsx"
import About_sect2 from "./about_sect2/about_sect2.jsx"
import About_sect3 from "./about_sect3/about_sect3.jsx"
import About_sect4 from "./about_sect4/about_sect4.jsx"
import About_sect5 from "./about_sect5/about_sect5.jsx"
import About_sect6 from "./about_sect6/about_sect6.jsx"
import About_sect7 from "./about_sect7/about_sect7.jsx"
import About_sect8 from "./about_sect8/about_sect8.jsx"
import About_sect9 from "./about_sect9/about_sect9.jsx"
import About_sect10 from "./about_sect10/about_sect10.jsx"
import About_sect11 from "./about_sect11/about_sect11.jsx"

function Page8() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About_sect1 />
      <About_sect2 />
      <About_sect3 />
      <About_sect4 />
      <About_sect5 />
      <About_sect6 />
      <About_sect7 />
      <About_sect8 />
      <About_sect9 />
      <About_sect10 />
      <About_sect11 />
    </>
  )
}

export default Page8

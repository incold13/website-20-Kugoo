import { useState } from 'react'
import Hero from "./Hero/Hero.jsx"
import Hero_sect2 from "./Hero_sect2/Hero_sect2.jsx"
import Hero_sect3 from "./Hero_sect3/Hero_sect3.jsx"
import Hero_sect4 from "./Hero_sect4/Hero_sect4.jsx"
import Hero_sect5 from "./Hero_sect5/Hero_sect5.jsx"
import Hero_sect6 from "./Hero_sect6/Hero_sect6.jsx"
import Hero_sect7 from "./Hero_sect7/Hero_sect7.jsx"
import Hero_sect8 from "./Hero_sect8/Hero_sect8.jsx"
import Hero_sect9 from "./Hero_sect9/Hero_sect9.jsx"
import Hero_sect10 from "./Hero_sect10/Hero_sect10.jsx"
import Hero_sect11 from "./Hero_sect11/Hero_sect11.jsx"
import Hero_sect12 from "./Hero_sect12/Hero_sect12.jsx"

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Hero_sect2/>
      <Hero_sect3/>
      <Hero_sect4/>
      <Hero_sect5/>
      <Hero_sect6/>
      <Hero_sect7/>
      <Hero_sect8/>
      <Hero_sect9/>
      <Hero_sect10/>
      <Hero_sect11/>
      <Hero_sect12/>
    </>
  )
}

export default Page1

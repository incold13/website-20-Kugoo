import { useState } from 'react'
import Test_sect1 from "./Test_sect1/Test_sect1.jsx"
import Test_sect2 from "./Test_sect2/Test_sect2.jsx"
import Test_sect3 from "./Test_sect3/Test_sect3.jsx"
import Test_sect4 from "./Test_sect4/Test_sect4.jsx"

function Page4() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test_sect1/>
      <Test_sect2/>
      <Test_sect3/>
      <Test_sect4/>
    </>
  )
}

export default Page4

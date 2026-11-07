import { useState } from 'react'
import Serv_sect1 from "./Serv_sect1/Serv_sect1.jsx"
import Serv_sect2 from "./Serv_sect2/Serv_sect2.jsx"
import Serv_sect3 from "./Serv_sect3/Serv_sect3.jsx"
import Serv_sect4 from "./Serv_sect4/Serv_sect4.jsx"
import Serv_sect5 from "./Serv_sect5/Serv_sect5.jsx"
import Serv_sect6 from "./Serv_sect6/Serv_sect6.jsx"
import Serv_sect7 from "./Serv_sect7/Serv_sect7.jsx"
import Serv_sect8 from "./Serv_sect8/Serv_sect8.jsx"
import Serv_sect9 from "./Serv_sect9/Serv_sect9.jsx"
import Serv_sect10 from "./Serv_sect10/Serv_sect10.jsx"
import Serv_sect11 from "./Serv_sect11/Serv_sect11.jsx"
import Serv_sect12 from "./Serv_sect12/Serv_sect12.jsx"

function Page2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Serv_sect1/>
      <Serv_sect2/>
      <Serv_sect3/>
      <Serv_sect4/>
      <Serv_sect5/>
      <Serv_sect6/>
      <Serv_sect7/>
      <Serv_sect8/>
      <Serv_sect9/>
      <Serv_sect10/>
      <Serv_sect11/>
      <Serv_sect12/>
    </>
  )
}

export default Page2

import { useState } from "react"
import Delivery_sect1 from "./delivery_sect1/delivery_sect1.jsx"
import Delivery_sect2 from "./delivery_sect2/delivery_sect2.jsx"
import Delivery_sect3 from "./delivery_sect3/delivery_sect3.jsx"
import Delivery_sect4 from "./delivery_sect4/delivery_sect4.jsx"

function Page9() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Delivery_sect1 />
      <Delivery_sect2 />
      <Delivery_sect3 />
      <Delivery_sect4 />
    </>
  )
}

export default Page9

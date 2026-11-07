import { useState } from 'react'
import Catalog_sect1 from "./Catalog_sect1/Catalog_sect1.jsx"
import Catalog_sect2 from "./Catalog_sect2/Catalog_sect2.jsx"
import Catalog_sect3 from "./Catalog_sect3/Catalog_sect3.jsx"
import Catalog_sect4 from "./Catalog_sect4/Catalog_sect4.jsx"
import Catalog_sect5 from "./Catalog_sect5/Catalog_sect5.jsx"
import Catalog_sect6 from "./Catalog_sect6/Catalog_sect6.jsx"

function Page4() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Catalog_sect1/>
      <Catalog_sect2/>
      <Catalog_sect3/>
      <Catalog_sect4/>
      <Catalog_sect5/>
      <Catalog_sect6/>
    </>
  )
}

export default Page4

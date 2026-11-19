import { useState } from 'react'
import Catalog_prod_sect1 from "./Catalog_prod_sect1/Catalog_prod_sect1.jsx"
import Catalog_prod_sect2 from "./Catalog_prod_sect2/Catalog_prod_sect2.jsx"
import Catalog_prod_sect3 from "./Catalog_prod_sect3/Catalog_prod_sect3.jsx"

function Page6() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Catalog_prod_sect1/>
      <Catalog_prod_sect2/>
      <Catalog_prod_sect3/>
    </>
  )
}

export default Page6

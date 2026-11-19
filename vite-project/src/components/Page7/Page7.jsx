import { useState } from "react"
import Product_sect1 from "./product_sect1/product_sect1.jsx"
import Product_sect2 from "./product_sect2/product_sect2.jsx"
import Product_sect3 from "./product_sect3/product_sect3.jsx"
import Product_sect4 from "./product_sect4/product_sect4.jsx"
import Product_sect5 from "./product_sect5/product_sect5.jsx"
import Product_sect6 from "./product_sect6/product_sect6.jsx"
import Product_sect7 from "./product_sect7/product_sect7.jsx"
import Product_sect8 from "./product_sect8/product_sect8.jsx"

function Page7() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product_sect1 />
      <Product_sect2 />
      <Product_sect3 />
      <Product_sect4 />
      <Product_sect5 />
      <Product_sect6 />
      <Product_sect7 />
      <Product_sect8 />
    </>
  )
}

export default Page7

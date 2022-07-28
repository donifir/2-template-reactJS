import React from 'react'
import '../user/css/style.css'
import Categories from './component/Categories'
import MenuBegin from './component/MenuBegin'
import Product from './component/Product'

export default function User() {
  return (
    <div>
      <MenuBegin/>
      <Categories/>
      <Product/>
    </div>
  )
}

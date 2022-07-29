import React, { FC, useState } from 'react'
import { IBrand } from '../../../types/types'
import './Brands.css'
import BrandsList from './BrandsList/BrandsList'

const Brands: FC = () => {

  const [brands, setBrands] = useState<IBrand[]>([
    { id: 1, title: 'All Clothing', code: 'All Clothing' },
    { id: 2, title: 'Hoodie', code: 'Hoodie' },
    { id: 3, title: 'Pullover', code: 'Pullover' },
    { id: 4, title: 'Polo shirt', code: 'Polo shirt' },
    { id: 5, title: 'Jeans', code: 'Jeans' },
    { id: 6, title: 'Pants', code: 'Pants' },
    { id: 7, title: 'Sneakers', code: 'Sneakers' },
  ])


  return (
    <div className='brands_box'>
      <BrandsList brands={brands}/>
    </div>
  )
}

export default Brands
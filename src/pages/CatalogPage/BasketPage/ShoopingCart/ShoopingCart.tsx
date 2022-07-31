import React from 'react'
import './ShoopingCart.css'
import ShoopingCartList from './ShoopingCartList/ShoopingCartList'

const ShoopingCart = () => {
  return (
    <div className='shoopingCart_Box'>
        <h2 className='title'>Shooping Cart</h2>
        <ShoopingCartList />
    </div>
  )
}

export default ShoopingCart
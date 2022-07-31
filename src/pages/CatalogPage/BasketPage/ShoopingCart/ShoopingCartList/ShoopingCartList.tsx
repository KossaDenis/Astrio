import React from 'react'
import ShoopingCartItem from '../ShoopingCartItem/ShoopingCartItem'
import './ShoopingCartList.css'

const ShoopingCartList = () => {
    return (
        <div>
            <div className="titleItems">
                <p>Item</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
            </div>
            <ShoopingCartItem />
        </div>
    )
}

export default ShoopingCartList
import React from 'react'
import './ShoopingCartItem.css'

const ShoopingCartItem = () => {
    return (
        <div className='shoopingCartItem'>
            <div className="itemInfo">
                <div className='cartImg_Box'>
                    <img className='CartImg' src="https://ae04.alicdn.com/kf/Se6e82a22664041469b33d8cfdd16a479O/Harajuku-Patchwork-Letter-Stars-Embroidery-Ripped-Mens-Denim-Trousers-Straight-Retro-Washed-Oversized-Streetwear-Baggy-Jeans.jpg" alt="" />
                </div>
                <div className='titleClothing_Box'>
                    <p>Brand</p>
                </div>
            </div>
            <p>234</p>
            <input className='Qty' defaultValue='1' type="number" min='1' max='50' />
            <p>434</p>
            <img className='trash' src="http://cdn.onlinewebfonts.com/svg/img_550776.png" alt="" />
        </div>
    )
}

export default ShoopingCartItem
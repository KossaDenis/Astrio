import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

interface Iimages {
  logo: string,
  basket: string
}

const images: Iimages = {
  logo: 'https://github.com/AzureBin/react-test/blob/master/assets/images/logo.png?raw=true',
  basket: 'https://pic.onlinewebfonts.com/svg/img_568561.png'
}

const Header: FC = () => {
  return (
    <div className='header_box'>
      <div className="logo_box">
        <img className='logo' src={images.logo} alt="logo" />
      </div>
      <div className="basket_box">
        <Link to='/basket'>
          <img className='basket' src={images.basket} alt="basket" />
          <span className='count_products'>4</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
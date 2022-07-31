import React from 'react'
import { Link } from 'react-router-dom'
import './BasketPageHeader.css'

const BasketPageHeader = () => {
    return (
        <div className='basketPage_header_box'>
            <Link className='linkLogo' to='/catalog'>
                <img className='basketPage_logo' src='https://github.com/AzureBin/react-test/blob/master/assets/images/logo.png?raw=true' alt="logo" />
            </Link>
        </div>
    )
}

export default BasketPageHeader
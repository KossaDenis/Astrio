import React, { FC } from 'react'
import { IBrand } from '../../../../types/types'
import './BrandsItem.css'

interface brandsItemProps {
    brand: IBrand;
}

const BrandsItem: FC<brandsItemProps> = ({ brand }) => {

    return (
        <div className='brand_box'>
            <ul className='brand_ul'>
                <li className='brand_li'>{brand.title}</li>
            </ul>
        </div>
    )
}

export default BrandsItem
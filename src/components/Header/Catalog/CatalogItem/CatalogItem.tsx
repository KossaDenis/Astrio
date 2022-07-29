import React, { FC } from 'react'
import { IProduct } from '../../../../types/types'
import './CatalogItem.css'

interface CatalogItemProps {
    product: IProduct
}

const CatalogItem: FC<CatalogItemProps> = ({product}) => {
    return (
        <div className="CatalogItem_box">
            <img className='CatalogItem_img' src={product.url} alt="" />
            <div className="block_of_information">
                <p><strong>Title:</strong> {product.title}</p>
                <p><strong>Clothing:</strong> {product.clothing}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Sex:</strong> {product.sex}</p>
                <button className='button_add_basket'>Add to Basket</button>
            </div>
        </div>
    )
}

export default CatalogItem
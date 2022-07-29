import React, { FC } from 'react'
import { IProduct } from '../../../../types/types'
import CatalogItem from '../CatalogItem/CatalogItem'
import './CatalogList.css'

interface CatalogListProps {
    products: IProduct[]
}

const CatalogList: FC<CatalogListProps> = ({products}) => {
  return (
    <div className='CatalogList_box'>
        {products.map(product =>
            <CatalogItem key={product.id} product={product} />
        )}
    </div>
  )
}

export default CatalogList
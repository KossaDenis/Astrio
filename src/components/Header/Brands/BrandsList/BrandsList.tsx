import React, { FC } from 'react'
import { IBrand } from '../../../../types/types'
import BrandsItem from '../BrandsItem/BrandsItem';

interface brandsListProps {
    brands: IBrand[];
}

const BrandsList: FC<brandsListProps> = ({ brands }) => {
    return (
        <div>
            {brands.map(brand =>
                <BrandsItem key={brand.id} brand={brand}/>
            )}
        </div>
    )
}

export default BrandsList
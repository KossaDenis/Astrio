import React from 'react'
import Brands from '../../components/Header/Brands/Brands'
import Catalog from '../../components/Header/Catalog/Catalog'
import Header from '../../components/Header/Header'
import './CatalogPage.css'

const CatalogPage = () => {
    return (
        <div className='CatalogPage'>
            <Header />
            <Brands />
            <Catalog />
        </div>
    )
}

export default CatalogPage
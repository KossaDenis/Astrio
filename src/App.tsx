import React, { useState } from 'react'
import './App.css'
import BasketPage from './pages/CatalogPage/BasketPage/BasketPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'

const App = () => {

  return (
    <div className='AppBox'>
      {/* <CatalogPage /> */}
      <BasketPage />
    </div>
  )
}

export default App  
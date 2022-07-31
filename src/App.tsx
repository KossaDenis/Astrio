import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BasketPage from './pages/CatalogPage/BasketPage/BasketPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'

const App = () => {

  return (
    <BrowserRouter>
      <div className='AppBox'>
        <Routes>
          <Route path={'/catalog'} element={<CatalogPage />} />
          <Route path={'/basket'} element={<BasketPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App  
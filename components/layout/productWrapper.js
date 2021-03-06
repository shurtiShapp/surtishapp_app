import React from 'react'
import Layout from './container'
import Navbar from '../NavbarProduct'

export default function ProductWrapper ({ children, barcode }) {
  return (
    <Layout>
      <Navbar />
      <div className='header-product-register bg-curve'>
        <div className='barcode-section'>
          <i className='fas fa-barcode' />
          <p>{barcode}</p>
        </div>
      </div>
      {children}
    </Layout>
  )
}

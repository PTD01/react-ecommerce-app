import React from 'react'
import {BiLogIn} from 'react-icons/bi'
import {TbUserPlus} from 'react-icons/tb'

function TopBar() {
  return (
    <div className='top-bar container-fluid fixed-top'>
          <div className='mt-3'>
              <p>Free shipping on all orders over $50</p>
          </div>
          <div className='d-flex justify-content-between align-items-center '>
             <a href='#'>ecommerce@info.com</a>
              <a href='#'>Login <span className='text-white fw-bold'> <BiLogIn/> </span></a>
              <a href='#' className='btn btn-danger text-white' > <TbUserPlus/>Register  </a>
          </div>
    </div>
  )
}

export default TopBar
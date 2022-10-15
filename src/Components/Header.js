import React from 'react'
import NavBar from './Navbar'
import TopBar from './Topbar'

function Header({length, cart, incrementQuantity, decrementQuantity}) {
  return (
      <div>
          <TopBar />
          <NavBar  length={length} cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    </div>
  )
}

export default Header;
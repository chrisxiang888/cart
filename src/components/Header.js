import React from 'react'
import {useContext} from 'react'
import {Link} from"react-router-dom"
import './styles.css'
import {Cart} from "../Context"



const Header = () => {
  
  const {cart}=useContext(Cart);

  return (
    <div>
     <span className="header">React Context API for shopping cart </span>
     <ul className='nav'>
        <li>
            <Link to="/">Main Page</Link>
            </li> 
        <li>
            <Link to="/cart">Cart ({cart.length}) </Link>
            </li> 
     </ul>
    </div>
  )
}

export default Header

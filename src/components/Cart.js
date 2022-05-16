import React, { useEffect,useState,useContext } from 'react'
import OneProduct from './OneProduct'
import {Cart} from "../Context"

const CartPage = ({}) => {
  const[total,setTotal]=useState();

  const {cart}=useContext(Cart);

  useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>
        My Cart
      </span>
      <br/>
      <span style={{fontSize:30}}>Total:CAD:${total}</span>
      <div className='productContainer'>
        {cart.map(prod=>(
          <OneProduct prod={prod} key={prod.id}  />
        ))}
      </div>
    </div>
  )
}

export default CartPage

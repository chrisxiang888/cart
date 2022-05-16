import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import OneProduct from './OneProduct';
import "./styles.css";
import { Cart } from '../Context';
faker.seed(100);

const Home = ({}) => {


  console.log(useContext(Cart))

    const productsArray=[...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.food(1234, 2345, true),
     
    }));


  const [products]=useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod)=>(
        <OneProduct prod={prod}  key={prod.id}/>
      ))}
    </div>
  )
}

export default Home

import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SearchForm from "./SearchForm";
import {product} from './product';
import {useState} from 'react';

function Main({ addToCart}) {

  

  return (
    <div>
      <div>
        <Categories/>
        <SearchForm />
      </div>

      <div className="container">
        <div className="row p-4 mx-auto g-4">

          {product.map((product, id) => {
            return (
              <ProductCard {...product} key={id} cartCount={addToCart}  />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Main;

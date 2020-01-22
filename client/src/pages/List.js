import React, { useState, useRef } from "react";
import API from "../utils/API";
import ProductContext from '../utils/ProductContext'
import SearchForm from '../components/SearchForm'
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';

export default function Search() {
  const [productState, setProductState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  function addToCart(value) {
    let clickedProduct = productState.filter(o => o.sku === value);
    console.log(productState);
    console.log(clickedProduct);
    API.createProduct({
      id: clickedProduct[0].sku,
      name: clickedProduct[0].name,
      price: clickedProduct[0].price,
      image: clickedProduct[0].image
    })
  }

  function activateAPI(value) {
    API.apiSearch(value)
      .then(res => {
        let productsList = res.data;
        console.log(res.data);
        let fiveProducts = productsList.slice(0, 12);
        setProductState(fiveProducts.map(o => {
          o.price = o.salePrice;
          return o;
        }));
      });
  }

  function fetchProducts(e) {
    e.preventDefault();
    let modifiedTerm = encodeURI(searchTerm.trim());
    activateAPI(modifiedTerm);
  }

  let showTable = true
  if (productState.length <= 1) {
    showTable = false
  }

  return (
    <ProductContext.Provider value={{ productState, inputRef, addToCart, setSearchTerm, fetchProducts }}>
      <Wrapper>
        <SearchForm />
        {showTable && (
          <Table />
        )}
      </Wrapper>
    </ProductContext.Provider>
  );
}


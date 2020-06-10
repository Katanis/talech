import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Products from './Screens/ProductsList';
import Preview from './Screens/Product';
import ProductCreate from './Screens/ProductCreate';
import ProductEdit from './Screens/ProductEdit';
import Home from './Screens/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="navigationContainer">
        <Link className="navItem" to="/products">
          Products List
        </Link>
        <Link className="navItem" to="/products/create">
          Create Product
        </Link>
      </div>

      <Switch>
        <Route
          key="edit-product"
          path="/products/:id/edit"
          component={ProductEdit}
        ></Route>
        <Route
          key="add-product"
          path="/products/create"
          component={ProductCreate}
        ></Route>
        <Route key="preview" path="/products/:id" component={Preview}></Route>
        <Route key="products" path="/products" component={Products}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

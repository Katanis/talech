import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ProductEdit = (props) => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let productFromLocalStorage = localStorage[id];
    setProduct(JSON.parse(productFromLocalStorage));
  }, [id]);

  const handleName = (event) => {
    setProduct({ ...product, name: event.target.value });
  };
  const handleEan = (event) => {
    setProduct({ ...product, ean: event.target.value });
  };
  const handleType = (event) => {
    setProduct({ ...product, type: event.target.value });
  };
  const handleWeight = (event) => {
    setProduct({ ...product, weight: event.target.value });
  };
  const handleColor = (event) => {
    setProduct({ ...product, color: event.target.value });
  };
  const handleActive = (event) => {
    setProduct({ ...product, active: event.target.value });
  };

  const handlePrice = (event) => {
    setProduct({ ...product, price: event.target.value });
  };

  const handleQuantity = (event) => {
    setProduct({ ...product, quantity: event.target.value });
  };

  const handleSave = (event) => {
    const productInfo = {
      name: product.name,
      ean: product.ean,
      type: product.type,
      weight: product.weight,
      color: product.color,
      quantity: product.quantity,
      price: product.price,
      active: product.active,
    };
    localStorage.setItem(id, JSON.stringify(productInfo));
    alert('Product: ' + product.name + ' edited!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product {product.name} Edit Page</h1>
      <form style={styles.form} onSubmit={handleSave}>
        <label style={styles.label}>
          Name:{' '}
          <input value={product.name} type="text" onChange={handleName}></input>
        </label>
        <label style={styles.label}>
          EAN:{' '}
          <input value={product.ean} type="text" onChange={handleEan}></input>
        </label>
        <label style={styles.label}>
          Type:{' '}
          <input value={product.type} type="text" onChange={handleType}></input>
        </label>
        <label style={styles.label}>
          Weight:{' '}
          <input
            value={product.weight}
            type="text"
            onChange={handleWeight}
          ></input>
        </label>
        <label style={styles.label}>
          Color:{' '}
          <input
            value={product.color}
            type="text"
            onChange={handleColor}
          ></input>
        </label>
        <label style={styles.label}>
          Price:{' '}
          <input
            value={product.price}
            type="number"
            onChange={handlePrice}
          ></input>
        </label>
        <label style={styles.label}>
          Quantity:{' '}
          <input
            value={product.quantity}
            type="number"
            onChange={handleQuantity}
          ></input>
        </label>
        <label style={styles.label}>
          Active:{' '}
          <input
            value={product.active}
            type="checkbox"
            onChange={handleActive}
          ></input>
        </label>

        <input style={styles.submitButton} type="submit" value="SAVE"></input>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '100px',
    border: '3px solid gray',
    width: 'fit-content',
    padding: '20px',
    borderRadius: '10px',
  },
  label: {
    margin: '10px',
  },
  title: {
    color: 'gray',
    fontWeight: '600',
  },
  submitButton: {
    cursor: 'pointer',
  },
};

export default ProductEdit;

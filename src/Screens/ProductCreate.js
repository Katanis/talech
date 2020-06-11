import React, { useState } from 'react';

const ProductCreate = (props) => {
  const [name, setName] = useState('');
  const [ean, setEan] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [active, setActive] = useState(false);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleName(event) {
    setName(event.target.value);
  }
  function handleEan(event) {
    setEan(event.target.value);
  }
  function handleType(event) {
    setType(event.target.value);
  }
  function handleWeight(event) {
    setWeight(event.target.value);
  }
  function handleColor(event) {
    setColor(event.target.value);
  }
  function handleActive(event) {
    setActive(!active);
  }
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  function handleSave(event) {
    let r = Math.random().toString(36).substring(7);
    const productInfo = {
      name: name,
      ean: ean,
      type: type,
      weight: weight,
      color: color,
      price: price,
      quantity: quantity,
      active: active,
    };
    localStorage.setItem(r, JSON.stringify(productInfo));
    alert('Product: ' + name + ' created!');
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Create Page</h1>
      <form style={styles.form} onSubmit={handleSave}>
        <label style={styles.label}>
          Name: <input value={name} type="text" onChange={handleName}></input>
        </label>
        <label style={styles.label}>
          EAN: <input value={ean} type="text" onChange={handleEan}></input>
        </label>
        <label style={styles.label}>
          Type: <input value={type} type="text" onChange={handleType}></input>
        </label>
        <label style={styles.label}>
          Weight:{' '}
          <input value={weight} type="text" onChange={handleWeight}></input>
        </label>
        <label style={styles.label}>
          Color:{' '}
          <input value={color} type="text" onChange={handleColor}></input>
        </label>
        <label style={styles.label}>
          Price:{' '}
          <input value={price} type="number" onChange={handlePrice}></input>
        </label>
        <label style={styles.label}>
          Quantity:{' '}
          <input value={quantity} type="number" onChange={handleQuantity}></input>
        </label>
        <label style={styles.label}>
          Active:{' '}
          <input value={active} type="checkbox" onChange={handleActive}></input>
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

export default ProductCreate;

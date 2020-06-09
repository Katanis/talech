import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPreview = (props) => {
  const [deleted, setDelete] = useState(false);

  function deleteHandler(key) {
    localStorage.removeItem(key);
    setDelete(!deleted);
    alert("Product with id: " + key + " deleted!");
  }
  return <ProductList deleteHandler={deleteHandler}></ProductList>;
};

const ProductList = (props) => {
  return (
    <div style={style.container}>
      <TableHeader></TableHeader>
      {Object.entries(localStorage).map(([key, valueJSON]) => {
        console.log(localStorage.getItem('name'));
        const value = JSON.parse(valueJSON);
        return (
          <div style={style.gridItemsContainer}>
            <p>{value.name}</p>
            <p>{value.ean}</p>
            <p>{value.type}</p>
            <p>{value.weight}</p>
            <p>{value.color}</p>
            <input checked={value.active} type="checkbox"></input>
            <Link to={'/products/' + key}>VIEW</Link>
            <Link to={'/products/' + key + '/edit'}>EDIT</Link>
            <button onClick={() => props.deleteHandler(key)}>DELETE</button>
          </div>
        );
      })}
      <Link to="/products/create">Add new product</Link>
    </div>
  );
};

const TableHeader = (props) => {
  return (
    <div style={style.gridTableHeader}>
      <TableField style={style.field} text="Name"></TableField>
      <TableField style={style.field} text="EAN"></TableField>
      <TableField style={style.field} text="Type"></TableField>
      <TableField style={style.field} text="Weight"></TableField>
      <TableField style={style.field} text="Color"></TableField>
      <TableField style={style.field} text="Active"></TableField>
    </div>
  );
};

const TableField = (props) => {
  return <p>{props.text}</p>;
};

const style = {
  container: { margin: '20px', padding: '10px' },
  tavbleHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    padding: '10px',
    color: 'red',
    fontSize: '18px',
    fontWeight: '500',
  },
  gridTableHeader: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 10%',
    // gridTemplateRows: 'auto auto auto',
  },
  gridItemsContainer: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10%',
  },
  field: {
    margin: '10px',
    padding: '5px',
  },
};

export default ProductsPreview;
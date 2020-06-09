import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPreview = (props) => {
  const [deleted, setDelete] = useState(false);

  const priceHandler = (event) => {};

  function deleteHandler(key) {
    localStorage.removeItem(key);
    setDelete(!deleted);
    alert('Product with id: ' + key + ' deleted!');
  }
  return <ProductList deleteHandler={deleteHandler}></ProductList>;
};

const ProductList = (props) => {
  return (
    <div style={style.container}>
      <TableHeader></TableHeader>
      {Object.entries(localStorage).map(([key, valueJSON]) => {
        const value = JSON.parse(valueJSON);
        return (
          <div
            id={key}
            key={key}
            style={
              value.quantity <= 0 ? style.highlight : style.gridItemsContainer
            }
          >
            <p>{value.name}</p>
            <p>{value.ean}</p>
            <p>{value.type}</p>
            <p>{value.weight}</p>
            <p>{value.color}</p>
            <input value={value.price} />
            <input value={value.quantity} />
            <input checked={value.active} type="checkbox" />
            <Link style={style.viewButton} to={'/products/' + key}>VIEW</Link>
            <Link style={style.editButton} to={'/products/' + key + '/edit'}>EDIT</Link>
            <button style={style.deleteButton} onClick={() => props.deleteHandler(key)}>DELETE</button>
          </div>
        );
      })}
      <Link style={style.addProductButton} to="/products/create">Add new product</Link>
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
      <TableField style={style.field} text="Price"></TableField>
      <TableField style={style.field} text="Quantity"></TableField>
      <TableField style={style.field} text="Active"></TableField>
    </div>
  );
};

const TableField = (props) => {
  return <p style={style.tableHeaderName}>{props.text}</p>;
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
    fontSize: '12px',
    fontWeight: '500',
  },
  gridTableHeader: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 20px',
    alignItems: 'center',
    fontSize: '12px',
  },
  gridItemsContainer: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 40px 60px 60px 60px',
    backgroundColor: '#E3FB75',
    alignItems: 'center',
    borderTop: '1px #F3ECD5',
    borderBottom: '1px #F3ECD5',
  },
  field: {
    margin: '10px',
    padding: '5px',
  },
  highlight: {
    fontWeight: 'bold',
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 40px 60px 60px 60px',
    backgroundColor: '#708510',
    alignItems: 'center',
    borderTop: '1px #F3ECD5',
    borderBottom: '1px #F3ECD5',
  },
  tableHeaderName: {
    color: '#866C1E',
    fontWeight: 'Bold',
  },
  addProductButton: {
    backgroundColor: '#BADC01',
    color: '#F5FADA',
    border: '1px #A5C207',
    borderRadius: '5px',
    padding: '10px',
    textDecoration: 'none',
    position: 'absolute'
  },
  viewButton: {
    backgroundColor: '#1196FE',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#FADD21',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#E1381A',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    pointer: 'cursors',
  }


};

export default ProductsPreview;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductsPreview = (props) => {
  const [deleted, setDelete] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    let locProducts = localStorage;
    // localStorage.clear()
    setProducts(locProducts);
  }, [deleted]);

  function setNewQuantity(event, key) {
    setProducts({ ...products, quantity: event.target.value });
  }

  function setNewPrice(event, key) {
    // let temp = products;
    // let stringToParse = JSON.parse(temp[key]);
    // stringToParse.price = event.target.value;
    // temp[key] = stringToParse;
    // // temp[key].price = event.target.value;

    // // alert(JSON.stringify(temp[key]));
    // setProducts(temp);
    alert(JSON.stringify(products));
  }

  function saveInlineEdits() {
    alert('save clicked');
    Object.entries(products).map(([key, value]) => {
      const val = JSON.parse(value);
      alert(JSON.stringify(val));
      return localStorage.setItem(key, JSON.stringify(val));
    });
  }

  function deleteHandler(key) {
    localStorage.removeItem(key);
    setDelete(!deleted);
    alert('Product with id: ' + key + ' deleted!');
  }
  return (
    <ProductList
      saveInlineEdits={saveInlineEdits}
      setNewQuantity={setNewQuantity}
      setNewPrice={setNewPrice}
      products={products}
      setProducts={setProducts}
      deleteHandler={deleteHandler}
    ></ProductList>
  );
};

const ProductList = (props) => {
  return (
    <table>
      <TableHeader></TableHeader>
      {Object.entries(props.products).map(([key, valueJSON]) => {
        const value = JSON.parse(valueJSON);
        return (
          <tr
            id={key}
            key={key}
            style={
              value.quantity <= 0 ? style.highlight : style.gridItemsContainer
            }
          >
            <td>{value.name}</td>
            <td>{value.ean}</td>
            <td>{value.type}</td>
            <td>{value.weight}</td>
            <td>{value.color}</td>
            <td>
              <input
                defaultValue={value.price}
                onChange={(e) => props.setNewPrice(e, key)}
              />
            </td>
            <td>
              <input
                defaultValue={value.quantity}
                onChange={(e) => props.setNewQuantity(e, key)}
              />
            </td>
            <td>
              <input
                defaultChecked={value.active}
                onChange={value.active}
                type="checkbox"
              />
            </td>
            <td>
              <Link style={style.viewButton} to={'/products/' + key}>
                VIEW
              </Link>
            </td>
            <td>
              <Link style={style.editButton} to={'/products/' + key + '/edit'}>
                EDIT
              </Link>
            </td>
            <td>
              <button
                style={style.deleteButton}
                onClick={() => props.deleteHandler(key)}
              >
                DELETE
              </button>
            </td>
          </tr>
        );
      })}
      <Link style={style.addProductButton} to="/products/create">
        Add new product
      </Link>
      <button
        style={{ position: 'absolute', marginTop: '50px' }}
        onClick={props.saveInlineEdits}
      >
        Save Inline Edits
      </button>
    </table>
  );
};

const TableHeader = (props) => {
  return (
    <tr style={style.gridTableHeader}>
      <TableField style={style.field} text="Name"></TableField>
      <TableField style={style.field} text="EAN"></TableField>
      <TableField style={style.field} text="Type"></TableField>
      <TableField style={style.field} text="Weight"></TableField>
      <TableField style={style.field} text="Color"></TableField>
      <TableField style={style.field} text="Price"></TableField>
      <TableField style={style.field} text="Quantity"></TableField>
      <TableField style={style.field} text="Active"></TableField>
      <TableField style={style.field}></TableField>
      <TableField style={style.field}></TableField>
      <TableField style={style.field}></TableField>
    </tr>
  );
};

const TableField = (props) => {
  return <th style={style.tableHeaderName}>{props.text}</th>;
};

const style = {
  // container: {
  //   // margin: '20px',
  //   padding: '10px',
  //   border: '0px',
  //   borderSpacing: 'unset',
  //   width: '100%',
  // },
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
    // display: 'grid',
    // gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 20px',
    alignItems: 'center',
    fontSize: '12px',
  },
  gridItemsContainer: {
    // display: 'grid',
    // gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 40px 60px 60px 60px',
    backgroundColor: '#fbcffc',
    alignItems: 'center',
    // borderTop: '1px #F3ECD5',
    // borderBottom: '1px #F3ECD5',
  },
  field: {
    margin: '10px',
    padding: '5px',
  },
  highlight: {
    fontWeight: 'bold',
    // display: 'grid',
    // gridTemplateColumns: '10% 10% 10% 10% 10% 5% 5% 40px 60px 60px 60px',
    backgroundColor: '#be79df',
    alignItems: 'center',
    // borderTop: '1px #F3ECD5',
    // borderBottom: '1px #F3ECD5',
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
    position: 'absolute',
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
  },
};

export default ProductsPreview;

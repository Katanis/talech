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
    event.preventDefault();
    // console.log(event.target.value);
    // const value = event.target.value;
    // setProducts((prevState) => {
    //   prevState[key].price = value;
    //   return { ...prevState };
    // });
  }

  function saveInlineEdits() {
    alert('save clicked');
    Object.entries(products).map(([key, value]) => {
      const val = JSON.parse(value);
      localStorage.setItem(key, JSON.stringify(val));
    });
  }

  function deleteHandler(key) {
    localStorage.removeItem(key);
    setDelete(!deleted);
    alert('Product with id: ' + key + ' deleted!');
  }
  return (
    <ProductList
      style={{ overflow: 'hidden' }}
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
    <div className="ScrollableContent">
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
                <Link
                  style={style.editButton}
                  to={'/products/' + key + '/edit'}
                >
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
        <button
          style={{ position: 'absolute', marginTop: '50px' }}
          onClick={props.saveInlineEdits}
        >
          Save Inline Edits
        </button>
      </table>
    </div>
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
    alignItems: 'center',
    fontSize: '12px',
  },
  gridItemsContainer: {
    backgroundColor: '#fbcffc',
    alignItems: 'center',
  },
  field: {
    margin: '10px',
    padding: '5px',
  },
  highlight: {
    fontWeight: 'bold',
    backgroundColor: '#be79df',
    alignItems: 'center',
  },
  tableHeaderName: {
    color: '#866C1E',
    fontWeight: 'Bold',
  },
  viewButton: {
    backgroundColor: '#ccf0e1',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '5px',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#f8dc88',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '5px',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f76a8c',
    color: 'black',
    border: '1px #033354',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    pointer: 'cursors',
    padding: '5px',
    fontWeight: 'bold',
  },
};

export default ProductsPreview;

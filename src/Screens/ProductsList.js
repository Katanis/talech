import React from 'react';

const data = {
  prod1: {
    name: 'table',
    EAN: 125,
    type: 'furniture',
    weight: 20,
    color: 'brown',
    active: true,
  },
  prod2: {
    name: 'lamp',
    EAN: 125,
    type: 'furniture',
    weight: 20,
    color: 'brown',
    active: true,
  },
  prod3: {
    name: 'TW',
    EAN: 125,
    type: 'furniture',
    weight: 20,
    color: 'brown',
    active: true,
  },
};

const ProductsPreview = (props) => {
  return <ProductList></ProductList>;
};

const ProductList = (props) => {
  return (
    <div style={style.container}>
      <TableHeader></TableHeader>
      <div>
        {Object.entries(data).map(([key, value]) => {
          return <p>{value.name}</p>;
        })}
      </div>
    </div>
  );
};

const TableHeader = (props) => {
  return (
    <div style={style.tavbleHeaderContainer}>
      <TableField style={style.field} text="Name"></TableField>
      <TableField style={style.field} text="EAN"></TableField>
      <TableField style={style.field} text="Type"></TableField>
      <TableField style={style.field} text="Weight"></TableField>
      <TableField style={style.field} text="Color"></TableField>
      <TableField style={style.field} text="Active"></TableField>
      <TableField style={style.field} text="ACTION"></TableField>
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
  field: {
    margin: '10px',
    padding: '5px',
  },
};

export default ProductsPreview;

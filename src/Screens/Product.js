import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ProductView = (props) => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let productFromLocalStorage = localStorage[id];
    setProduct(JSON.parse(productFromLocalStorage));
  }, [id]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product {product.name} View Page</h1>
      <Table product={product} />
    </div>
  );
};

const Table = (props) => {
  return (
    <table style={styles.table}>
      <TableTitles></TableTitles>
      <TableValues product={props.product}></TableValues>
    </table>
  );
};

const TableValues = (props) => {
  return (
    <tr>
      {Object.values(props.product).map((val) => {
        return <td style={styles.tableItem}>{val}</td>;
      })}
    </tr>
  );
};

const TableTitles = (props) => {
  return (
    <tr>
      <th style={styles.tableItem}>Name</th>
      <th style={styles.tableItem}>EAN</th>
      <th style={styles.tableItem}>Type</th>
      <th style={styles.tableItem}>Weight</th>
      <th style={styles.tableItem}>Color</th>
      <th style={styles.tableItem}>Price</th>
      <th style={styles.tableItem}>Quantity</th>
      <th style={styles.tableItem}>Active</th>
    </tr>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'gray',
    fontWeight: '600',
  },
  table: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: '20px',
    margin: '10px',
  },
  tableItem: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: '10px',
  }
};

export default ProductView;

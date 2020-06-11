import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Tabs from '../Components/Tabs/Tabs';
import Chart from '../Components/Chart/Chart';

const ProductView = (props) => {
  const [product, setProduct] = useState({});
  const [pricesHistory, setPriceHistory] = useState([]);
  const [quantityHistory, setQuantityHistory] = useState([]);
  const { id } = useParams();

  const priceOptions = {
    title: {
      text: 'Price History',
    },
    series: [
      {
        data: pricesHistory,
      },
    ],
  };

  const quantityOptions = {
    title: {
      text: 'Quantity History',
    },
    series: [
      {
        data: quantityHistory,
      },
    ],
  };

  var data = [
    {
      id: '1',
      tabTitle: 'Product details',
      tabContent: 'Some details about product',
    },
    {
      id: '2',
      tabTitle: 'Price history',
      tabContent: <Chart options={priceOptions} />,
    },
    {
      id: '3',
      tabTitle: 'Quantity History',
      tabContent: <Chart options={quantityOptions} />,
    },
  ];

  useEffect(() => {
    let productFromLocalStorage = localStorage.getItem(id);
    let tempProd = JSON.parse(productFromLocalStorage);
    setProduct(tempProd);

    let tempPriceArray = [];
    let tempQuantityArray = [];
    if (tempProd.priceHistory) {
      Object.values(tempProd.priceHistory).map((value) => {
        tempPriceArray.push([value?.[1],parseInt(value?.[0])]);
      });
      setPriceHistory(tempPriceArray);
    }
    if (tempProd.quantityHistory) {
      Object.values(tempProd.quantityHistory).map((value) => {
        tempQuantityArray.push([value?.[1],parseInt(value?.[0])]);
      });
      setQuantityHistory(tempQuantityArray);
    }
  }, [id]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product {product.name} View Page</h1>
      {console.log(product.priceHistory?.[0]?.[0])}
      <Table product={product} />
      <Tabs data={data} />
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
      {Object.values(props.product).map((val, index) => {
        if (index < 8) {
          return <td style={styles.tableItem}>{val}</td>;
        }
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
  },
};

export default ProductView;

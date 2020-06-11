import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
  return(
    <div style={style.container}>
      <div style={style.insideComponent}>
        <h1>You are at home page</h1>
        <Link style={style.linkStyle} to="/products">Go to products page</Link>
      </div>
    </div>
  )
}

const style={
  container: {
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '100px',
  },
  insideComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    padding: '10px',
    backgroundColor: '#E1E6CA',
    border: '5px solid #656D40',
    borderRadius: '20px'
  },
  linkStyle:{
    fontSize: '18px',
    textDecoration: 'none',
    color: '#8CA90A',
    fontWeight: '500',
    alignSelf: 'center',
  }
}

export default Home;
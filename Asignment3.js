import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { useGlobalContext } from './GlobalContext';
import Nine from './nine';

function Asignment3() {
  const [data, setData] = useState([]);
  const {  addToCart } = useGlobalContext();

  useEffect(() => {
    const fetchMyData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      if (res.ok) {
        const resData = await res.json();
        setData(resData);
      } else {
        console.error('Failed to fetch data');
      }
    };
    fetchMyData();
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Product List</h1>
      <div style={styles.grid}>
        {data.map((dataItem, index) => (
          <div key={index} style={styles.card}>
            <img src={dataItem.image} alt={dataItem.title} style={styles.image} />
            <h3>{dataItem.title}</h3>
            <p>${dataItem.price}</p> {/* Fixed syntax for displaying price */}
            <button style={styles.button} onClick={() => addToCart(dataItem)}>Add to cart</button>
            <Nine />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px', // Adjusted padding
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    width: '300px',
    height: 'auto', // Adjusted height to auto for responsive design
  },
  image: {
    maxWidth: '100%',
    height: '200px', // Fixed height for images
    objectFit: 'cover', // Ensures images cover the space without distortion
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Asignment3;

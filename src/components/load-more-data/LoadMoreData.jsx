import React, { useEffect, useState } from "react";
import "./styles.css";
import data from "../accordian/data";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await response.json();

        if (data && data.products && data.products.length) {
          setProducts((prevState) => [...prevState, ...data.products]);
          setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabledButton(true);
    }
  }, [products]);

  // if (loading) {
  //   return <div>Loading Data! Please Wait...</div>;
  // }

  console.log(products);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.length &&
          products.map((item, index) => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div>{loading && <p>Loading Data! Please Wait...</p>}</div>
      <div className="button-container ">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
      </div>
      {disabledButton && <p>No More Data to display</p>}
    </div>
  );
};

export default LoadMoreData;

import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

import Card from "../components/Card";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      console.log(productData);

      if (productData) {
        setLoading(false);
        setData(productData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-14 justify-center items-center m-10">
      {loading ? (
        <Spinner />
      ) : data && data.length ? (
        data.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;

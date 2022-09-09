import React, { useEffect, useState } from "react";
import Home from "../Screens/Home/Home";

const FetchData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDatas(data.products));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {datas.map((dataa) => (
            <Home dataa={dataa} key={dataa.id}></Home>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchData;

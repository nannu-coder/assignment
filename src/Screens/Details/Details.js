import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const currentProduct = products.filter((product) => product.id == id);

  const addToCart = () => {
    const cartInfo = {
      name: currentProduct[0]?.title,
      price: currentProduct[0]?.price,
    };

    localStorage.setItem("product", JSON.stringify(cartInfo));

    console.log("added localStorage");
  };

  return (
    <div className="products mt-5">
      <div className="container">
        <Link to="/">
          <Button className="mb-3">Back to Home</Button>
        </Link>
        <div className="row">
          <div className="col-lg-6">
            <img src={currentProduct[0]?.images[0]} alt="" />
          </div>
          <div className="col-lg-6">
            <h1>{currentProduct[0]?.title}</h1>
            <p>{currentProduct[0]?.description}</p>
            <h4>Brand: {currentProduct[0]?.brand}</h4>
            <h6>Category: {currentProduct[0]?.category}</h6>
            <h5>Price: ${currentProduct[0]?.price}</h5>
            <h5>Ratings: {currentProduct[0]?.rating}</h5>
            <h5>Stock: {currentProduct[0]?.stock}</h5>
          </div>
          <div className="cart-btn text-center">
            <Button
              style={{ display: "inline-block" }}
              className="ms-3"
              variant="primary"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

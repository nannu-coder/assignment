import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  console.log(props);
  const { title, images, description, id } = props.dataa;
  return (
    <div className="col-lg-4">
      <div className="card-group">
        <Card className="mt-3" style={{ height: "25rem" }}>
          <Card.Img className="product-image" variant="top" src={images[0]} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/details/${id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Home;

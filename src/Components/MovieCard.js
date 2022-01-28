import React from "react";
import {Card} from "react-bootstrap"
function MovieCard({ x }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={x.posterUrl} />
      <Card.Body>
        <Card.Title>{x.title} </Card.Title>
        <Card.Text>{x.description}</Card.Text>
        <Card.Text>{x.rate}</Card.Text>
        <Card.Text>{x.trailer}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

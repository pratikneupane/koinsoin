import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import items from "./data/items.js";
import { Container, Row, Col } from "react-bootstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2, itemsToScroll: 2 },
  { width: 700, itemsToShow: 3 },
  { width: 1050, itemsToShow: 4 },
];
const Online = () => {
  return (
    <Container className="pb-4">
      <Row className="carouselContainer">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Col key={item.id} lg={11} className="m-4">
              <Item className="author" item={item}></Item>
            </Col>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Online;

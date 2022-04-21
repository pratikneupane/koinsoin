import { Row, Col, Image } from "react-bootstrap";
// import styles from "/styles/Dashboard.module.css";

const History = (props) => {
  return (
    <Row>
      <Col sm={2}>
        <Image
          src={props.img}
          height="50px"
          width="50px"
          alt="avatar"
          style={{ borderRadius: "50%" }}
        />
      </Col>
      <Col sm={8}>
        <p style={{fontSize: "15px"}}>
          {`${props.user} has donated $${props.amt} in the campaign ${props.campaing}`}
        </p>
      </Col>
    </Row>
  );
};

export default History;

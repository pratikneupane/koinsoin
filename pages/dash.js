import { Col, Container, Row } from "react-bootstrap";
import styles from "/styles/Dashboard.module.css";

const dash = () => {
  return <Col xl={7} className={`${styles.column__basic}`}></Col>;
};

dash.layout = "LD";
export default dash;

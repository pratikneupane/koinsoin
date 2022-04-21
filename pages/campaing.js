import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "/styles/Dashboard.module.css";

const campaing = () => {
  return (
    <Col xl={7} className={`${styles.column__basic}`}>
      <Row className={styles.searchbar}>
        <label htmlFor="search">
          <FontAwesomeIcon icon={["fas", "search"]} />
        </label>
        <Col md={11}>
          <input
            type="text"
            id="search"
            className={styles.searchbar__input}
            placeholder="Search"
          />
        </Col>
      </Row>
      <Row>
        <Row className={`${styles.dashheader} m-2 p-4`}>
          <Col>
            <Row>
              <h1>Campaings</h1>
            </Row>
            <Row>Let &apos;s Start a Campaing</Row>
          </Col>
          <Col className={`${styles.createButton}`}>
            <Button className={`${styles.btn}`}>+ Create Campaign</Button>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

campaing.layout = "LD";

export default campaing;

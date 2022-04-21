import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "/styles/Contact.module.css";

const contact = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <h1 className="px-3"> Contact Us</h1>
        </Row>
        <Row>
          <Col lg={7}>
            <form action="POST" className={styles.form}>
              <div className="d-flex justify-content-between">
                <div className={styles.halfinput}>
                  <input
                    className={styles.input}
                    type="name"
                    placeholder="Name"
                  />
                </div>
                <div className={styles.halfinput}>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className={styles.inputlong}>
                <input
                  className={`${styles.input} ${styles.inputlong}`}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className={styles.inputlong}>
                <textarea
                  className={`${styles.input} ${styles.inputlong} ${styles.inputtextarea}`}
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <Button className={`${styles.btn}`}>Send</Button>
              </div>
            </form>
          </Col>
          <Col
            lg={5}
            className="d-flex justicy-content-center align-items-start"
            style={{ flexDirection: "column", paddingTop: "100px" }}
          >
            <h1>Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </p>
            <strong>12598134</strong>
            <strong>mail@mail.com</strong>
            <strong>Address, 24, 15 London</strong>
          </Col>
        </Row>
      </Container>
    </>
  );
};
contact.layout = "LM";

export default contact;

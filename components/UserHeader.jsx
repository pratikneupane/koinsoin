import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "/styles/User.module.css";

const UserHeader = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col lg={8}>
            <Row>
              <h3 className={styles.heading}>Donate to Ghanta Gaming</h3>
            </Row>
            <Row>
              <Image
                src="/img/user.png"
                height="330"
                width="815"
                alt="Streamers' Cover"
              />
            </Row>
            <Row className="mt-3">
              <Col md={2} className="p-0">
                <Image
                  src="/img/dk.png"
                  height="65"
                  width="65"
                  alt="Streamers' Profile"
                />
              </Col>
              <Col md={6}>
                <Row>
                  <h4>Dinesh Tiwari</h4>
                </Row>
                <Row>
                  <p className={styles.subtitle}>Youtuber</p>
                </Row>
              </Col>
              <Col md={4} className={styles.nopadding}>
                <button className={styles.button}>Nrs 100,524 raised</button>
              </Col>
            </Row>
            <Row>
              <h4 className="mt-4">Lorem ipsum dolor sit amet.</h4>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, quia ex? Deleniti a qui consequuntur quam deserunt eius
                maxime amet?
              </p>
            </Row>
          </Col>
          <Col lg={4} className="p-3">
            <Row>
              <h3 className={styles.headingDonate}>Donate</h3>
            </Row>
            <Row>
              <form action="POST" className={styles.form}>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Amount"
                    name="amount"
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Esewa"
                    name="esewa"
                  />
                </div>

                <Button className={`${styles.btn}`}>Donate Now</Button>
                <div className="d-flex justify-content-center align-items-center">
                  <Button className={`${styles.btnmini}`}>
                    +10
                  </Button>
                  <Button className={`${styles.btnmini}`}>
                    +100
                  </Button>
                  <Button className={`${styles.btnmini}`}>
                    +1000
                  </Button>
                </div>
              </form>
            </Row>
            <Row>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserHeader;

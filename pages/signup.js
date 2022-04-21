import React from "react";
import styles from "/styles/Login.module.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Link from 'next/link'

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src="/img/login.png" fluid="true" alt="Login SVG" />
          </Col>
          <Col className="d-flex justify-content-center">
            <form action="POST" className={styles.form}>
              <h1 className="text-center">Signup</h1>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" name="remember" id="remember" />
                <label className={styles.checklabel} htmlFor="remember">
                  Agree with our Terms and Conditions.
                </label>
              </div>
              <Button className={`${styles.btn}`}>Signup</Button>
              <div className={styles.signup}>
                Already have an account? <Link href="/login">Log In</Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Login.layout = "LL";

export default Login;

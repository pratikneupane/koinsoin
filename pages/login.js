import React from "react";
import styles from "/styles/Login.module.css";
import Link from "next/link";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

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
              <h1 className="text-center">Login</h1>
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
              <div className={styles.checkbox}>
                <input type="checkbox" name="remember" id="remember" />
                <label className={styles.checklabel} htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <Button className={`${styles.btn}`}>Login</Button>
              <div className={styles.signup}>
                Don&apos;t have an account?{" "}
                <Link href="/signup" passHref>
                  SIgn Up
                </Link>
              </div>
              <div className={styles.forgot}>
                <a href="/forgot">Forgot Password?</a>
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

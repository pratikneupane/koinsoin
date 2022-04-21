import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <div className="col-sm-8 col-md-6 col-lg-6 col-xl-4 col-12 order-4 order-md-1 order-lg-4 order-xl-1">
            <div className={styles.footer__logo}>
              <div href="#home" className="text-transform-uppercase">
                <h1 style={{ color: "#fff" }}>
                  <span
                    style={{
                      color: "rgb(131, 100, 226)",
                      border: "2px solid rgb(131, 100, 226)",
                      padding: "0 5px",
                      margin: "0px 10px 0px 0px",
                    }}
                  >
                    KS
                  </span>
                  koinsoin
                </h1>
              </div>
            </div>
            <p className={styles.footer__tagline}>
              Koinsoin Lorem ipsum dolor sit. <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              tempore nostrum architecto nemo ipsam sint! Perspiciatis dicta
              voluptate laborum consectetur? Iste consequuntur voluptate
              facilis. Libero repellendus dolore explicabo nam odio.
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">
            <h6 className={styles.footer__title}>NTF Marketplace</h6>
            <div className={styles.footer__nav}>
              <a href="explore.html">Explore</a>
              <a href="activity.html">Activity</a>
              <a href="authors.html">Authors</a>
              <a href="privacy.html">Privacy Policy</a>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">
            <h6 className={styles.footer__title}>NTF Marketplace</h6>
            <div className={styles.footer__nav}>
              <a href="explore.html">Explore</a>
              <a href="activity.html">Activity</a>
              <a href="authors.html">Authors</a>
              <a href="privacy.html">Privacy Policy</a>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">
            <h6 className={styles.footer__title}>NTF Marketplace</h6>
            <div className={styles.footer__nav}>
              <a href="explore.html">Explore</a>
              <a href="activity.html">Activity</a>
              <a href="authors.html">Authors</a>
              <a href="privacy.html">Privacy Policy</a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

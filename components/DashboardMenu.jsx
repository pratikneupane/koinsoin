import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "/styles/Dashboard.module.css";

const DashboardMenu = () => {
  return (
    <Col xl={2} className={`${styles.column__basic} ${styles.menu__column}`}>
      <Row
        className={`${styles.left__menu__wrapper} ${styles.logo__wrapper} d-flex justify-content-center align-items-center py-3`}
      >
        <Link href="/" passHref className={styles.logo__link}>
          <h1 style={{ cursor: "pointer" }} className={styles.logo}>
            <span
              style={{
                color: "rgb(131, 100, 226)",
                border: "2px solid rgb(131, 100, 226)",
                padding: "0 5px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              KS
            </span>
            koinsoin
          </h1>
        </Link>
      </Row>
      <Row
        className={`${styles.left__menu__wrapper} d-flex justify-content-start align-items-start flex-column`}
      >
        <Row
          className={`${styles.menu__section__links} d-flex justify-content-center align-items-start flex-column text-align-left px-5`}
        >
          <Row className={`${styles.menu__section__header}`}>General</Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["fas", "house"]} /> Dashboard
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["fas", "chart-line"]} />
            Campaing
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["fas", "chart-simple"]} />
            Analytics
          </Row>
        </Row>
      </Row>
      <Row
        className={`${styles.left__menu__wrapper} d-flex justify-content-start align-items-start flex-column`}
      >
        <Row
          className={`${styles.menu__section__links} d-flex justify-content-center align-items-start flex-column text-align-left px-5`}
        >
          <Row className={`${styles.menu__section__header}`}>Tools</Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["far", "file"]} />
            Form
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["far", "calendar"]} />
            Calendar
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["far", "credit-card"]} />
            Billing
          </Row>
        </Row>
      </Row>
      <Row
        className={`${styles.left__menu__wrapper} d-flex justify-content-start align-items-start flex-column`}
      >
        <Row
          className={`${styles.menu__section__links} d-flex justify-content-center align-items-start flex-column text-align-left px-5`}
        >
          <Row className={`${styles.menu__section__header}`}>
            Settings &amp; Account
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["far", "user"]} />
            Account
          </Row>
          <Row className={styles.menu__section__link}>
            <FontAwesomeIcon icon={["fas", "gear"]} />
            Settings
          </Row>
        </Row>
      </Row>
    </Col>
  );
};

export default DashboardMenu;

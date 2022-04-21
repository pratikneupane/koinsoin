import { Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import History from "./History";
import history from "./data/history";
import styles from "/styles/Dashboard.module.css";

const Profile = () => {
  return (
    <Col xl={3} className={`${styles.column__basic} ${styles.right__menu}`}>
      <Row
        className={`${styles.right__menu__wrapper} d-flex justify-content-start align-items-start flex-column py-4 px-4`}
      >
        <Row
          className={`${styles.account__section__header} d-flex justify-content-between`}
        >
          <p> My Account</p>
          <FontAwesomeIcon
            className={styles.threepoints}
            icon={["fas", "ellipsis"]}
          />
        </Row>
        <Row
          className={`${styles.account__section__links} d-flex justify-content-between`}
        >
          <Col sm={2}>
            <Image
              src="https://dgs.com.np/assets/img/team/phantom.jpg"
              height="50px"
              width="50px"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col sm={10} style={{ paddingLeft: "2.5rem" }}>
            <Row className={styles.username}>Phantom Phreak</Row>
            <Row className={styles.email}>dangerousagar@gmail.com</Row>
          </Col>
        </Row>
      </Row>
      <Row
        className={`${styles.right__menu__wrapper} d-flex justify-content-start align-items-start flex-column py-4 px-4`}
      >
        <Row
          className={`${styles.account__section__header} d-flex justify-content-between align-items-start`}
        >
          <p> Total Campaigns</p>
        </Row>
        <Row
          className={`${styles.account__section__tally} d-flex justify-content-between align-items-start`}
        >
          <p>40</p>
        </Row>
        <Row
          className={styles.account__section__campaing}
          style={{ color: "red" }}
        >
          <FontAwesomeIcon icon={["fas", "arrow-trend-down"]} />
          12% in the last week
        </Row>
      </Row>
      <Row
        className={`${styles.right__menu__wrapper} d-flex justify-content-start align-items-start flex-column py-4  px-4`}
      >
        <Row
          className={`${styles.account__section__header} d-flex justify-content-between`}
        >
          <p> Total Donation</p>
        </Row>
        <Row
          className={`${styles.account__section__tally} d-flex justify-content-between`}
        >
          <p>$200</p>
        </Row>
        <Row
          className={styles.account__section__campaing}
          style={{ color: "green" }}
        >
          <FontAwesomeIcon icon={["fas", "arrow-trend-up"]} />
          20% in the last week
        </Row>
      </Row>
      <Row
        className={`${styles.right__menu__wrapper} d-flex justify-content-start align-items-start flex-column py-4 px-4`}
      >
        <Row
          className={`${styles.account__section__header} d-flex justify-content-between`}
        >
          <p> Donation History</p>
        </Row>
        <Row className={styles.account__section__history}>
          {history.map((hist) => {
            return (
              <History
                key={hist.id}
                img={hist.img}
                user={hist.user}
                campaing={hist.campaing}
                amt={hist.amt}
              />
            );
          })}
        </Row>
      </Row>
    </Col>
  );
};

export default Profile;

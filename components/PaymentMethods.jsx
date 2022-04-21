import { Container, Row, Col } from "react-bootstrap";
import { paymentMethod } from "./data/PaymentMethod";
import Image from "next/image";
import styles from "/styles/PaymentMethods.module.css";

const PaymentMethods = () => {
  return (
    <div className={styles.paymentMethods}>
      <Container>
        <h1 className="text-center mb-4" style={{ fontSize: "3rem" }}>
          Why Being A Koinsoin User <br /> Benifits You?
        </h1>
      </Container>
      {/* <Container className="d-flex">
        {paymentMethod.map((method) => {
          return (
            <Col lg={4} key={method.id} className={styles.payments}>
              <Row>
                <Image src={method.img} alt="" height="170px" width="400px" />
              </Row>
            </Col>
          );
        })}
      </Container> */}
      <Container>
        <Row>
          <Col>
            <Image
              src="/img/money.png"
              height="500px"
              width="1024px"
              alt="Why koinsoin?"
              style={{ borderRadius: "24px" }}
            />
          </Col>
          <Col className="mt-5">
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dignissimos ullam voluptate deserunt repellat numquam, delectus
              sunt beatae totam voluptatum, eligendi qui eos provident odit
              harum, sed sit accusamus aliquid voluptatibus! Maiores deserunt
              beatae hic, assumenda ut veritatis sit reprehenderit asperiores id
              dignissimos inventore eius harum alias tempore magnam saepe?
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dignissimos ullam voluptate deserunt repellat numquam, delectus
              sunt beatae totam voluptatum, eligendi qui eos provident odit
              harum, sed sit accusamus aliquid voluptatibus! Maiores deserunt
              beatae hic, assumenda ut veritatis sit reprehenderit asperiores id
              dignissimos inventore eius harum alias tempore magnam saepe?
            </p>
          </Col>
          <Col>
            <Image
              src="/img/money.png"
              height="500px"
              width="1024px"
              alt="Why koinsoin?"
              style={{ borderRadius: "24px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentMethods;

import Particles from "react-tsparticles";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Hero.module.css";
import Image from "next/image"
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className={styles.particles}>
      <Navbar />
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: false,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      <Container className="pt-5">
        <Row className="align-items-center pt-5">
          <Col md={6}>
            <h5
              style={{
                textTransform: "uppercase",
                color: "rgb(131, 100, 226)",
                fontWeight: "bold",
                fontSize: "24px",
                paddingBottom: "10px",
              }}
            >
              Koinsoin
            </h5>
            <h1 className="text-white" style={{ fontSize: "50px" }}>
              Donate to your Favourite Streamer.
            </h1>
            <p className="lead" style={{ color: "rgb(162, 162, 162)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              doloribus quasi inventore delectus sed est, mollitia odit.
              Officia, nobis pariatur!
            </p>
            <Button className={`${styles.btn} buttons outline-none b-0 px-4`}>Explore</Button>
          </Col>
          <Col md={6}>
            <Image
              src="/img/herobg.png"
              height="500px"
              width="500px"
              alt="heroimg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

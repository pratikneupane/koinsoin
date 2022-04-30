import Particles from "react-tsparticles";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={styles.particles}>
      <Navbar />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
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
            <Button className={`${styles.btn} buttons outline-none b-0 px-4`}>
              Explore
            </Button>
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

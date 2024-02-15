import styles from "./styles.module.scss";

import logo from "../../Img/logo.png";
import craftopia from "../../Img/craftopia.jpg";
import palworld from "../../Img/palworld.png";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import { i18n } from "../../Translate/i18n";

export default function AboutPage() {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <h1>{i18n.t("about.aboutTitle")}</h1>
        </Row>
        <Row>
          <Col lg={5}>
            <Row className={styles.row}>
              <Card body bg="dark" text="white" className={styles.textCard}>
                <Card.Text className={styles.aboutText}>
                {i18n.t("about.aboutUs")}
                </Card.Text>
              </Card>
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="image-fade-in-container">
              <Image src={logo} className={styles.imgRight} fluid />
            </div>
          </Col>
        </Row>
        <Row className={styles.row}>
          <h1>{i18n.t("about.gamesTitle")}</h1>
        </Row>
        <Row style={{ marginTop: "5em" }}>
          <Col lg={6}>
            <div className="image-fade-in-container">
              <Image src={craftopia} className={styles.imgLeft} fluid />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <Row className={styles.row}>
              <Card body bg="dark" text="white" className={styles.textCard}>
                <Card.Title>Craftopia</Card.Title>
                <Card.Text className={styles.aboutText}>
                {i18n.t("about.craftopia")}
                </Card.Text>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "5em" }}>
          <Col lg={5}>
            <Row className={styles.row}>
              <Card body bg="dark" text="white" className={styles.textCard}>
                <Card.Title>PalWorld</Card.Title>
                <Card.Text className={styles.aboutText}>
                {i18n.t("about.palworld")}
                </Card.Text>
              </Card>
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="image-fade-in-container">
              <Image src={palworld} className={styles.imgLeft} fluid />
            </div>
          </Col>
        </Row>
        <Row>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
            }}
          >
            {i18n.t("about.whereToFind")}
          </h1>
        </Row>
        <Row>
          <CardGroup>
            <Card bg="dark" text="white" className={styles.cardFooter}>
              <Card.Header>WebSite</Card.Header>
              <Card.Body>
                <Card.Text>
                {i18n.t("about.webSite")}
                  <br></br>
                  <Link>https://www.pocketpair.jp/palworld</Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" className={styles.cardFooter}>
              <Card.Header>CrunchBase</Card.Header>
              <Card.Body>
                <Card.Text>
                {i18n.t("about.crunchBase")}
                  <br></br>
                  <Link>
                    https://www.crunchbase.com/organization/pocketpair
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="white" className={styles.cardFooter}>
              <Card.Header>Reddit</Card.Header>
              <Card.Body>
                <Card.Text>
                {i18n.t("about.reddit")}
                  <br></br>
                  <Link>https://www.reddit.com/r/Palworld/</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </>
  );
}

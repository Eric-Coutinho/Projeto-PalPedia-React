import styles from "./styles.module.scss";

import logo from "../../Img/logo.png";
import craftopia from "../../Img/craftopia.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function AboutPage() {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row>
          <Col lg={5}>
            <Row className={styles.row}>
              <h1>Sobre Nós</h1>
            </Row>
            <Row className={styles.row}>
              <Card body bg="dark" text="white" className={styles.textCard}>
                <Card.Text className={styles.aboutText}>
                  A Pocket Pair Inc. é uma empresa japonesa de desenvolvimento
                  de jogos com a visão de criar experiências de jogo envolventes
                  e cativantes, com sede em Tóquio. Fundada em 2015 por Takuro
                  Mizobe, tem se destacado na indústria de jogos com suas
                  criações únicas e inovadoras. A Pocket Pair Inc. continua a
                  surpreender os jogadores com suas criações e a expandir os
                  limites do que é possível nos jogos. Se você é fã de aventuras
                  e mundos ricos, você deve acompanhar nossos jogos!
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
        <Row style={{ marginTop: "5em" }}>
          <Col lg={6}>
            <div className="image-fade-in-container">
              <Image src={logo} className={styles.imgLeft} fluid />
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}>
            <Row className={styles.row}>
              <h1>Nossos Jogos</h1>
            </Row>
            <Row className={styles.row}>
              <Card body bg="dark" text="white" className={styles.textCard}>
                <Card.Title>Craftopia</Card.Title>
                <Card.Text className={styles.aboutText}>
                  Craftopia é um jogo que oferece uma experiência
                  verdadeiramente diversificada em um mundo aberto. Com um foco
                  em Exploração, Sobrevivência, Construção, Criação e Combate,
                  para criar um jogo dinâmico com características únicas.
                  Habilidades estão presentes para ajudar na progessão do
                  jogador à medida que avança, além de veículos e montarias, que
                  fazem a movimentação pelo mundo mais ágil e divertida.
                </Card.Text>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

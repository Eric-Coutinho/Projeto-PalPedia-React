import { useContext } from "react";
import { ModalContext } from "../../Context/Modal";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function InfoPal() {
  const pal = "";

  return (
    <>
      <Card data-bs-theme="dark">
        <Card.Header>Nome do Pal{pal.name}</Card.Header>
        <Card.Body>
          <div className={styles.cardDiv}>
            <Card className={styles.cardBody}>
              <Image src="https://palpedia.azrocdn.com/chickenpal.png" />
            </Card>
          </div>
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row className={styles.row}>
              <Col className={styles.column}>
                Descrição do Pal: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti exercitationem esse aspernatur eaque
                impedit ad at consectetur hic dolores, modi fuga officiis quidem
                veniam, cupiditate recusandae iusto, quibusdam excepturi neque!
                {pal.description}
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col
                className={styles.column}
                style={{ alignItems: "flex-start" }}
              >
                <Col className={styles.column}>
                  <div className={styles.elements}>
                    <Row className={styles.column}>
                      Elementos {pal.elements}
                    </Row>
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <Row key={idx}>
                        <Image src="https://palpedia.azrocdn.com/chickenpal.png" />
                      </Row>
                    ))}
                  </div>
                </Col>
                <Col className={styles.column}>
                  <div className={styles.elements}>
                    <Row className={styles.column}>Drops {pal.drops}</Row>
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <Row key={idx}>
                        <Image
                          src="https://palpedia.azrocdn.com/chickenpal.png"
                          className={styles.dropImage}
                        />
                      </Row>
                    ))}
                  </div>
                </Col>
              </Col>
              <Col aria-colspan={2} className={styles.column}>
                <Row>
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    Stats {pal.stats}
                  </Row>
                  <Row>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item> Vida: 0{pal.hp} </ListGroup.Item>
                        <ListGroup.Item> Ataque: 0{pal.attack} </ListGroup.Item>
                        <ListGroup.Item> Defesa: 0{pal.rarity} </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          Velocidade de <br></br> Trabalho: 0{pal.rarity}{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          Raridade: 0{pal.rarity}{" "}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </>
  );
}

export default InfoPal;

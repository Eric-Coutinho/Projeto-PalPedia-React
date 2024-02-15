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

function PalModal() {
  const { show, setShow, pal } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    console.log("closed");
  };

  const goToPalPage = () => {
    setShow(false);
    navigate("/pal");
  };
  console.log(pal);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        data-bs-theme="dark"
        className={styles.Modal}
        style={{ padding: "0" }}
      >
        <Modal.Header closeButton>
          <Col>
            <Modal.Title>{pal.Name}</Modal.Title>
          </Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            {pal.Element?.map((element, idx) => (
              <Card
                style={{
                  height: "5em",
                  width: "5em",
                  marginInline: "0.5em",
                  backgroundColor: "transparent",
                }}
                key={idx}
              >
                <Card.Img src={`https://www.palpedia.net/_next/image?url=%2Fassets%2Fui%2F${element.toString().toLowerCase()}.png&w=64&q=75`} />
              </Card>
            ))}
          </Col>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.cardDiv}>
            <Card className={styles.cardBody}>
              <Image src={pal.Thumbnail} />
            </Card>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row className={styles.row}>
              <Col className={styles.column}>
                {pal.Description?.Text}
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col
                className={styles.column}
                style={{ alignItems: "flex-start" }}
              >
                <Col className={styles.column}>
                  <div className={styles.elements}>
                    <Row className={styles.column}>Drops</Row>
                    {pal.Drops?.BattleDrops.map((drop, idx) => (
                      <Row key={idx}>
                        <Image
                          src={drop.Item.Image}
                          className={styles.dropImage}
                        />
                      </Row>
                    ))}
                  </div>
                  {pal.Drops?.FarmDrops.length > 0 && (
                    <>
                    <div className={styles.elements}></div>
                    <div className={styles.elements} style={{justifyContent: "flex-start"}}>
                      <Row className={styles.column}>Farms</Row>
                      {pal.Drops?.FarmDrops.map((drop, idx) => (
                        <Row key={idx}>
                          <Image
                            src={drop.Image}
                            className={styles.dropImage}
                          />
                        </Row>
                      ))}
                    </div>
                    </>
                  )}
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
                        <ListGroup.Item> Vida: {pal.Stats.Hp} </ListGroup.Item>
                        <ListGroup.Item> Ataque: {pal.Stats.Attack} </ListGroup.Item>
                        <ListGroup.Item> Defesa: {pal.Stats.Defense} </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          Quantidade de <br></br> comida: {pal.Stats.Food}{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          Raridade: {pal.Stats.Rarity}{" "}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Row>
                </Row>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Row className={styles.column}>
                <Button
                  variant="primary"
                  onClick={goToPalPage}
                  style={{ marginTop: "1em" }}
                >
                  Ver Mais
                </Button>
              </Row>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PalModal;

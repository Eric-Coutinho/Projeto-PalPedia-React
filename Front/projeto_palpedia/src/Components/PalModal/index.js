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

import { i18n } from "../../Translate/i18n";

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
            <Modal.Title>Nome do Pal{pal.name}</Modal.Title>
          </Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <Card
                style={{
                  height: "5em",
                  width: "5em",
                  marginInline: "0.5em",
                  backgroundColor: "transparent",
                }}
              >
                <Card.Img src="https://palpedia.azrocdn.com/chickenpal.png" />
              </Card>
            ))}
          </Col>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.cardDiv}>
            <Card className={styles.cardBody}>
              <Image src="https://palpedia.azrocdn.com/chickenpal.png" />
            </Card>
          </div>
        </Modal.Body>
        <Modal.Footer>
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
                    <Row className={styles.column}>{i18n.t("palInfo.drops")}</Row>
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
                  {i18n.t("palInfo.stats")}
                  </Row>
                  <Row>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item> {i18n.t("palInfo.health")}: 0{pal.hp} </ListGroup.Item>
                        <ListGroup.Item> {i18n.t("palInfo.attack")}: 0{pal.attack} </ListGroup.Item>
                        <ListGroup.Item> {i18n.t("palInfo.defense")}: 0{pal.defense} </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          {i18n.t("palInfo.speed")} <br></br> {i18n.t("palInfo.work")}: 0{pal.rarity}{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          {i18n.t("palInfo.rarity")}: 0{pal.rarity}{" "}
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
                  {i18n.t("palInfo.seeMoreButton")}
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

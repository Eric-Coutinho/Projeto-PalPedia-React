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
    navigate("/pal/" + pal.Id);
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
                    <Row className={styles.column}>{i18n.t("palInfo.drops")}</Row>
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
                      <div className={styles.elements} style={{ justifyContent: "flex-start" }}>
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
                    {i18n.t("palInfo.stats")}
                  </Row>
                  <Row>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item> {i18n.t("palInfo.health")}: {pal.Stats?.Hp} </ListGroup.Item>
                        <ListGroup.Item> {i18n.t("palInfo.attack")}: {pal.Stats?.Attack} </ListGroup.Item>
                        <ListGroup.Item> {i18n.t("palInfo.defense")}: {pal.Stats?.Defense} </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          {i18n.t("palInfo.food")} <br></br> {i18n.t("palInfo.amount")}: {pal.Stats?.Food}{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {" "}
                          {i18n.t("palInfo.rarity")}: {pal.Stats?.Rarity}{" "}
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

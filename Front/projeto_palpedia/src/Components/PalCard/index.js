import React, { useContext } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import styles from "./styles.module.scss"

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PalModal from "../PalModal";
import { ModalContext } from "../../Context/Modal";

export default function PalCard() {
  const { setShow, setPal } = useContext(ModalContext);

  const handleClick = (idx) => {
    setPal(idx);
    setShow(true);
  }

  return (
    <>
      <Row xs={1} md={2} lg={5} className="g-4">
        {Array.from({ length: 120 }).map((_, idx) => (
          <Col key={idx}>
            <CardPal onClick={() => handleClick(idx)} />
          </Col>
        ))}
      </Row>
      <PalModal />
    </>
  );
}

function CardPal({ onClick }) {
  const { pal } = useContext(ModalContext);
  return (
    <Card className={styles.cardPal} style={{ backgroundColor: 'gray' }} onClick={onClick}>
      <Card.Img variant="top" src="https://palpedia.azrocdn.com/chickenpal.png" />
      <Card.ImgOverlay className={styles.textCard}>
        <div className={styles.gradient}></div>
        <Card.Title style={{ fontSize: "2em" }}>Nome{pal.name} #1{pal.id}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
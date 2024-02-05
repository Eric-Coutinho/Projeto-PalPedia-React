import React from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import styles from "./styles.module.scss"

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PalModal from "../PalModal";

export default function PalCard() {

  function handleModal() {
    return(
      <PalModal />
    );
  }
  
  return (
    <>
      <Row xs={1} md={2} lg={5} className="g-4">
      {Array.from({ length: 120 }).map((_, idx) => (
        <Col key={idx}>
          <Card className={styles.cardPal} style={{ backgroundColor: 'gray' }} onClick={handleModal}>
              <Card.Img variant="top" src="https://palpedia.azrocdn.com/chickenpal.png" />
              <Card.ImgOverlay className={styles.textCard}>
            <div className={styles.gradient}></div>
              <Card.Title style={{ fontSize: "2em" }}>Nome Pal</Card.Title>
              </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

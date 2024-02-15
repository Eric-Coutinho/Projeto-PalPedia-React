import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import styles from "./styles.module.scss"

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PalModal from "../PalModal";
import axios from "axios";
import { ModalContext } from "../../Context/Modal";

export default function PalCard() {
  const { setShow, setPal } = useContext(ModalContext);
  const [Pals, setPals] = useState([]);

  useEffect(() => {
    async function requestPals() {
      try {
        const result = await axios.get("http://localhost:8080/api/pal");
        setPals(result.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    requestPals();
  }, []);

  const handleClick = (pal) => {
    setPal(pal);
    setShow(true);
  }

  return (
    <>
      <Row xs={1} md={2} lg={5} className="g-4">
        {Pals.map((pal, idx) => (
          pal.Form !== "Alpha" && (
            <Col key={idx}>
              <CardPal pal={pal} onClick={() => handleClick(pal)} />
            </Col>
          )
        ))}
      </Row>

      <PalModal />
    </>
  );
}

function CardPal({ pal, onClick }) {
  return (
    <Card className={styles.cardPal} style={{ backgroundColor: 'gray' }} onClick={onClick}>
      <Card.Img variant="top" className={styles.cardImage} src={pal.Thumbnail} />
      <Card.ImgOverlay className={styles.textCard}>
        <div className={styles.gradient}></div>
        <Card.Title style={{ fontSize: "2em" }}>#{pal.Id}<br />{pal.Name}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
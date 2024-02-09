import React, { useContext } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import styles from "./styles.module.scss"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import * as Icon from 'react-bootstrap-icons';
import Button from "react-bootstrap/esm/Button";

import PalModal from "../PalModal";
import { ModalContext } from "../../Context/Modal";

async function handleClick(e) {
  e.preventDefault();
  console.log("Oiiii :3");
}

export default function UserCardComponent() {
  const { setShow, setPal } = useContext(ModalContext);

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 120 }).map((_, idx) => (
          <Col key={idx}>
            <CardPal />
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
    <Card className={styles.cardPal} style={{ backgroundColor: "gray", padding: "2em", flexDirection: "row" }} onClick={onClick}>
        <Card.Title style={{ fontSize: "2em" }}>Nome do Usuário</Card.Title>
        <Button type="submit" variant="danger" onClick={handleClick}> <Icon.Trash /> </Button>
    </Card>
  );
}
import Formulario from "../../Components/FormComponent";
import AlertComponent from "../../Components/AlertComponent";

// import styles from './styles.module.scss';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { i18n } from "../../Translate/i18n";

export default function RegisterPage() {
  return (
    <>
      <Container style={{ marginTop: '10em' }}>
        <Row>
          <Col></Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>{i18n.t("register.registerTitle")}</Card.Title>
              <AlertComponent />
              <Formulario />
            </Card.Body>
          </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

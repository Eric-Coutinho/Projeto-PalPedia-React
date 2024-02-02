import LoginForm from "../../Components/LoginForm";
import AlertComponent from "../../Components/AlertComponent";

// import styles from './styles.module.scss';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function LoginPage() {
  return (
    <>
      <Container style={{ marginTop: "10em" }}>
        <Row>
          <Col></Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <AlertComponent />
                <Card.Title>Fazer login</Card.Title>
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

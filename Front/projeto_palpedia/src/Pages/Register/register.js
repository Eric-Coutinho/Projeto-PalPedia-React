import Form from "../../Components/FormComponent/form";

// import styles from './styles.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function RegisterPage() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Form />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

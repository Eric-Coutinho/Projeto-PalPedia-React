import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

import { i18n } from "../../Translate/i18n";

export default function NotFoundPage() {
  return (
    <>
    <Container fluid style={{ marginTop: "3em", width: "70vw" }}>
      <Card>
        <Card.Img variant="top" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/palworld-pals-working-on-an-assembly-line.jpg"/>
        <Card.Body>
          <Card.Title>
          {i18n.t("notFound.title")}
          </Card.Title>
          <Card.Text>
          {i18n.t("notFound.text")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

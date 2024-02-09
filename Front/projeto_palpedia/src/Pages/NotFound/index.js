import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

export default function NotFoundPage() {
  return (
    <>
    <Container fluid style={{ marginTop: "3em", width: "70vw" }}>
      <Card>
        <Card.Img variant="top" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/palworld-pals-working-on-an-assembly-line.jpg"/>
        <Card.Body>
          <Card.Title>
            Página não Encontrada
          </Card.Title>
          <Card.Text>
            A página que busca não existe, está em construção ou não tem acesso a ela.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}

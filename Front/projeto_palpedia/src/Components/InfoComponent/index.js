import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

import styles from "./styles.module.scss";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function InfoPal() {
  const pal = "";

  return (
    <>
      <Row className={styles.row} id="Linha nome">
        <Col xs={12} lg={2} className={styles.column}>
          <div className={styles.palName}>Nome do Pal</div>
        </Col>
        <Col xs={0} className={styles.column}></Col>
        <Col xs={0} className={styles.column}></Col>
      </Row>
      <Row className={styles.row} id="Linha Info">
        <Col md={12} xxl={4} className={styles.column} id="Col Card Imagem">
          <Card
            className="bg-transparent text-white"
            style={{ marginBottom: "1em", height: "fit-content" }}
          >
            <Card.Img
              src="https://palpedia.azrocdn.com/chickenpal.png"
              alt="Card image"
            />
          </Card>
        </Col>
        <Col md={12} xxl={2} className={styles.column} style={{ display: "block" }} id="Coluna Descrição e Elementos">
          <Row style={{ paddingInline: "1em" }}>
            <Card className="bg-dark text-white">
              <Card.Header>Descrição</Card.Header>
              <Card.Body>
                <Card.Text>
                  Descrição do Pal: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Deleniti exercitationem esse aspernatur
                  eaque impedit ad at consectetur hic dolores, modi fuga
                  officiis quidem veniam, cupiditate recusandae iusto, quibusdam
                  excepturi neque!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row style={{ paddingInline: "1em", marginTop: "2em" }}>
            <Card className="bg-dark text-white">
              <Card.Header>Elementos</Card.Header>
              <Card.Body className={styles.cardBody}>
                {Array.from({ length: 9 }).map((_, idx) => (
                  <Card.Img
                    src="https://palpedia.azrocdn.com/chickenpal.png"
                    style={{
                      width: "3.5em",
                      height: "3.5em",
                      marginInline: "0.5em",
                    }}
                  />
                ))}
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col md={12} xxl={6} className={styles.column} id="Stats Graph">
          <StatusGraph />
        </Col>
      </Row>
      <Row className={styles.row} style={{ paddingInline: "5em" }} id="Linha Skills">
        <SkillsCard />
      </Row>
    </>
  );
}

function StatusGraph() {
  const stats = ["Vida","Ataque","Defesa","Velocidade de Trabalho","Raridade"]

  const labels = stats;
  const data = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    indexAxis: "y"
  };

  return <Bar data={data} options={options} />
}

function SkillsCard() {
  return(
    <Card className="bg-dark text-white" style={{ paddingBottom: "1em" }}>
      <Card.Header>Skills</Card.Header>
      <ListGroup >
        <ListGroup.Item className="bg-dark text-white" variant="dark">Cras justo odio</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default InfoPal;

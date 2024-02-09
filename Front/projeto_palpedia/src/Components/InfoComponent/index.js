import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./styles.module.scss";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Container from "react-bootstrap/esm/Container";

function InfoPal() {
  const pal = "";

  return (
    <>
      <Row className={styles.row} id="Linha nome" style={{ alignItems: "center" }}>
        <Col xs={12} lg={2} className={styles.column} id="Coluna Elementos">
          <div className={styles.palName}>Nome do Pal</div>
        </Col>
        <Col xs={12} lg={2} className={styles.columnElements}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <Card style={{ height:"5em", width:"5em", marginInline: "1em", backgroundColor: "transparent" }}>
              <Card.Img src="https://palpedia.azrocdn.com/chickenpal.png" />
            </Card>
          ))}
        </Col>
        <Col xs={0} className={styles.column}></Col>
      </Row>
      <Row
        className={styles.row}
        id="Linha Info"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Col md={12} xxl={5} className={styles.column} id="Col Card Imagem">
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
        <Col
          md={0}
          xxl={0}
          className={styles.column}
          style={{ display: "block" }}
          id="Coluna Espaçamento"
        ></Col>
        <Col md={12} xxl={6} className={styles.column} id="Stats Graph">
          <StatusGraph />
        </Col>
      </Row>
      <Row
        className={styles.row}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        id="Info Row"
      >
        <Col
          md={12}
          xxl={4}
          className={styles.column}
          id="Description Column"
          style={{ marginBlock: "1em" }}
        >
          <Card className="bg-dark text-white">
            <Card.Header>Descrição</Card.Header>
            <Card.Body>
              <Card.Text>
                Descrição do Pal: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti exercitationem esse aspernatur eaque
                impedit ad at consectetur hic dolores, modi fuga officiis quidem
                veniam, cupiditate recusandae iusto, quibusdam excepturi neque!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={12}
          xxl={4}
          className={styles.column}
          id="Drops Column"
          style={{ marginBlock: "1em" }}
        >
          <Card className="bg-dark text-white" style={{ width: "100%" }}>
            <Card.Header>Drops</Card.Header>
            <Card.Body className={styles.cardBody}>
              {Array.from({ length: 5 }).map((_, idx) => (
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
        </Col>
      </Row>
      <Row
        className={styles.row}
        style={{ paddingInline: "5em" }}
        id="Linha Skills"
      >
        <Col className={styles.column} id="Skills Card">
          <Container fluid>
            <SkillsCard />
          </Container>
        </Col>
      </Row>
    </>
  );
}

function StatusGraph() {
  const stats = [
    "Vida",
    "Ataque",
    "Defesa",
    "Velocidade de Trabalho",
    "Raridade",
  ];

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
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    indexAxis: "y",
  };

  return <Bar data={data} options={options} />;
}

function SkillsCard() {
  return (
    <Card className="bg-dark text-white" style={{ paddingBottom: "1em" }}>
      <Card.Header style={{ fontSize: "1.5em" }}>Skills</Card.Header>
      <ListGroup className="bg-dark text-white border-white">
        {Array.from({ length: 5 }).map((_, idx) => (
          <ListGroup.Item
            className="bg-dark text-white border-black"
            variant="dark"
          >
            <Card className="bg-dark text-white border-white">
              <Card.Header className="bg-dark text-white border-white">
                Skill de Parceiro
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  As vezes bota um ovo quando está na MonsterFarm
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default InfoPal;

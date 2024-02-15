import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./styles.module.scss";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import axios from "axios";

import { i18n } from "../../Translate/i18n";
import { useParams } from "react-router-dom";

function InfoPal() {
  const { id } = useParams();
  const [Pal, setPal] = useState([]);

  useEffect(() => {
    async function requestPals() {
      try {
        const result = await axios.get("http://localhost:8080/api/pal/" + id);
        setPal(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    requestPals();
  }, []);

  return (
    <>
      <Row className={styles.row} id="Linha nome" style={{ alignItems: "center" }}>
        <div className={styles.palName}><p style={{ opacity: "0.5" }}>#{Pal.Id}</p>{Pal.Name}</div>
        {Pal.Element?.map((element, idx) => (
          <Card style={{ height: "5em", width: "5em", marginInline: "1em", backgroundColor: "transparent" }}>
            <Card.Img src={`https://www.palpedia.net/_next/image?url=%2Fassets%2Fui%2F${element.toString().toLowerCase()}.png&w=64&q=75`} />
          </Card>
        ))}
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
              src={Pal.Thumbnail}
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
          <StatusGraph Stats={Pal.Stats} />
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
            <Card.Header>{i18n.t("palInfo.description")}</Card.Header>
            <Card.Body>
              <Card.Text>
                {Pal.Description?.Text}
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
            <Card.Header>{i18n.t("palInfo.drops")}</Card.Header>
            <Card.Body className={styles.cardBody}>
              {Pal.Drops?.BattleDrops.map((drop, idx) => (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Card.Img
                    src={drop.Item?.Image}
                    style={{
                      width: "3.5em",
                      height: "3.5em",
                      marginInline: "0.5em",
                    }}
                  />
                  <Card.Text>{drop.Percent}%</Card.Text>
                </div>
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
            <SkillsCard Pal={Pal} />
          </Container>
        </Col>
      </Row>
    </>
  );
}

function StatusGraph({ Stats }) {
  const stats = [
    i18n.t("palInfo.health"),
    i18n.t("palInfo.attack"),
    i18n.t("palInfo.defense"),
    (i18n.t("palInfo.food") + " " + i18n.t("palInfo.amount")),
    i18n.t("palInfo.rarity")
  ];

  const labels = stats;
  const data = {
    labels: labels,
    datasets: [
      {
        data: [Stats?.Hp, Stats?.Attack, Stats?.Defense, Stats?.Food, Stats?.Rarity],
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

function SkillsCard({ Pal }) {
  return (
    <Card className="bg-dark text-white" style={{ paddingBottom: "1em" }}>
      <Card.Header style={{ fontSize: "1.5em" }}>{i18n.t("palInfo.skills")}</Card.Header>
      <ListGroup className="bg-dark text-white border-white">
        {Pal.PartnerSkill && (
          <ListGroup.Item
            className="bg-dark text-white border-black"
            variant="dark"
          >
            <Card className="bg-dark text-white border-white">
              <Card.Header className="bg-dark text-white border-white">
                {i18n.t("palInfo.partnerSkills")} - {Pal.PartnerSkill.Name}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {Pal.PartnerSkill.Description.Text}
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )}
        {Pal.PassiveSkills?.length > 0 && (
          <ListGroup.Item
            className="bg-dark text-white border-black"
            variant="dark"
          >
            <Card className="bg-dark text-white border-white">
              <Card.Header className="bg-dark text-white border-white">
                {i18n.t("palInfo.activeSkills")}
              </Card.Header>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {Pal.PassiveSkills?.map((skill, idx) => (
                    <ListGroup className="bg-dark text-white border-white">
                      <Card className="bg-dark text-white border-white">
                        <Card.Header className="bg-dark text-white border-white">
                          {skill.Name}
                          <Card.Img style={{width: "auto", scale: "0.5"}} src={`https://www.palpedia.net/assets/ui/passive_${skill.Passive.Type.toString().toLowerCase()}_${skill.Passive.Level}.png`} />
                        </Card.Header>
                          {skill.Skills?.map((stats, idx) => (
                            <Card.Text>
                              {stats.Title}
                            </Card.Text>
                          ))}
                      </Card>
                    </ListGroup>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )}
        {Pal.ActiveSkills?.length > 0 && (
          <ListGroup.Item
            className="bg-dark text-white border-black"
            variant="dark"
          >
            <Card className="bg-dark text-white border-white">
              <Card.Header className="bg-dark text-white border-white">
                {i18n.t("palInfo.activeSkills")}
              </Card.Header>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {Pal.ActiveSkills?.map((skill, idx) => (
                    <ListGroup className="bg-dark text-white border-white">
                      <Card className="bg-dark text-white border-white">
                        <Card.Header className="bg-dark text-white border-white">
                          Lv. {skill.Level} - {skill.Skill.Name}
                        </Card.Header>
                        <Card.Text>
                          {skill.Skill.Description.Text}
                        </Card.Text>
                      </Card>
                    </ListGroup>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
}

export default InfoPal;

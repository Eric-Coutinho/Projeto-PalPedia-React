import GameMap from "../../Components/GameMapComponent";
import PalCard from "../../Components/PalCard";
import styles from "./styles.module.scss"

import Container from "react-bootstrap/Container";

export default function HomePage() {
  return (
    <>
      <Container fluid className={styles.cardContainer}>
        <PalCard />
      </Container>
    </>
  );
}

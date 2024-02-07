import InfoPal from "../../Components/InfoComponent";
import PalCard from "../../Components/PalCard";
import styles from "./styles.module.scss"

import Container from "react-bootstrap/Container";

export default function InfoPage() {
  return (
    <>
      <Container fluid className={styles.cardContainer}>
        <InfoPal />
      </Container>
    </>
  );
}

import styles from "./styles.module.scss"

import PalCard from "../../Components/PalCard";
import UserCardComponent from "../../Components/UserCardComponent";
import Container from "react-bootstrap/Container";

export default function UserPage() {
  return (
    <>
      <Container fluid className={styles.cardContainer}>
        <UserCardComponent />
      </Container>
    </>
  );
}

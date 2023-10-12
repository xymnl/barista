import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../components/Button";
import Container from "../components/Container";

export default function Home() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>What is a good coffee</h1>
          <p className={styles.description}>
            좋은 원두와 다양한 추출방법, 원하는 바리스타 과정까지 한번에 즐기고
            싶다면,
            <br />
            beans dream에서 해결하세요!
            <br />
            지금 함게 시작해보실래요?
          </p>
          <div>
            <Link to="contact">
              <Button>지금 시작하기</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

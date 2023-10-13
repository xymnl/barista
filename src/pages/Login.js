import Container from "../components/Container";
import styles from "./Login.module.css";
import img from "../assets/footerIcon.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Container>
        <div className={styles.container}>
          <form>
            <h2>로그인</h2>
            <div className={styles.input}>
              <img src={img} alt="login" className={styles.img} />
              <div className={styles.loginForm}>
                <div>
                  <input type="text" placeholder="아이디" />
                  <input type="password" placeholder="비밀번호" />
                </div>
              </div>
            </div>
            <div className={styles.buttonBox}>
              <button className={styles.disabled}>
                <Button>로그인</Button>
              </button>
              <Link to="../join">
                <Button>회원가입</Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

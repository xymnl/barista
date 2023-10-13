import Container from "../components/Container";
import styles from "./Join.module.css";
import img from "../assets/footerIcon.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <>
      <Container>
        <div className={styles.container}>
          <form>
            <h2>회원가입</h2>
            <div className={styles.input}>
              <img src={img} alt="login" className={styles.img} />
              <div className={styles.loginForm}>
                <table className={styles.joinForm}>
                  <tr>
                    <th>
                      <span>이름</span> <input type="text" placeholder="이름" />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <span>아이디</span>
                      <input type="text" placeholder="아이디" />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <span>비밀번호</span>
                      <input type="password" placeholder="비밀번호" />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <span>비밀번호 확인</span>
                      <input type="password" placeholder="비밀번호 재입력 " />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <span>주소</span>
                      <textarea type="password" placeholder="주소 " />
                    </th>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.buttonBox}>
              <button className={styles.disabled}>
                <Button>회원가입</Button>
              </button>
              <Link to="../login">
                <Button>로그인</Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

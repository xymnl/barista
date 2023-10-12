import { useState } from "react";
import styles from "./Contact.module.css";
import { getCourses } from "../api/api";
import searchBarStyles from "./SearchBar.module.css";
import Container from "../components/Container";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Contact() {
  const [keyword, setKeyword] = useState("");
  const courses = getCourses();

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <h1 className={styles.title}>contact</h1>
          <p className={styles.description}>
            원하는 바리스타 과정에 함께하세요.
          </p>
          <form className={searchBarStyles.form} onSubmit={handleSubmit}>
            <input
              name="keyword"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="검색으로 과정 찾기"
            ></input>
            <button type="submit">검색</button>
          </form>
          <p className={styles.count}>총 {courses.length}개 코스</p>
          <div className={styles.courseList}>
            <ul>
              {courses.map((e) => {
                return (
                  <li key={e.id}>
                    <div className={styles.content}>
                      <Card>
                        <div className={styles.cardSummary}>
                          <p>
                            <span className={styles.title}>{e.title}</span>
                          </p>
                          <p>교육기간 {e.eduPeriod}</p>
                          <p>교육시간 {e.eduTime}</p>
                          <p>수강료 {e.price}</p>
                          <p>교육장소 {e.place}</p>
                          <p>교사명 {e.teach}</p>
                          <p>모집인원 {e.recruit}</p>
                          <p>훈련일(시간) {e.training}</p>
                          <Link to={`${e.slug}`}>
                            <Button>상세 보기</Button>
                          </Link>
                        </div>
                      </Card>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

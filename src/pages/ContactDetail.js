import { useParams } from "react-router-dom";
import { getCourseBySlug } from "../api/api";
import Button from "../components/Button";
import Container from "../components/Container";
import styles from "./ContactDetail.module.css";

export default function ContactDetail() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  const detail = course.details[0].detail;

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <h1>{course.title}</h1>
          <Button variant="round">+ 코스 담기</Button>
        </Container>
        <Container className={styles.topics}>
          <h3 className={styles.title}>과정 소개</h3>
          <p className={styles.summary}>{detail.process}</p>
          <h3 className={styles.title}>지원 자격</h3>
          <p className={styles.summary}>{detail.application}</p>
          <h3 className={styles.title}>총훈련비 / 자비부담금</h3>
          <p className={styles.summary}>{detail.totalprice}</p>
          <h3 className={styles.title}>자비부담금 안내</h3>
          <p className={styles.summary}>{detail.chargeinfo}</p>
          <h3 className={styles.title}>교육 내용</h3>
          <p className={styles.summary}>{detail.content}</p>
          <h3 className={styles.title}>관련 자격증</h3>
          <p className={styles.summary}>{detail.qualifi}</p>
          <h3 className={styles.title}>신청방법 및 제출서류</h3>
          <p className={styles.summary}>{detail.howto}</p>
          <h3 className={styles.title}>기타</h3>
          <p className={styles.summary}>{detail.etc}</p>
        </Container>
      </div>
    </>
  );
}

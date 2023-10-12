import styles from "./Footer.module.css";
import footerLogo from "../assets/footerIcon.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>BeansDream 소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>(주)빈스드림</li>
          <li>대표 | 오선영 </li>
          <li>개인정보보호책임자 | 오선영 </li>
          <li>대표 번호 | 010-8841-3187 </li>
          <li>사업자번호 | ***-**-****</li>
          <li>통신판매업 | 제****-서울**-****호 </li>
          <li>주소 | 경기 용인시 강남동로 128 빈스드림 </li>
        </ul>
        <div className={styles.icons}>
          <img src={footerLogo} alt="codethat" />
          <div className={styles.sns}>
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

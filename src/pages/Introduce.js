import Content from "../components/Content";
import styles from "./Introduce.module.css";
import img from "../assets/footerIcon.png";

export default function Introduce() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>Introduce</h1>
          <p className={styles.description}>
            당신이 사랑하는 커피에 대해 알아보셨나요? <br /> 커피의 모든 것에
            대해 알아보실 수 있습니다. <br />
            커피 한 잔을 즐기면서, 커피 여정, 가공, 지속 가능성 그리고 라이프
            스타일에 관한 이야기를 확인해보세요.
          </p>
        </div>
      </div>

      <h3 className={styles.subtitle}>지속 가능성</h3>

      <div className={styles.contents}>
        <Content>
          <div className={styles.box}>
            <img src={img} alt="지속 가능성" />
            <h4>커피 지속 가능성</h4>
            <p>
              미래에도 커피를 즐길 수 있도록 지속 가능한 커피를 만들기 위해
              노력하는 농업 경제학자와 농부들을 만나보세요.
            </p>
            <button>더보기</button>
          </div>
        </Content>

        <Content>
          <div className={styles.box}>
            <img src={img} alt="Practices" />
            <h4>C.A.F.E. Practices</h4>
            <p>
              스타벅스의 윤리적 구매의 기본은 C.A.F.E (Coffee and Farmer Equity)
              Practice입니다.
            </p>
            <button>더보기</button>
          </div>
        </Content>
      </div>

      <h3 className={styles.subtitle}>beansdream 소개</h3>
      <Content>
        <div className={styles.box}>
          <img src={img} alt="빈스드림 소개" />
          <h4>beans dream에 관하여</h4>
          <p>
            BeansDream이 특별한 이유, 사람 간의 관계 커피 품질에 대한 약속, 열린
            분위기의 매장과 집에서 즐길 수 있는 맛있는 커피에 대해서 알아보세요.
          </p>
          <button>더보기</button>
        </div>
      </Content>
    </>
  );
}

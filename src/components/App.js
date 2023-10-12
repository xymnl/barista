import Nav from "./Nav";
import styles from "./App.module.css";
import Footer from "./Footer";

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;

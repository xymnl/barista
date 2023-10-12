import styles from "./Button.module.css";
export default function Button({ ...props }) {
  return <div className={styles.button} {...props} />;
}

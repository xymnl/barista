import styles from "./Button.module.css";
export default function Button({ className, ...props }) {
  return <div className={`${styles.button} ${className}`} {...props} />;
}

import styles from "./UserMenu.module.css";
import img from "../assets/footerIcon.png";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutSide = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutSide);
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={img} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>
            <Link to="join">회원가입</Link>
          </li>
          <li>
            <Link to="login">로그인</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

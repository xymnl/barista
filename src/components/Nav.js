import styles from "./Nav.module.css";
import logoImg from "../assets/tbllogo.png";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="beans dream" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="introduce" style={getLinkStyle}>
              introduce
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" style={getLinkStyle}>
              contact
            </NavLink>
          </li>
          <UserMenu />
        </ul>
      </Container>
    </div>
  );
}

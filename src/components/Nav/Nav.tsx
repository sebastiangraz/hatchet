import { Link } from "@tanstack/react-router";
import { Logo } from "~/components/Logo/Logo";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <menu className={styles.menu}>
          <Link to="/">Index</Link>
          <Link to="/about">About</Link>
          <Link to="/customers">Customers</Link>
        </menu>
      </div>
    </nav>
  );
};

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
          <Link to="/">Home</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/pricing">Pricing</Link>
        </menu>
      </div>
    </nav>
  );
};

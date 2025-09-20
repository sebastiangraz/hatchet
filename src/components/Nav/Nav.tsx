import { Link } from "@tanstack/react-router";
import { Logo } from "~/components/Logo/Logo";
import { Promobar } from "~/components/Promobar/Promobar";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <>
      <Promobar />
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <menu className={styles.menu}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/customers">Customers</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
          </menu>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link to={to} className={styles.navItem}>
      {children}
    </Link>
  );
};

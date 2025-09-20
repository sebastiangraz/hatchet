import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Logo } from "~/components/Logo/Logo";
import { Promobar } from "~/components/Promobar/Promobar";
import { useStickyObserver } from "~/utils";
import styles from "./nav.module.css";

export const Nav = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const isSticky = useStickyObserver(ref, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: [1],
  });

  return (
    <>
      <div className={styles.navBackground}></div>
      <Promobar />
      <nav ref={ref} className={styles.nav} data-sticky={isSticky}>
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

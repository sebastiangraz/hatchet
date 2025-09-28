import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Logo } from "~/components/Logo/Logo";
import { Promobar } from "~/components/Promobar/Promobar";
import { useStickyObserver } from "~/utils";
import styles from "./nav.module.css";
import { Button } from "../Button/Button";

export const Nav = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const isSticky = useStickyObserver(ref, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: [1],
  });

  return (
    <>
      <div className={styles.navBackground}></div>
      <div className={styles.checker}></div>
      <Promobar />
      <nav ref={ref} className={styles.nav} data-sticky={isSticky}>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <menu className={styles.menu}>
            <NavItem to="/customers">Customers</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
            <Button
              href="https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7"
              target="_blank"
              className={styles.cta}
            >
              Sign up
            </Button>
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

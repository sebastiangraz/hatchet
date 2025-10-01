import { Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Logo } from "~/components/Logo/Logo";
import { Promobar } from "~/components/Promobar/Promobar";
import { useStickyObserver } from "~/utils/utils";
import styles from "./nav.module.css";
import { Button } from "../Button/Button";

type NavItem = {
  title: string;
  link: string;
  target?: string;
  isButton?: boolean;
};

const navItems: NavItem[] = [
  {
    title: "Customers",
    link: "/customers",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Sign up",
    link: "https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7",
    target: "_blank",
    isButton: true,
  },
];

export const Nav = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSticky = useStickyObserver(ref, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: [1],
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className={styles.navBackground}></div>
      <div className={styles.checker}>
        <div className={styles.checkerRight}></div>
        <div className={styles.checkerLeft}></div>
      </div>
      <Promobar />
      <nav
        ref={ref}
        className={styles.nav}
        data-sticky={isSticky}
        data-mobile-open={mobileMenuOpen}
      >
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <menu className={styles.menuDesktop}>
            {navItems.map((item) =>
              item.isButton ? (
                <Button
                  key={item.title}
                  href={item.link}
                  target={item.target}
                  className={styles.cta}
                >
                  {item.title}
                </Button>
              ) : (
                <NavItem key={item.title} to={item.link}>
                  {item.title}
                </NavItem>
              )
            )}
          </menu>

          {/* Mobile Burger Button */}
          <button
            className={styles.burgerButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) =>
              item.isButton ? (
                <>
                  <hr />
                  <Button
                    large
                    key={item.title}
                    href={item.link}
                    target={item.target}
                    className={styles.mobileButton}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Button>
                </>
              ) : (
                <Link
                  key={item.title}
                  to={item.link}
                  className={styles.mobileNavItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        )}
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

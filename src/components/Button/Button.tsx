import { useRef } from "react";
import { theme } from "~/types";
import { Link } from "@tanstack/react-router";
import styles from "./button.module.css";
interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "default" | "small";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  to?: string;
  theme?: theme;
}

export const Button = (props: ButtonProps) => {
  const {
    type = "primary",
    size = "default",
    onClick,
    children,
    href,
    target,
    to,
    theme = "light",
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const destination = href ? href : to;
  const typeValue = type === "primary" ? styles.primary : styles.secondary;
  const sizeValue = size === "small" ? styles.small : "";
  const className = rest.className ? rest.className : "";
  const buttonStyle = `${styles.button} ${typeValue} ${sizeValue} ${className} `;
  return (
    <div ref={ref}>
      <Link
        {...rest}
        className={buttonStyle}
        onClick={onClick}
        href={href}
        target={target}
        to={destination}
        data-theme={theme}
      >
        {children}
      </Link>
    </div>
  );
};

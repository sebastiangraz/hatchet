import { useRef } from "react";
import { theme } from "~/types";
import { Link } from "@tanstack/react-router";
import styles from "./button.module.css";
interface ButtonProps {
  type?: "default" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  to?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    type = "default",
    onClick,
    children,
    href,
    target,
    to,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const destination = href ? href : to;
  const typeValue = type === "default" ? "" : styles.secondary;
  const className = rest.className ? rest.className : "";
  const buttonStyle = `${styles.button} ${typeValue} ${className}`.trim();
  return (
    <div ref={ref}>
      <Link
        {...rest}
        className={buttonStyle}
        onClick={onClick}
        href={href}
        target={target}
        to={destination}
      >
        {children}
      </Link>
    </div>
  );
};

import { useRef } from "react";
import { theme } from "~/types";
import { Link } from "@tanstack/react-router";
import styles from "./button.module.css";
interface ButtonProps {
  type?: "default" | "secondary";
  icon?: "default" | "back" | "docs";
  large?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  to?: string;
  as?: React.ElementType;
}

export const Button = (props: ButtonProps) => {
  const {
    type = "default",
    icon = "default",
    large = false,
    onClick,
    children,
    href,
    target,
    to,
    as,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const Tag = as;

  const typeValue = type === "default" ? "" : styles.secondary;
  const className = rest.className ? rest.className : "";
  const buttonStyle =
    `${styles.button} ${typeValue} ${styles[`icon-${icon}`]} ${large ? styles.large : ""} ${className}`.trim();
  const destination = href ? href : to;
  return Tag ? (
    <Tag
      {...rest}
      className={buttonStyle}
      onClick={onClick}
      href={href}
      target={target}
      to={destination}
    >
      {children}
    </Tag>
  ) : (
    <div ref={ref} style={{ display: "contents" }}>
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

import styles from "./layout.module.css";
import { theme } from "~/types";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  theme?: theme;
}

export const Layout = (props: LayoutProps) => {
  const { children, className, theme } = props;
  return (
    <div
      className={`${styles.layout ?? ""} ${className ?? ""}`.trim()}
      data-theme={theme}
    >
      {children}
    </div>
  );
};

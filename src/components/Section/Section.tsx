import { theme } from "~/types";
import styles from "./section.module.css";
interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  theme?: theme;
  title?: string;
  description?: string;
}

export const Section = (props: SectionProps) => {
  const { children, className, theme, ...rest } = props;
  const themeValue = theme ? theme : "";

  return (
    <section
      className={`${styles.section} ${className}`}
      data-theme={themeValue}
      {...rest}
    >
      {children}
    </section>
  );
};

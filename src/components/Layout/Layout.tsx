import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = (props: LayoutProps) => {
  const { children, className } = props;
  return (
    <main className={`${styles.layout ?? ""} ${className ?? ""}`.trim()}>
      {children}
    </main>
  );
};

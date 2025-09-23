import styles from "./rootlayout.module.css";

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children, className } = props;
  return (
    <main className={`${styles.layout ?? ""} ${className ?? ""}`.trim()}>
      {children}
    </main>
  );
};

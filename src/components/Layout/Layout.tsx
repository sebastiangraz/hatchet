import styles from "./layout.module.css";

export const Layout = ({ children, layout, className, gap }: LayoutProps) => {
  const layoutValue = layout ? layout : "x";
  const classNameValue = className ? className : "";
  const gapValue = gap ? gap : 0;
  const layoutClass =
    `${styles.layout} ${styles[layoutValue]} ${styles[`gap-${gapValue}`]} ${classNameValue}`.trim();

  return <div className={layoutClass}>{children}</div>;
};

export const LayoutChild = ({
  children,
  className,
  span,
  center,
}: LayoutChildProps) => {
  const spanValue = span ? span : "";
  const classNameValue = className ? className : "";
  const layoutClass =
    `${styles.layoutChild} ${styles[spanValue]} ${classNameValue} ${center ? styles.center : ""}`.trim();

  return <div className={layoutClass}>{children}</div>;
};

export const Gap = ({ children, className, gap, dir }: GapProps) => {
  const classNameValue = className ? className : "";
  const gapValue = gap ? gap : 0;
  const dirValue = dir ? dir : "";
  const gapClass =
    `${styles.gap} ${styles[`gap-${gapValue}`]} ${classNameValue} ${styles[dirValue]}`.trim();
  return <div className={gapClass}>{children}</div>;
};

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  layout?: "x" | "y" | "grid";
  gap?: GapType;
}

interface LayoutChildProps {
  children: React.ReactNode;
  className?: string;
  span?: "half" | "full" | "third" | "quarter" | "twothirds";
  center?: boolean;
}

interface GapProps {
  children: React.ReactNode;
  className?: string;
  gap?: GapType;
  dir?: "x" | "y";
}

type GapType = 1 | 2 | 3 | 4;

Layout.Child = LayoutChild;
Layout.Gap = Gap;

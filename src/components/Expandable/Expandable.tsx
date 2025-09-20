import { useState } from "react";
import styles from "./expandable.module.css";
import { Button } from "~/components/Button/Button";
interface ExpandableProps {
  children: React.ReactNode;
  className?: string;
  buttonText?: string;
}

export const Expandable = (props: ExpandableProps) => {
  const { children, className = "", buttonText = "Learn more" } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.expandable} ${className}`}>
      <div
        className={`${styles.content} ${isExpanded ? styles.expanded : styles.collapsed}`}
        aria-expanded={isExpanded}
      >
        <div className={styles.children}>{children}</div>
        {!isExpanded && <div className={styles.mask} />}
      </div>
      <Button
        large
        className={styles.toggleButton}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Show less" : buttonText}
      </Button>
    </div>
  );
};

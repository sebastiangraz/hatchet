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
    <>
      <div
        className={`${styles.content} ${isExpanded ? styles.expanded : styles.collapsed} ${className}`}
        aria-expanded={isExpanded}
      >
        {children}
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
    </>
  );
};

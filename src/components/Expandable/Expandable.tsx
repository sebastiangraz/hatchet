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
      <details className={`${styles.details} ${className}`}>
        <Button
          large
          as="summary"
          className={styles.toggleButton}
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Hide" : buttonText}
        </Button>

        <div className={styles.detailsContentWrapper}>{children}</div>
      </details>
    </>
  );
};

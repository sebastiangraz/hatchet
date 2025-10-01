import React, { createContext, useContext, useRef } from "react";
import styles from "./accordion.module.css";

interface AccordionContextValue {
  exclusive: boolean;
  direction: "x" | "y";
  accordionId: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  children: React.ReactNode;
  direction?: "x" | "y";
  exclusive?: boolean;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  itemIndex?: number;
}

const AccordionBase = ({
  children,
  direction = "y",
  exclusive = true,
  className = "",
}: AccordionProps) => {
  const accordionId = useRef(
    `accordion-${Math.random().toString(36).substr(2, 9)}`
  ).current;

  const contextValue: AccordionContextValue = {
    exclusive,
    direction,
    accordionId,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={`${styles.accordion} ${styles[`direction-${direction}`]} ${className}`}
        data-direction={direction}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              itemIndex: index,
            } as Partial<AccordionItemProps>);
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  children,

  className = "",
  open = false,
  itemIndex = 0,
}: AccordionItemProps) => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion.Item must be used within an Accordion component"
    );
  }

  const { exclusive, direction, accordionId } = context;

  return (
    <details
      className={`${styles.item} ${className}`}
      data-direction={direction}
      name={exclusive ? accordionId : undefined}
      open={open}
    >
      <summary className={styles.summary}></summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};

export const Accordion = Object.assign(AccordionBase, {
  Item: AccordionItem,
});

import React from "react";
import styles from "./text.module.css";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: keyof typeof styles;
  balance?: boolean;
  brackets?: boolean;
  secondary?: boolean;
  mono?: boolean;
  caps?: boolean;
  italic?: boolean;
}

const TextBase = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      className,
      as: Component = "span",
      variant,
      balance,
      brackets,
      secondary,
      mono,
      caps,
      italic,
      ...props
    },
    ref
  ) => {
    const finalClassName = [
      variant && styles[variant],
      className || "",
      balance ? styles.balance : "",
      secondary ? styles.secondary : "",
      brackets ? styles.brackets : "",
      mono ? styles.mono : "",
      caps ? styles.caps : "",
      italic ? styles.italic : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={finalClassName} {...props}>
        {children}
      </Component>
    );
  }
);

const Text = ({ children, ...props }: TextProps) => {
  return <TextBase {...props}>{children}</TextBase>;
};

const createStyledText = (
  variant: keyof typeof styles,
  defaultTag: React.ElementType = "span"
) => {
  return React.forwardRef<HTMLElement, Omit<TextProps, "variant">>(
    (props, ref) => (
      <TextBase ref={ref} as={defaultTag} variant={variant} {...props} />
    )
  );
};

Text.H1 = createStyledText("h1", "h1");
Text.H2 = createStyledText("h2", "h2");
Text.H3 = createStyledText("h3", "h3");
Text.H4 = createStyledText("h4", "h4");
Text.H5 = createStyledText("h5", "h5");
Text.Body = createStyledText("body", "p");
Text.Small = createStyledText("small", "span");
Text.Micro = createStyledText("micro", "span");

export { Text };

Text.displayName = "Text";
Text.H1.displayName = "Text.H1";
Text.H2.displayName = "Text.H2";
Text.H3.displayName = "Text.H3";
Text.H4.displayName = "Text.H4";
Text.H5.displayName = "Text.H5";
Text.Body.displayName = "Text.Body";
Text.Small.displayName = "Text.Small";
Text.Micro.displayName = "Text.Micro";

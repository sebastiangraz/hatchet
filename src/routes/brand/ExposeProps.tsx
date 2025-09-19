import { Text } from "~/components/Text/Text";
import React, { ReactElement, useRef } from "react";
import style from "./brand.module.css";

interface ExposePropsProps {
  ignoreProps?: string[];
  children: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

const formatProps = (props: any, ignoreProps: string[]): React.ReactNode => {
  const filteredProps = Object.entries(props)
    .filter(([key]) => !ignoreProps.includes(key)) // Filter out ignored props
    .map(([key, value]: [string, any]) => {
      return (
        <span key={key}>
          <Text.Small children={`${key}="`} />
          <span className={style.highlight}>
            <Text.Small children={value.toString()} />
          </span>
          "
        </span>
      );
    });

  return (
    <>
      {filteredProps.reduce<React.ReactNode[]>(
        (acc, curr) => [...acc, " ", curr],
        []
      )}
    </>
  );
};

export const ExposeProps = ({
  children,
  className = "",
  ignoreProps = [],
  ...props
}: ExposePropsProps) => {
  const { style: styleValue } = props;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={className} style={styleValue} ref={ref}>
      {React.Children.map(children, (child: any, index: number) => {
        const isSpan = child.type === "span";

        return (
          <div key={index} className={style.prop}>
            <div>{child}</div>
            <Text.Small secondary className={style.syntax}>
              {!isSpan && "<"}
              {child.type.displayName || child.type.name}{" "}
              {formatProps(child.props, ignoreProps)}
              {!isSpan && "/>"}
            </Text.Small>
          </div>
        );
      })}
    </div>
  );
};

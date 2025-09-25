import style from "./markdown.module.css";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { Section } from "~/components/Section/Section";
import { isArrayofObjects } from "~/utils";
import styles from "./markdown.module.css";

export const components = {
  h1: (props: any) => (
    <Text.H2 balance {...props}>
      {props.children}
    </Text.H2>
  ),
  h2: (props: any) => <Text.H3 {...props}>{props.children}</Text.H3>,
  h3: (props: any) => <Text.H4 {...props}>{props.children}</Text.H4>,
  h4: (props: any) => <Text.H5 {...props}>{props.children}</Text.H5>,
  h5: (props: any) => <Text.H5 {...props}>{props.children}</Text.H5>,
  p: (props: any) => (
    <Text.Body secondary {...props}>
      {props.children}
    </Text.Body>
  ),
  a: (props: any) => (
    <Text.Body primary {...props} as="a">
      {props.children}
    </Text.Body>
  ),
  strong: (props: any) => (
    <Text.Body primary {...props} as="strong">
      {props.children}
    </Text.Body>
  ),
  blockquote: (props: any) => (
    <div className={`blockquote ${style.blockquote}`}>
      <Text.Body italic {...props}>
        {props.children}
      </Text.Body>
    </div>
  ),
  table: (props: any) => {
    let firstChildProps;
    if (isArrayofObjects(props.children)) {
      firstChildProps = props.children[0];
    } else {
      firstChildProps = props.children;
    }
    const columns = firstChildProps?.props?.children?.props?.children;
    return (
      <div className={`${style.table}`}>
        <table
          {...props}
          style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
          {props.children}
        </table>
      </div>
    );
  },
  code: (props: any) => {
    return <code className={`${style.code}`} {...props}></code>;
  },
  img: (props: any) => {
    return <img className={`${style.image}`} {...props}></img>;
  },
  ul: (props: any) => <ul {...props}></ul>,
  ol: (props: any) => <ol {...props}></ol>,
  li: (props: any) => (
    <li {...props}>
      <Text.Body secondary>{props.children}</Text.Body>
    </li>
  ),
  Button: Button,
  Section: (props: any) => (
    <Section {...props} className={`${styles.prose} py-4`} />
  ),
};

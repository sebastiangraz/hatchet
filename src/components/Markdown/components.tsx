import style from "./markdown.module.css";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { Section } from "~/components/Section/Section";
import { isArrayofObjects } from "~/utils";
import styles from "./markdown.module.css";
import { resolveImageSrc } from "~/utils/imageResolver";
import { QuoteAuthor } from "../Quote/Quote";
import { Quote } from "../Quote/Quote";
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
    <Text.Body
      as="blockquote"
      italic
      className={`blockquote ${style.blockquote}`}
      {...props}
    >
      {props.children}
    </Text.Body>
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
    const { src, contentSlug, ...otherProps } = props;

    // Resolve the image source using the shared resolver
    const resolvedSrc = resolveImageSrc(src, contentSlug);

    return (
      <img className={`${style.image}`} src={resolvedSrc} {...otherProps}></img>
    );
  },
  ul: (props: any) => <ul {...props}></ul>,
  ol: (props: any) => <ol {...props}></ol>,
  li: (props: any) => (
    <Text.Body as="li" secondary {...props}>
      {props.children}
    </Text.Body>
  ),
  Button: Button,
  Section: (props: any) => (
    <Section {...props} className={`${styles.prose} py-4`} />
  ),
  QuoteAuthor: QuoteAuthor,
  Quote: Quote,
};

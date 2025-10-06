import style from "./markdown.module.css";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { Section } from "~/components/Section/Section";
import styles from "./markdown.module.css";
import { resolveImageSrc } from "~/utils/imageResolver";
import { QuoteAuthor } from "../Quote/Quote";
import { Quote } from "../Quote/Quote";
import { getFirstChild } from "~/utils/utils";
import { ReactChild } from "~/types";
export const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text.H2 balance {...props}>
      {props.children}
    </Text.H2>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text.H3 {...props}>{props.children}</Text.H3>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text.H4 {...props}>{props.children}</Text.H4>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text.H5 {...props}>{props.children}</Text.H5>
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text.H5 {...props}>{props.children}</Text.H5>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text.Body secondary {...props}>
      {props.children}
    </Text.Body>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Text.Body primary {...props} as="a">
      {props.children}
    </Text.Body>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <Text.Body primary {...props} as="strong">
      {props.children}
    </Text.Body>
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <Text.Body
      as="blockquote"
      italic
      className={`blockquote ${style.blockquote}`}
      {...props}
    >
      {props.children}
    </Text.Body>
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => {
    const firstChild = getFirstChild(props.children);
    const tableRow = getFirstChild(firstChild?.props?.children) as ReactChild;
    const columns = Array.isArray(tableRow?.props?.children)
      ? tableRow.props.children
      : [];
    return (
      <div className={`${style.table}`}>
        <table
          {...props}
          style={{
            gridTemplateColumns: `repeat(${columns.length || 1}, 1fr)`,
          }}
        >
          {props.children}
        </table>
      </div>
    );
  },
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    return <code className={`${style.code}`} {...props}></code>;
  },
  img: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & { contentSlug?: string }
  ) => {
    const { src, contentSlug, ...otherProps } = props;

    // Resolve the image source using the shared resolver
    const resolvedSrc = resolveImageSrc(src ?? "", contentSlug ?? "");

    return (
      <img className={`${style.image}`} src={resolvedSrc} {...otherProps}></img>
    );
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props}></ul>,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol {...props}></ol>,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <Text.Body as="li" secondary {...props}>
      {props.children}
    </Text.Body>
  ),
  Button: Button,
  Section: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <Section {...props} className={`${styles.prose} py-4`} />
  ),
  QuoteAuthor: QuoteAuthor,
  Quote: Quote,
};

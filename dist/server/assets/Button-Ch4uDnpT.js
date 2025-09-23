import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
const button = "_button_1xhzk_3 small mono caps";
const large = "_large_1xhzk_135";
const secondary = "_secondary_1xhzk_155";
const scrollbar = "_scrollbar_1xhzk_1";
const h1 = "_h1_1xhzk_1";
const h2 = "_h2_1xhzk_1";
const h3 = "_h3_1xhzk_1";
const h4 = "_h4_1xhzk_1";
const h5 = "_h5_1xhzk_1";
const paragraph = "_paragraph_1xhzk_1";
const italic = "_italic_1xhzk_1";
const small = "_small_1xhzk_1";
const micro = "_micro_1xhzk_1";
const caps = "_caps_1xhzk_1";
const mono = "_mono_1xhzk_1";
const checker = "_checker_1xhzk_1";
const flex = "_flex_1xhzk_1";
const brackets = "_brackets_1xhzk_1";
const divider = "_divider_1xhzk_1";
const styles = {
  button,
  large,
  secondary,
  "icon-default": "_icon-default_1xhzk_207",
  "icon-back": "_icon-back_1xhzk_219",
  "icon-docs": "_icon-docs_1xhzk_235",
  scrollbar,
  "does-not-exist": "_does-not-exist_1xhzk_1",
  h1,
  h2,
  h3,
  h4,
  h5,
  paragraph,
  italic,
  small,
  micro,
  caps,
  mono,
  checker,
  flex,
  brackets,
  divider,
  "grid-parent": "_grid-parent_1xhzk_1",
  "py-1": "_py-1_1xhzk_1",
  "py-2": "_py-2_1xhzk_1",
  "py-3": "_py-3_1xhzk_1",
  "py-4": "_py-4_1xhzk_1",
  "py-5": "_py-5_1xhzk_1",
  "py-6": "_py-6_1xhzk_1",
  "pb-1": "_pb-1_1xhzk_1",
  "pb-2": "_pb-2_1xhzk_1",
  "pb-3": "_pb-3_1xhzk_1",
  "pb-4": "_pb-4_1xhzk_1",
  "pb-5": "_pb-5_1xhzk_1",
  "pb-6": "_pb-6_1xhzk_1",
  "my-1": "_my-1_1xhzk_1",
  "my-2": "_my-2_1xhzk_1",
  "my-3": "_my-3_1xhzk_1",
  "my-4": "_my-4_1xhzk_1",
  "mt-1": "_mt-1_1xhzk_1",
  "mt-2": "_mt-2_1xhzk_1",
  "mt-3": "_mt-3_1xhzk_1",
  "mt-4": "_mt-4_1xhzk_1",
  "mb-1": "_mb-1_1xhzk_1",
  "mb-2": "_mb-2_1xhzk_1",
  "mb-3": "_mb-3_1xhzk_1",
  "mb-4": "_mb-4_1xhzk_1"
};
const Button = (props) => {
  const {
    type = "default",
    icon = "default",
    large: large2 = false,
    onClick,
    children,
    href,
    target,
    to,
    as,
    ...rest
  } = props;
  const ref = useRef(null);
  const Tag = as;
  const typeValue = type === "default" ? "" : styles.secondary;
  const className = rest.className ? rest.className : "";
  const buttonStyle = `${styles.button} ${typeValue} ${styles[`icon-${icon}`]} ${large2 ? styles.large : ""} ${className}`.trim();
  const destination = href ? href : to;
  return Tag ? /* @__PURE__ */ jsx(
    Tag,
    {
      ...rest,
      className: buttonStyle,
      onClick,
      href,
      target,
      to: destination,
      children
    }
  ) : /* @__PURE__ */ jsx("div", { ref, children: /* @__PURE__ */ jsx(
    Link,
    {
      ...rest,
      className: buttonStyle,
      onClick,
      href,
      target,
      to: destination,
      children
    }
  ) });
};
export {
  Button as B
};

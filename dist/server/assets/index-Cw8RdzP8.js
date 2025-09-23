import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { T as Text, S as Section } from "./router-8rQq1k6p.js";
import React, { useRef } from "react";
import { B as Button } from "./Button-Ch4uDnpT.js";
import "@tanstack/react-router";
import "@mdx-js/react";
const section = "_section_1ucwo_1";
const prop = "_prop_1ucwo_31 checker";
const syntax = "_syntax_1ucwo_65";
const highlight = "_highlight_1ucwo_117";
const styles = {
  section,
  prop,
  syntax,
  highlight
};
const formatProps = (props, ignoreProps) => {
  const filteredProps = Object.entries(props).filter(([key]) => !ignoreProps.includes(key)).map(([key, value]) => {
    return /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx(Text.Small, { children: `${key}="` }),
      /* @__PURE__ */ jsx("span", { className: styles.highlight, children: /* @__PURE__ */ jsx(Text.Small, { children: value.toString() }) }),
      '"'
    ] }, key);
  });
  return /* @__PURE__ */ jsx(Fragment, { children: filteredProps.reduce(
    (acc, curr) => [...acc, " ", curr],
    []
  ) });
};
const ExposeProps = ({
  children,
  className = "",
  ignoreProps = [],
  theme: theme2,
  ...props
}) => {
  const { style: styleValue } = props;
  const ref = useRef(null);
  return /* @__PURE__ */ jsx("div", { className, style: styleValue, ref, "data-theme": theme2, children: React.Children.map(children, (child, index) => {
    const isSpan = child.type === "span";
    return /* @__PURE__ */ jsxs("div", { className: styles.prop, children: [
      /* @__PURE__ */ jsx("div", { children: child }),
      /* @__PURE__ */ jsxs(Text.Small, { secondary: true, className: styles.syntax, children: [
        !isSpan && "<",
        child.type.displayName || child.type.name,
        " ",
        formatProps(child.props, ignoreProps),
        !isSpan && "/>"
      ] })
    ] }, index);
  }) });
};
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { className: `${styles.section} py-4`, children: /* @__PURE__ */ jsxs(ExposeProps, { ignoreProps: ["children"], children: [
      /* @__PURE__ */ jsx(Text.H1, { children: "H1 Heading" }),
      /* @__PURE__ */ jsx(Text.H2, { children: "H2 Heading" }),
      /* @__PURE__ */ jsx(Text.H3, { children: "H3 Heading" }),
      /* @__PURE__ */ jsx(Text.H4, { children: "H4 Heading" }),
      /* @__PURE__ */ jsx(Text.H5, { children: "H5 Heading" }),
      /* @__PURE__ */ jsx(Text.Body, { children: "Body · See how leading companies are using Hatchet to build more resilient, scalable applications without the complexity of managing their own infrastructure." }),
      /* @__PURE__ */ jsx(Text.Small, { children: "Small · See how leading companies are using Hatchet to build more resilient, scalable applications without the complexity of managing their own infrastructure." }),
      /* @__PURE__ */ jsx(Text.Micro, { children: "Micro · See how leading companies are using Hatchet to build more resilient, scalable applications without the complexity of managing their own infrastructure." }),
      /* @__PURE__ */ jsx(Text.Small, { mono: true, children: "Small Mono" }),
      /* @__PURE__ */ jsx(Text.Micro, { mono: true, children: "Micro Mono" }),
      /* @__PURE__ */ jsx(Text.Small, { mono: true, caps: true, brackets: true, children: "Small Mono" }),
      /* @__PURE__ */ jsx(Text.Micro, { mono: true, caps: true, brackets: true, children: "Micro Mono" })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: `${styles.section} py-4`, children: [
      /* @__PURE__ */ jsxs(ExposeProps, { ignoreProps: ["children"], children: [
        /* @__PURE__ */ jsx(Button, { children: "Button" }),
        /* @__PURE__ */ jsx(Button, { icon: "back", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { icon: "docs", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", icon: "back", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", icon: "docs", children: "Button" })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs(ExposeProps, { ignoreProps: ["children"], theme: "dark", children: [
        /* @__PURE__ */ jsx(Button, { children: "Button" }),
        /* @__PURE__ */ jsx(Button, { icon: "back", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { icon: "docs", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", icon: "back", children: "Button" }),
        /* @__PURE__ */ jsx(Button, { type: "secondary", icon: "docs", children: "Button" })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs(ExposeProps, { ignoreProps: ["children"], children: [
        /* @__PURE__ */ jsx(Button, { large: true, children: "Button" }),
        /* @__PURE__ */ jsx(Button, { large: true, type: "secondary", children: "Button" })
      ] })
    ] })
  ] });
}
export {
  RouteComponent as component
};

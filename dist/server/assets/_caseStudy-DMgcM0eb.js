import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { S as Section, T as Text, i as isArrayofObjects, R as Route, c as caseStudies } from "./router-3yl_6HbH.js";
import { B as Button } from "./Button-Ch4uDnpT.js";
import { MDXProvider } from "@mdx-js/react";
import { s as styles } from "./customers.module-Cvo5OmwV.js";
import "@tanstack/react-router";
import "react";
const prose = "_prose_11c4u_1";
const table = "_table_11c4u_379 scrollbar";
const image = "_image_11c4u_415";
const code = "_code_11c4u_617";
const blockquote = "_blockquote_11c4u_745";
const markdownStyles = {
  prose,
  table,
  image,
  code,
  blockquote
};
const components = {
  h1: (props) => /* @__PURE__ */ jsx(Text.H2, { balance: true, ...props, children: props.children }),
  h2: (props) => /* @__PURE__ */ jsx(Text.H3, { ...props, children: props.children }),
  h3: (props) => /* @__PURE__ */ jsx(Text.H4, { ...props, children: props.children }),
  h4: (props) => /* @__PURE__ */ jsx(Text.H5, { ...props, children: props.children }),
  h5: (props) => /* @__PURE__ */ jsx(Text.H5, { ...props, children: props.children }),
  p: (props) => /* @__PURE__ */ jsx(Text.Body, { secondary: true, ...props, children: props.children }),
  blockquote: (props) => /* @__PURE__ */ jsx("div", { className: `blockquote ${markdownStyles.blockquote}`, children: /* @__PURE__ */ jsx(Text.Body, { italic: true, ...props, children: props.children }) }),
  table: (props) => {
    let firstChildProps;
    if (isArrayofObjects(props.children)) {
      firstChildProps = props.children[0];
    } else {
      firstChildProps = props.children;
    }
    const columns = firstChildProps?.props?.children?.props?.children;
    return /* @__PURE__ */ jsx("div", { className: `${markdownStyles.table}`, children: /* @__PURE__ */ jsx(
      "table",
      {
        ...props,
        style: { gridTemplateColumns: `repeat(${columns.length}, 1fr)` },
        children: props.children
      }
    ) });
  },
  code: (props) => {
    return /* @__PURE__ */ jsx("code", { className: `${markdownStyles.code}`, ...props });
  },
  img: (props) => {
    return /* @__PURE__ */ jsx("img", { className: `${markdownStyles.image}`, ...props });
  },
  ul: (props) => /* @__PURE__ */ jsx("ul", { ...props }),
  ol: (props) => /* @__PURE__ */ jsx("ol", { ...props }),
  li: (props) => /* @__PURE__ */ jsx("li", { ...props, children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: props.children }) }),
  Button,
  Section: (props) => /* @__PURE__ */ jsx(Section, { ...props, className: `${markdownStyles.prose} py-4` })
};
const Markdown = ({ children }) => {
  return (
    // <div className={`col ${style.prose}`}>
    /* @__PURE__ */ jsx(MDXProvider, { components, children })
  );
};
function RouteComponent() {
  const {
    frontmatter,
    slug
  } = Route.useLoaderData();
  const post = caseStudies.find((p) => p.slug === slug);
  const Content = post?.Content;
  const {
    company,
    industry,
    title,
    description
  } = frontmatter;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Section, { className: "py-4", children: [
      /* @__PURE__ */ jsx(Button, { to: "/customers", icon: "back", children: "All Cases" }),
      /* @__PURE__ */ jsx("div", { className: "divider", style: {
        gridColumn: "bleedstart / bleedend"
      } }),
      /* @__PURE__ */ jsxs("div", { className: styles.caseStudyHeader, children: [
        /* @__PURE__ */ jsx(Text.Small, { brackets: true, className: "industry", children: industry }),
        /* @__PURE__ */ jsx(Text.H1, { balance: true, children: title }),
        /* @__PURE__ */ jsx(Text.Body, { balance: true, children: description }),
        " "
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divider", style: {
        gridColumn: "bleedstart / bleedend"
      } }),
      /* @__PURE__ */ jsx("div", { className: styles.caseStudyHeader, children: /* @__PURE__ */ jsx(Text.Small, { brackets: true, className: "company", children: company }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: `${markdownStyles.prose} pb-6`, children: Content ? /* @__PURE__ */ jsx(Markdown, { children: /* @__PURE__ */ jsx(Content, {}) }) : /* @__PURE__ */ jsx(Text.Body, { children: "Case study content not found." }) })
  ] });
}
export {
  RouteComponent as component
};

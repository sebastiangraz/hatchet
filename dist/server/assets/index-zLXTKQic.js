import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as Section, T as Text, c as caseStudies } from "./router-8rQq1k6p.js";
import { B as Button } from "./Button-Ch4uDnpT.js";
import { s as styles } from "./customers.module-Cvo5OmwV.js";
import "@tanstack/react-router";
import "react";
import "@mdx-js/react";
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { className: "py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", style: {
      gridColumn: "start / end"
    }, children: [
      /* @__PURE__ */ jsx(Text.H1, { children: "Customers" }),
      /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "See how leading companies are using Hatchet to build more resilient, scalable applications without the complexity of managing their own infrastructure." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { theme: "light", className: "py-4", children: /* @__PURE__ */ jsx("div", { className: styles.caseStudyGrid, children: caseStudies.map((caseStudy) => /* @__PURE__ */ jsx(CaseStudyCard, { caseStudy }, caseStudy.slug)) }) })
  ] });
}
const CaseStudyCard = ({
  caseStudy
}) => {
  const {
    slug,
    frontmatter
  } = caseStudy;
  return /* @__PURE__ */ jsxs("div", { className: styles.caseStudyCard, children: [
    /* @__PURE__ */ jsx(Text.H4, { balance: true, children: frontmatter.title }),
    /* @__PURE__ */ jsx(Text.Body, { children: frontmatter.description }),
    /* @__PURE__ */ jsx(Text.Micro, { caps: true, mono: true, brackets: true, className: styles.company, children: frontmatter.industry }),
    /* @__PURE__ */ jsx(Button, { to: `/customers/${slug}`, children: "Read" })
  ] });
};
export {
  RouteComponent as component
};

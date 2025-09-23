import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as Section, T as Text } from "./router-8rQq1k6p.js";
import { B as Button } from "./Button-Ch4uDnpT.js";
import "@tanstack/react-router";
import "react";
import "@mdx-js/react";
const header = "_header_13rq9_3";
const subtitle = "_subtitle_13rq9_17";
const pricingTable = "_pricingTable_13rq9_37";
const tableHeader = "_tableHeader_13rq9_77";
const headerCell = "_headerCell_13rq9_93";
const popularHeader = "_popularHeader_13rq9_121";
const priceContainer = "_priceContainer_13rq9_129";
const price = "_price_13rq9_129";
const period = "_period_13rq9_149";
const tableRow = "_tableRow_13rq9_159";
const categoryRow = "_categoryRow_13rq9_171";
const featureCell = "_featureCell_13rq9_227";
const categoryCell = "_categoryCell_13rq9_247";
const featureCategory = "_featureCategory_13rq9_263";
const valueCell = "_valueCell_13rq9_273";
const emptyCategoryCell = "_emptyCategoryCell_13rq9_295";
const styles = {
  header,
  subtitle,
  pricingTable,
  tableHeader,
  headerCell,
  popularHeader,
  priceContainer,
  price,
  period,
  tableRow,
  categoryRow,
  featureCell,
  categoryCell,
  featureCategory,
  valueCell,
  emptyCategoryCell
};
const cloudPlans = [{
  name: "Free",
  price: "$0",
  period: "/mo",
  description: "For testing and small-scale experimentation",
  buttonText: "Get Started",
  buttonHref: "https://hatchet.run",
  popular: false
}, {
  name: "Starter",
  price: "$180",
  period: "/mo",
  description: "For smaller systems starting to face scaling challenges",
  buttonText: "Get Started",
  buttonHref: "https://hatchet.run",
  popular: false
}, {
  name: "Growth",
  price: "$425",
  period: "/mo",
  description: "For larger services experiencing especially tricky scaling problems.",
  buttonText: "Get Started",
  buttonHref: "https://hatchet.run",
  popular: true
}, {
  name: "Enterprise",
  price: "Contact",
  period: "",
  description: "For especially complex systems with unique requirements.",
  buttonText: "Talk to us",
  buttonHref: "https://hatchet.run",
  popular: false
}];
const featureRows = [
  // Throughput Limits Section
  {
    type: "category",
    category: "Throughput Limits"
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["10/s", "100/s", "500/s", "500-10k/s"]
  },
  {
    type: "feature",
    subcategory: "Concurrent Runs",
    values: ["2k", "10k", "100k", "100k-1M"]
  },
  // Managed Compute Section
  {
    type: "category",
    category: "Managed Compute"
  },
  {
    type: "feature",
    subcategory: "Shared CPU",
    values: ["$0.01/CPU/hour", "$0.01/CPU/hour", "$0.01/CPU/hour", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Performance CPU",
    values: ["-", "$0.02/CPU/hour", "$0.02/CPU/hour", "Custom"]
  },
  {
    type: "feature",
    subcategory: "RAM",
    values: ["$0.01/GB/hour", "$0.01/GB/hour", "$0.01/GB/hour", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Instance Types",
    values: ["1xCPU/1xGB", "up to 2xCPU/4GB", "up to 8xCPU/16GB", "Custom"]
  },
  {
    type: "feature",
    subcategory: "GPU",
    values: ["-", "-", "Available (Beta)", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Auto Scale",
    values: ["0-2 instances", "0-5 instances", "0-200 instances", "Custom"]
  },
  // Included Usage Section
  {
    type: "category",
    category: "Included Usage"
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["2k/day", "20k/day", "100k/day", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: ["1 GB", "10 GB", "100 GB", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: ["10 GB", "100 GB", "1 TB", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Compute Credits",
    values: ["$5/mo", "$25/mo", "$100/mo", "Custom"]
  },
  // Additional Usage Section
  {
    type: "category",
    category: "Additional Usage"
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["N/A", "N/A", "$10/million", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: ["N/A", "N/A", "N/A", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: ["N/A", "N/A", "N/A", "Custom"]
  },
  // General Section
  {
    type: "category",
    category: "General"
  },
  {
    type: "feature",
    subcategory: "Public Discord Support",
    values: ["Included", "Included", "Included", "Included"]
  },
  {
    type: "feature",
    subcategory: "Private Shared Slack Support",
    values: ["-", "Included", "Included", "Included"]
  },
  {
    type: "feature",
    subcategory: "Onboarding",
    values: ["-", "-", "Included", "Included"]
  },
  {
    type: "feature",
    subcategory: "SLAs",
    values: ["-", "-", "-", "Custom SLAs"]
  },
  {
    type: "feature",
    subcategory: "Data Retention",
    values: ["1 day", "3 days", "7 days", "Custom"]
  },
  {
    type: "feature",
    subcategory: "SOC 2",
    values: ["-", "-", "-", "Available"]
  },
  {
    type: "feature",
    subcategory: "HIPAA",
    values: ["-", "-", "-", "Available"]
  },
  {
    type: "feature",
    subcategory: "BAA",
    values: ["-", "-", "-", "Available"]
  },
  // Additional Limits Section
  {
    type: "category",
    category: "Additional Limits"
  },
  {
    type: "feature",
    subcategory: "Events",
    values: ["1k/day", "20k/day", "100k/day", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Max Workers",
    values: ["1", "50", "200", "Custom"]
  },
  {
    type: "feature",
    subcategory: "Users",
    values: ["1", "3", "10", "Custom"]
  }
];
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { className: "py-6", children: /* @__PURE__ */ jsxs("div", { className: styles.header, children: [
      /* @__PURE__ */ jsx(Text.H1, { balance: true, children: "Pricing" }),
      /* @__PURE__ */ jsx(Text.Body, { balance: true, className: styles.subtitle, children: "Hatchet offers both Fully Managed Hatchet Cloud packages and Self-Hosted Plans." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { theme: "light", className: "pb-6", children: /* @__PURE__ */ jsxs("div", { className: styles.pricingTable, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.tableHeader, children: [
        /* @__PURE__ */ jsx("div", { className: styles.headerCell }),
        cloudPlans.map((plan, index) => /* @__PURE__ */ jsxs("div", { className: `${styles.headerCell} ${plan.popular ? styles.popularHeader : ""}`, children: [
          /* @__PURE__ */ jsx(Text.H5, { children: plan.name }),
          /* @__PURE__ */ jsxs("div", { className: styles.priceContainer, children: [
            /* @__PURE__ */ jsx(Text.H3, { className: styles.price, children: plan.price }),
            plan.period && /* @__PURE__ */ jsx(Text.Body, { className: styles.period, children: plan.period })
          ] }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, balance: true, className: styles.description, children: plan.description }),
          /* @__PURE__ */ jsx(Button, { href: plan.buttonHref, target: "_blank", className: styles.button, children: plan.buttonText })
        ] }, index))
      ] }),
      featureRows.map((row, rowIndex) => {
        if (row.type === "category") {
          return /* @__PURE__ */ jsxs("div", { className: styles.categoryRow, children: [
            /* @__PURE__ */ jsx("div", { className: styles.categoryCell, children: /* @__PURE__ */ jsx(Text.H5, { className: styles.featureCategory, children: row.category }) }),
            cloudPlans.map((_, index) => /* @__PURE__ */ jsx("div", { className: styles.emptyCategoryCell }, index))
          ] }, rowIndex);
        }
        if (row.type === "feature" && row.values) {
          return /* @__PURE__ */ jsxs("div", { className: styles.tableRow, children: [
            /* @__PURE__ */ jsx("div", { className: styles.featureCell, children: /* @__PURE__ */ jsx(Text.Small, { mono: true, className: styles.featureSubcategory, children: row.subcategory }) }),
            row.values.map((value, valueIndex) => /* @__PURE__ */ jsx("div", { className: styles.valueCell, "data-plan": cloudPlans[valueIndex].name, children: /* @__PURE__ */ jsx(Text.Small, { mono: true, secondary: true, children: value }) }, valueIndex))
          ] }, rowIndex);
        }
        return null;
      })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};

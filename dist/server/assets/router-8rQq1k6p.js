import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, useChildMatches, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
import { useMDXComponents } from "@mdx-js/react";
const layout = "_layout_4jwpo_1";
const styles$4 = {
  layout
};
const RootLayout = (props) => {
  const { children, className } = props;
  return /* @__PURE__ */ jsx("main", { className: `${styles$4.layout} ${className ?? ""}`.trim(), children });
};
const CSSGlobal = "/assets/global-Cpgf0HCM.css";
const CSSUtils = "/assets/utils-pRCcBiFi.css";
const Logo = (props) => {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "137",
      height: "24",
      viewBox: "0 0 137 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17.5 10L22 0L30.6059 8.60589C31.7939 9.79394 32.388 10.388 32.6105 11.0729C32.8063 11.6755 32.8063 12.3245 32.6105 12.9271C32.388 13.612 31.7939 14.2061 30.6059 15.3941L22 24H15L26.7517 11.3444C27.146 10.9197 27.3432 10.7074 27.3527 10.5263C27.361 10.3691 27.2947 10.2171 27.1739 10.1162C27.0347 10 26.7449 10 26.1654 10H17.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.5 14L12 24L3.39411 15.3941C2.20606 14.2061 1.61204 13.612 1.38947 12.9271C1.1937 12.3245 1.1937 11.6755 1.38947 11.0729C1.61204 10.388 2.20606 9.79394 3.39411 8.60589L12 0H19L7.24833 12.6556C6.854 13.0803 6.65684 13.2926 6.6473 13.4737C6.63902 13.6309 6.70527 13.7829 6.82612 13.8838C6.96529 14 7.25505 14 7.83457 14H16.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M88.5908 3.14502C92.0637 3.14506 94.5478 5.30746 94.5479 8.96436V10.1147H91.0977V9.05615C91.0975 7.42337 90.0857 6.36577 88.5908 6.36572C87.0959 6.36572 86.0841 7.42333 86.084 9.05615V14.9448C86.0841 16.5776 87.0959 17.6353 88.5908 17.6353C90.0856 17.6352 91.0975 16.5776 91.0977 14.9448V13.6108H94.5479V14.9448C94.5477 18.6476 92.0866 20.8549 88.5908 20.855C85.0949 20.855 82.634 18.6476 82.6338 14.9448V8.96436C82.6338 5.30742 85.1179 3.14502 88.5908 3.14502ZM80.4238 6.61865H76.3994V20.6489H72.9492V6.61865H68.9238V3.39893H80.4238V6.61865ZM136.884 6.61865H132.858V20.6489H129.408V6.61865H125.384V3.39893H136.884V6.61865ZM44.4502 10.3677H49.4414V3.37549H52.8916V20.6255H49.4414V13.5874H44.4502V20.6255H41V3.37549H44.4502V10.3677ZM68.4639 20.6255H64.3926L63.9326 18.3022H59.7461L59.2861 20.6255H55.4688L59.7461 3.37549H64.1855L68.4639 20.6255ZM101.157 10.3677H106.148V3.37549H109.598V20.6255H106.148V13.5874H101.157V20.6255H97.707V3.37549H101.157V10.3677ZM122.801 6.59521H116.361V10.1831H121.812V13.4038H116.361V17.4058H122.848V20.6255H112.911V3.37549H122.801V6.59521ZM60.2988 15.5425H63.4033L61.8623 7.72217L60.2988 15.5425Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
};
const promobar = "_promobar_15qv7_1";
const content$1 = "_content_15qv7_23";
const closeButton = "_closeButton_15qv7_47";
const styles$3 = {
  promobar,
  content: content$1,
  closeButton
};
const h1 = "_h1_1yqr1_1 h1";
const h2 = "_h2_1yqr1_9 h2";
const h3 = "_h3_1yqr1_17 h3";
const h4 = "_h4_1yqr1_25 h4";
const h5 = "_h5_1yqr1_33 h5 caps";
const body = "_body_1yqr1_43 paragraph";
const italic = "_italic_1yqr1_51 italic";
const small = "_small_1yqr1_59 small";
const micro = "_micro_1yqr1_67 micro";
const mono = "_mono_1yqr1_75 mono";
const caps = "_caps_1yqr1_83 caps";
const brackets = "_brackets_1yqr1_91 brackets";
const balance = "_balance_1yqr1_99";
const secondary = "_secondary_1yqr1_107";
const scrollbar = "_scrollbar_1yqr1_1";
const paragraph = "_paragraph_1yqr1_1";
const checker$1 = "_checker_1yqr1_1";
const flex = "_flex_1yqr1_1";
const divider = "_divider_1yqr1_1";
const styles$2 = {
  h1,
  h2,
  h3,
  h4,
  h5,
  body,
  italic,
  small,
  micro,
  mono,
  caps,
  brackets,
  balance,
  secondary,
  scrollbar,
  "does-not-exist": "_does-not-exist_1yqr1_1",
  paragraph,
  checker: checker$1,
  flex,
  divider,
  "grid-parent": "_grid-parent_1yqr1_1",
  "py-1": "_py-1_1yqr1_1",
  "py-2": "_py-2_1yqr1_1",
  "py-3": "_py-3_1yqr1_1",
  "py-4": "_py-4_1yqr1_1",
  "py-5": "_py-5_1yqr1_1",
  "py-6": "_py-6_1yqr1_1",
  "pb-1": "_pb-1_1yqr1_1",
  "pb-2": "_pb-2_1yqr1_1",
  "pb-3": "_pb-3_1yqr1_1",
  "pb-4": "_pb-4_1yqr1_1",
  "pb-5": "_pb-5_1yqr1_1",
  "pb-6": "_pb-6_1yqr1_1",
  "my-1": "_my-1_1yqr1_1",
  "my-2": "_my-2_1yqr1_1",
  "my-3": "_my-3_1yqr1_1",
  "my-4": "_my-4_1yqr1_1",
  "mt-1": "_mt-1_1yqr1_1",
  "mt-2": "_mt-2_1yqr1_1",
  "mt-3": "_mt-3_1yqr1_1",
  "mt-4": "_mt-4_1yqr1_1",
  "mb-1": "_mb-1_1yqr1_1",
  "mb-2": "_mb-2_1yqr1_1",
  "mb-3": "_mb-3_1yqr1_1",
  "mb-4": "_mb-4_1yqr1_1"
};
const TextBase = React.forwardRef(
  ({
    children,
    className,
    as: Component = "span",
    variant,
    balance: balance2,
    brackets: brackets2,
    secondary: secondary2,
    mono: mono2,
    caps: caps2,
    italic: italic2,
    ...props
  }, ref) => {
    const finalClassName = [
      variant && styles$2[variant],
      className || "",
      balance2 ? styles$2.balance : "",
      secondary2 ? styles$2.secondary : "",
      brackets2 ? styles$2.brackets : "",
      mono2 ? styles$2.mono : "",
      caps2 ? styles$2.caps : "",
      italic2 ? styles$2.italic : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx(Component, { ref, className: finalClassName, ...props, children });
  }
);
const Text = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(TextBase, { ...props, children });
};
const createStyledText = (variant, defaultTag = "span") => {
  return React.forwardRef(
    (props, ref) => /* @__PURE__ */ jsx(TextBase, { ref, as: defaultTag, variant, ...props })
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
Text.displayName = "Text";
Text.H1.displayName = "Text.H1";
Text.H2.displayName = "Text.H2";
Text.H3.displayName = "Text.H3";
Text.H4.displayName = "Text.H4";
Text.H5.displayName = "Text.H5";
Text.Body.displayName = "Text.Body";
Text.Small.displayName = "Text.Small";
Text.Micro.displayName = "Text.Micro";
const Promobar = () => {
  return /* @__PURE__ */ jsx("div", { className: styles$3.promobar, children: /* @__PURE__ */ jsxs("div", { className: styles$3.content, children: [
    /* @__PURE__ */ jsx(SVGRocket, {}),
    /* @__PURE__ */ jsx(Text.Small, { children: "New feature launching soon - Stay tuned!" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$3.closeButton,
        type: "button",
        "aria-label": "Close promotion",
        children: "×"
      }
    )
  ] }) });
};
const SVGRocket = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "20",
      height: "21",
      viewBox: "0 0 20 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "2.82843",
            y1: "12.975",
            x2: "4.94975",
            y2: "10.8537",
            stroke: "currentColor",
            "stroke-width": "1.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            id: "fire",
            x1: "2.82843",
            y1: "17.2177",
            x2: "7.07107",
            y2: "12.9751",
            stroke: "currentColor",
            "stroke-width": "1.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "7.07111",
            y1: "17.2177",
            x2: "9.19243",
            y2: "15.0964",
            stroke: "currentColor",
            "stroke-width": "1.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.9168 8.65356L10.6287 12.6435L7.40255 9.41729L11.3918 4.12849L15.5695 4.47652L15.9168 8.65356Z",
            stroke: "currentColor",
            "stroke-width": "1.5"
          }
        )
      ]
    }
  );
};
function getPrevPathFromExtension(path, extension = ".mdx") {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match ? path.slice(
    path.lastIndexOf("/", path.length - match[0].length - 1) + 1,
    path.length - match[0].length
  ) : "";
}
function isArrayofObjects(input) {
  return Array.isArray(input) && input.every((item) => typeof item === "object" && item !== null);
}
function useStickyObserver(ref, options) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    (async () => {
      const observer = new IntersectionObserver(([e]) => {
        if (document.body) {
          document.body.dataset.sticky = e.intersectionRatio < 1 ? "true" : "false";
          setIsSticky(e.intersectionRatio < 1);
        }
      }, options);
      observer.observe(ref.current);
      return () => observer.disconnect();
    })();
  }, [ref, options]);
  return isSticky;
}
const nav = "_nav_ul7y4_1 grid-parent";
const navBackground = "_navBackground_ul7y4_79";
const navItem = "_navItem_ul7y4_125 small caps";
const wrapper = "_wrapper_ul7y4_169";
const menu = "_menu_ul7y4_183";
const logo = "_logo_ul7y4_193";
const checker = "_checker_ul7y4_203 checker grid-parent";
const stylesNav = {
  nav,
  navBackground,
  navItem,
  wrapper,
  menu,
  logo,
  checker
};
const Nav = () => {
  const ref = useRef(null);
  const isSticky = useStickyObserver(ref, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: [1]
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: stylesNav.navBackground }),
    /* @__PURE__ */ jsx("div", { className: stylesNav.checker }),
    /* @__PURE__ */ jsx(Promobar, {}),
    /* @__PURE__ */ jsx("nav", { ref, className: stylesNav.nav, "data-sticky": isSticky, children: /* @__PURE__ */ jsxs("div", { className: stylesNav.wrapper, children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: stylesNav.logo, children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsxs("menu", { className: stylesNav.menu, children: [
        /* @__PURE__ */ jsx(NavItem, { to: "/customers", children: "Customers" }),
        /* @__PURE__ */ jsx(NavItem, { to: "/pricing", children: "Pricing" })
      ] })
    ] }) })
  ] });
};
const NavItem = ({
  children,
  to
}) => {
  return /* @__PURE__ */ jsx(Link, { to, className: stylesNav.navItem, children });
};
const section$1 = "_section_2wvsd_1 grid-parent";
const styles$1 = {
  section: section$1
};
const Section = (props) => {
  const { children, className, theme: theme2, ...rest } = props;
  const themeValue = theme2 ? theme2 : "";
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: `${styles$1.section} ${className}`,
      "data-theme": themeValue,
      ...rest,
      children
    }
  );
};
const footer = "_footer_1bghh_1";
const content = "_content_1bghh_21";
const section = "_section_1bghh_39";
const socials = "_socials_1bghh_49";
const copyright = "_copyright_1bghh_61";
const links = "_links_1bghh_87";
const linksContent = "_linksContent_1bghh_103";
const styles = {
  footer,
  content,
  section,
  socials,
  copyright,
  links,
  linksContent
};
const Footer = (props) => {
  const { className } = props;
  return /* @__PURE__ */ jsxs("footer", { className: `${styles.footer} ${className ?? ""}`.trim(), children: [
    /* @__PURE__ */ jsxs(Section, { className: styles.section, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.socials, children: [
        /* @__PURE__ */ jsx(Text.H5, { children: "Socials" }),
        /* @__PURE__ */ jsxs("div", { className: styles.linksContent, children: [
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "https://x.com/hatchet_dev", target: "_blank", children: "X.com" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "https://github.com/hatchet-dev", target: "_blank", children: "GitHub" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "https://discord.com/invite/ZMeUafwH89", target: "_blank", children: "Discord" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/company/hatchet-run",
              target: "_blank",
              children: "LinkedIn"
            }
          ) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "mailto:contact@hatchet.run", target: "_blank", children: "Email" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles.copyright, children: [
        /* @__PURE__ */ jsx(Logo, { className: styles.logo }),
        /* @__PURE__ */ jsxs(Text.Micro, { secondary: true, mono: true, caps: true, children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Hatchet Technologies"
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles.content, children: /* @__PURE__ */ jsxs(Text.Micro, { secondary: true, mono: true, caps: true, children: [
          /* @__PURE__ */ jsx("a", { href: "https://trust.hatchet.run/", target: "_blank", children: "Security" }),
          " "
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles.links, children: [
        /* @__PURE__ */ jsx(Text.H5, { children: "Links" }),
        /* @__PURE__ */ jsxs("div", { className: styles.linksContent, children: [
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "https://docs.hatchet.run/home", target: "_blank", children: "Docs" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "Pricing" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx(Link, { to: "/customers", children: "Customers" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx("a", { href: "https://status.hatchet.run", target: "_blank", children: "Status" }) }),
          /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, caps: true, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.ycombinator.com/companies/hatchet-run",
              target: "_blank",
              children: "Jobs"
            }
          ) })
        ] })
      ] })
    ] }),
    " ",
    /* @__PURE__ */ jsx("div", { className: stylesNav.checker })
  ] });
};
const Favicon = "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e%20path%20{%20fill:%20%2303071A;%20color:%20%2303071A;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20path%20{%20fill:%20%23B8D9FF;%20color:%20%23B8D9FF;%20}%20}%20%3c/style%3e%3cpath%20d='M51.5%2045L65%2015L90.8177%2040.8177C94.3818%2044.3818%2096.1639%2046.1639%2096.8316%2048.2188C97.4189%2050.0264%2097.4189%2051.9736%2096.8316%2053.7812C96.1639%2055.8361%2094.3818%2057.6182%2090.8177%2061.1823L65%2087H44L79.255%2049.0331C80.438%2047.7591%2081.0295%2047.1221%2081.0581%2046.5789C81.083%2046.1072%2080.8842%2045.6514%2080.5216%2045.3486C80.1041%2045%2079.2348%2045%2077.4963%2045H51.5Z'%20fill='currentColor'/%3e%3cpath%20d='M48.5%2057L35%2087L9.18233%2061.1823C5.61818%2057.6182%203.83611%2055.8361%203.16841%2053.7812C2.58109%2051.9736%202.58109%2050.0264%203.16841%2048.2188C3.83611%2046.1639%205.61819%2044.3818%209.18234%2040.8177L35%2015H56L20.745%2052.9669C19.562%2054.2409%2018.9705%2054.8779%2018.9419%2055.4211C18.917%2055.8928%2019.1158%2056.3486%2019.4784%2056.6514C19.8959%2057%2020.7652%2057%2022.5037%2057H48.5Z'%20fill='currentColor'%20fill-opacity='0.7'/%3e%3c/svg%3e";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }, {
      title: "Hatchet"
    }, {
      name: "description",
      content: "Deploy More Resilient Apps. Hatchet is a platform for building distributed web apps that solves scaling problems like concurrency, fairness, and rate limiting. Instead of managing your own task queue or pub/sub system, you can use Hatchet to distribute your functions between a set of workers with minimal configuration or infrastructure."
    }],
    links: [{
      rel: "stylesheet",
      href: CSSGlobal
    }, {
      rel: "stylesheet",
      href: CSSUtils
    }, {
      rel: "icon",
      href: Favicon
    }]
  }),
  context: () => ({
    theme: "dark"
    // default theme
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  const childMatches = useChildMatches();
  const currentContext = childMatches[childMatches.length - 1]?.context;
  const theme2 = currentContext?.theme || "dark";
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme2, children: [
      /* @__PURE__ */ jsx(Nav, {}),
      /* @__PURE__ */ jsx(RootLayout, { children }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import("./index-CEJ9Yl-A.js");
const Route$4 = createFileRoute("/pricing/")({
  beforeLoad: ({
    context
  }) => ({
    ...context,
    theme: "light"
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const frontmatter$3 = {
  "slug": "dev-tester",
  "title": "Dev Tester",
  "description": "How a dev tester company used Hatchet to test their software.",
  "company": "Dev Tester",
  "industry": "Testing"
};
function _createMdxContent$3(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    hr: "hr",
    input: "input",
    li: "li",
    mark: "mark",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { Section: Section2 } = _components;
  if (!Section2) _missingMdxReference$1("Section");
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "Untapped potential"
    }), "\n", jsx(_components.p, {
      children: "In a constantly changing environment, companies must adapt to survive. The quest for growth, resilience, and a competitive edge demands continuous innovation and optimization in the face of emerging technologies, shifting markets, and intense competition."
    }), "\n", jsxs(_components.p, {
      children: ["This is an array ", jsx(_components.span, {
        "data-rehype-pretty-code-figure": "",
        children: jsx(_components.code, {
          "data-language": "js",
          "data-theme": "Hatchet",
          children: jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "3"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "]"
            })]
          })
        })
      }), " of numbers 1 through 3.\r\nThe name of the function is ", jsx(_components.span, {
        "data-rehype-pretty-code-figure": "",
        children: jsx(_components.code, {
          "data-language": ".token",
          "data-theme": "Hatchet",
          children: jsx(_components.span, {
            style: {
              color: "#006E8C"
            },
            children: "getStringLength"
          })
        })
      }), "."]
    }), "\n", jsx(_components.h1, {
      children: "In a constantly changing environment, companies must adapt to survive."
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: " function*"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " FibonacciSequence"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "() {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "  let"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "a"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "b"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "0"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "];"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "  while"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#F97E72"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    yield"
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: " a"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    ["
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "a"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "b"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "b"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "a"
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: " +"
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: " b"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "];"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "plaintext",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "plaintext",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "export function* FibonacciSequence() {"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "  let [a, b] = [0, 1];"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "  while (true) {"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "    yield a;"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "    [a, b] = [b, a + b];"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        className: "has-highlighted",
        tabIndex: "0",
        "data-language": "css",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "css",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "code"
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: " >"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "data-line"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D50"
              },
              children: "::before"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "  counter-increment"
            }), jsx(_components.span, {
              style: {
                color: "#99958A"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#3291FF"
              },
              children: " line"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "  content"
            }), jsx(_components.span, {
              style: {
                color: "#99958A"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#3291FF"
              },
              children: " counter"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#3291FF"
              },
              children: "line"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "highlighted",
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "  /* "
            }), jsx(_components.mark, {
              "data-highlighted-chars": "",
              children: jsx(_components.span, {
                style: {
                  color: "#637896",
                  fontStyle: "italic"
                },
                children: "Other"
              })
            }), jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: " styling */"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "  display"
            }), jsx(_components.span, {
              style: {
                color: "#99958A"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#3291FF"
              },
              children: " "
            }), jsx(_components.mark, {
              "data-highlighted-chars": "",
              children: jsx(_components.span, {
                style: {
                  color: "#3291FF"
                },
                children: "inline-block"
              })
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "}"
            })
          }), "\n", jsxs(_components.span, {
            className: "highlighted",
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "code"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "data-line-numbers-max-digits="
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"2"'
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "data-line"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D50"
              },
              children: "::before"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "  width"
            }), jsx(_components.span, {
              style: {
                color: "#99958A"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#F97E72"
              },
              children: " "
            }), jsx(_components.mark, {
              "data-highlighted-chars": "",
              children: jsx(_components.span, {
                style: {
                  color: "#F97E72"
                },
                children: "2rem"
              })
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsxs(_components.mark, {
              "data-highlighted-chars-mark": "",
              "data-highlighted-chars": "",
              children: [jsx(_components.span, {
                style: {
                  color: "#006E8C"
                },
                children: "code"
              }), jsx(_components.span, {
                style: {
                  color: "#BBBBBB"
                },
                children: "["
              }), jsx(_components.span, {
                style: {
                  color: "#BAD61C"
                },
                children: "data-line-numbers-max-digits="
              }), jsx(_components.span, {
                style: {
                  color: "#FF8B39"
                },
                children: '"3"'
              }), jsx(_components.span, {
                style: {
                  color: "#BBBBBB"
                },
                children: "]"
              })]
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "data-line"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D50"
              },
              children: "::before"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B8D9FF"
              },
              children: "  width"
            }), jsx(_components.span, {
              style: {
                color: "#99958A"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#F97E72"
              },
              children: " 3rem"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        className: "has-highlighted",
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: " fib"
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " FibonacciSequence"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "();"
            })]
          }), "\n", jsxs(_components.span, {
            className: "highlighted",
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "fib"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "next"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#2EE2FA"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "; "
            }), jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "// 0"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DC"
              },
              children: "fib"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "next"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#2EE2FA"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "; "
            }), jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "// 1"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      children: "Autolink literals"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsx(_components.h4, {
      children: "Footnote"
    }), "\n", jsxs(_components.p, {
      children: ["A note", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", jsx(_components.h4, {
      children: "Tables"
    }), "\n", jsx(_components.table, {
      children: jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "a"
          }), jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "b"
          }), jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "c"
          }), jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "d"
          })]
        })
      })
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Available"
          }), jsx(_components.th, {}), jsx(_components.th, {}), jsx(_components.th, {}), jsx(_components.th, {
            children: "Process"
          }), jsx(_components.th, {
            children: "Allocation"
          }), jsx(_components.th, {}), jsx(_components.th, {}), jsx(_components.th, {}), jsx(_components.th, {
            children: "Max"
          }), jsx(_components.th, {}), jsx(_components.th, {}), jsx(_components.th, {})]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "A"
          }), jsx(_components.td, {
            children: "B"
          }), jsx(_components.td, {
            children: "C"
          }), jsx(_components.td, {
            children: "D"
          }), jsx(_components.td, {}), jsx(_components.td, {
            children: "A"
          }), jsx(_components.td, {
            children: "B"
          }), jsx(_components.td, {
            children: "C"
          }), jsx(_components.td, {
            children: "D"
          }), jsx(_components.td, {
            children: "A"
          }), jsx(_components.td, {
            children: "B"
          }), jsx(_components.td, {
            children: "C"
          }), jsx(_components.td, {
            children: "D"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "2"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "P0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "2"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "2"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {
            children: "P1"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "7"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "0"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {
            children: "P2"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "3"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "4"
          }), jsx(_components.td, {
            children: "2"
          }), jsx(_components.td, {
            children: "3"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "6"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {
            children: "P3"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "6"
          }), jsx(_components.td, {
            children: "3"
          }), jsx(_components.td, {
            children: "2"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "6"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "2"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {}), jsx(_components.td, {
            children: "P4"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "4"
          }), jsx(_components.td, {
            children: "0"
          }), jsx(_components.td, {
            children: "6"
          }), jsx(_components.td, {
            children: "5"
          }), jsx(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Syntax"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Header"
          }), jsx(_components.td, {
            children: "Title"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Paragraph"
          }), jsx(_components.td, {
            children: "Text"
          })]
        })]
      })]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "This"
          }), jsx(_components.th, {
            children: "is"
          }), jsx(_components.th, {
            children: "a"
          })]
        })
      }), jsx(_components.tbody, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "simple"
          }), jsx(_components.td, {
            children: "table"
          }), jsx(_components.td, {
            children: "example"
          })]
        })
      })]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Syntax"
          }), jsx(_components.th, {
            children: "Description"
          }), jsx(_components.th, {
            children: "Test Text"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Header"
          }), jsx(_components.td, {
            children: "Title"
          }), jsx(_components.td, {
            children: "Title"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Paragraph"
          }), jsx(_components.td, {
            children: "Text"
          }), jsx(_components.td, {
            children: "Title"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Header"
          }), jsx(_components.td, {
            children: "Title"
          }), jsx(_components.td, {
            children: "Title"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Paragraph"
          }), jsx(_components.td, {
            children: "Text"
          }), jsx(_components.td, {
            children: "Title"
          })]
        })]
      })]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "In Stock"
          }), jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Price"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Python Hat"
          }), jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "True"
          }), jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "23.99"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "SQL Hat"
          }), jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "True"
          }), jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "23.99"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Codecademy Tee"
          }), jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "False"
          }), jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "19.99"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Codecademy Hoodie"
          }), jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "False"
          }), jsx(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "42.99"
          })]
        })]
      })]
    }), "\n", jsx(_components.h4, {
      children: "Strikethrough"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.del, {
        children: "one"
      }), " or ", jsx(_components.del, {
        children: "two"
      }), " tildes."]
    }), "\n", jsx(_components.h4, {
      children: "Tasklist"
    }), "\n", jsxs(_components.ul, {
      className: "contains-task-list",
      children: ["\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "We do not just present theories or generic advice–we conduct a thorough investigation to uncover the often-hidden potential within this crucial cross-company discipline."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.p, {
      children: "Yet, a powerful source of untapped potential is often overlooked by companies: effective net working capital (NWC) management.\r\nOur white paper embarks on a captivating investigative journey, delving into the world of NWC management. We do not just present theories or generic advice - we conduct a thorough investigation to uncover the often-hidden potential within this crucial cross-company discipline."
    }), "\n", jsx(_components.p, {
      children: "We do not just present theories or generic advice–we conduct a thorough\r\ninvestigation to uncover the often-hidden potential within this crucial\r\ncross-company discipline."
    }), "\n", jsxs(Section2, {
      theme: "light",
      children: [jsx(_components.h3, {
        children: "Here is why we believe a deep dive into NWC management is needed."
      }), jsx(_components.h1, {
        children: "Working Capital Management"
      }), jsx(_components.p, {
        children: "Yet, a powerful source of untapped potential is often overlooked by companies:\r\neffective net working capital (NWC) management. Our white paper embarks on a\r\ncaptivating investigative journey, delving into the world of NWC management.\r\nWe do not just present theories or generic advice - we conduct a thorough\r\ninvestigation to uncover the often-hidden potential within this crucial\r\ncross-company discipline."
      })]
    }), "\n", jsx(_components.p, {
      children: "We do not just present theories or generic advice–we conduct a thorough\r\ninvestigation to."
    }), "\n", jsx(_components.h2, {
      children: "A new emerging trend"
    }), "\n", jsx(_components.p, {
      children: "The figure below dives deeper into the private market choices. The left graph shows the standardized allocation to the different asset classes, delineated by vintage. With each area being roughly equal in size, the portfolio appears to be vintage-diversified. The right graph shows the commitments to each private asset by year, as a percentage of the total wealth in the same year. During the ramp up phase, we commit more. Overall the allocations remain relatively stable through time, ensuring vintage diversification."
    }), "\n", jsx(_components.h3, {
      children: "Let's break this down"
    }), "\n", jsx(_components.p, {
      children: "The structure of our optimization alogorithm allows us to gradually remove the complicating assumptions that private assets introduce, and thereby converge to the mean-variance benchmark. We start by removing the vintage specific volatility and setting to zero. Running the same optimization we achieve the new projected holdings and portfolio weights below. Unsurprisingly we again start with the pure-public mean-variance optimum at the start. But interestingly, we now converge neatly to the mean-variance optimimum over time. The lower allocation to private assets that we saw above is thus explained entirely by vintage specific volatility."
    }), "\n", jsx(_components.h2, {
      children: "In practice"
    }), "\n", jsx(_components.p, {
      children: "With no vintage specific volatility, the benefit of vintage diversification disappears entirely, and we see very concentrated investments into some vintages. Looking at the commitments below, the optimization tries to bulk up on private assets as soon as possible by making very large investments at the start, and then committing nothing until year five."
    }), "\n", jsx(_components.h4, {
      children: "Let's break this down"
    }), "\n", jsx(_components.p, {
      children: "This post outlines some of the considerations of building a strategic asset allocation plan. Naturally, not everything goes according to plan. The good news is that we can just re-run the plan starting from whatever situation we find ourselves in. So like in a typical application, we make a projection for 20 years, execute the first year, and then roll forward and plan again for the next 20 years given the prevailing private holdings and capital market assumptions, and so on. Therefore, asset allocation with private assets is not a one-of exercise, but a repeated plan that is adjusted based on realized calls and distributions."
    }), "\n", jsx(_components.h5, {
      children: "Let's break this down Despite its simplicity, our analysis reveals important insights for allocators."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Investors should not steer towards classical mean-variance allocations, as they are suboptimal and will overallocate to private markets."
      }), "\n", jsx(_components.li, {
        children: "Smaller investors should hold less in private assets compared to larger ones, as they cannot diverisify between funds as efficiently."
      }), "\n", jsx(_components.li, {
        children: "Commitments should be smoothed out over time to ensure an allocation remains diversified between vintages. This is especially important for smaller investors."
      }), "\n", jsx(_components.li, {
        children: "When a portfolio is not in equilibrium, the liquid sleeve should be optimized to be as complementary as possible to the private assets that do exist. When no private assets are held yet, the optimum aligns with the mean-variance optimum excluding private assets."
      }), "\n"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "Investors should not steer towards classical mean-variance allocations, as they are suboptimal and will overallocate to private markets."
      }), "\n", jsx(_components.li, {
        children: "Smaller investors should hold less in private assets compared to larger ones, as they cannot diverisify between funds as efficiently."
      }), "\n", jsx(_components.li, {
        children: "Commitments should be smoothed out over time to ensure an allocation remains diversified between vintages. This is especially important for smaller investors."
      }), "\n", jsx(_components.li, {
        children: "When a portfolio is not in equilibrium, the liquid sleeve should be optimized to be as complementary as possible to the private assets that do exist. When no private assets are held yet, the optimum aligns with the mean-variance optimum excluding private assets."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Despite the importance of NWC management, many companies struggle to optimize\r\ntheir working capital. This is often due to a lack of understanding of the key\r\ndrivers of NWC and the potential benefits of effective management. Our white\r\npaper aims to address this gap by providing a comprehensive overview of NWC\r\nmanagement, including key concepts, best practices, and case studies. We also\r\noffer practical recommendations for companies looking to improve their working\r\ncapital performance."
    }), "\n", jsx(_components.p, {
      children: "However you choose to engage with our research, we hope you find it valuable and informative. We look forward to hearing\r\nyour feedback and continuing the conversation on how we can help you unlock the full potential of your working capital."
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["Big note. ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3(props);
}
function _missingMdxReference$1(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$3,
  frontmatter: frontmatter$3
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$2 = {
  "slug": "ecommerce-platform",
  "title": "Building Resilient Order Processing",
  "description": "A major e-commerce platform replaced their custom queue system with Hatchet, reducing infrastructure costs by 60% while improving reliability.",
  "company": "ShopFlow",
  "industry": "E-commerce"
};
function _createMdxContent$2(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { Button } = _components;
  if (!Button) _missingMdxReference("Button");
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      children: "The Challenge"
    }), "\n", jsx(_components.p, {
      children: "ShopFlow, a major e-commerce platform processing over 1 million orders monthly, faced critical challenges with their existing order processing infrastructure during peak shopping periods:"
    }), "\n", jsx(Button, {
      href: "https://www.google.com",
      children: "Click me"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "System failures"
        }), " during Black Friday and holiday seasons", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.strong, {
              children: "System failures"
            }), " during Black Friday and holiday seasons"]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.strong, {
              children: "System failures"
            }), " during Black Friday and holiday seasons"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Lost orders"
        }), " due to queue processing failures"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Inconsistent inventory updates"
        }), " causing overselling"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Manual intervention"
        }), " required for failed payment processing"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Complex retry logic"
        }), " that was difficult to maintain and debug"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Their legacy system combined multiple technologies (RabbitMQ, custom workers, and stored procedures) creating a fragile pipeline that required constant monitoring."
    }), "\n", jsx(_components.h2, {
      children: "The Solution"
    }), "\n", jsx(_components.p, {
      children: "ShopFlow implemented Hatchet to create a unified, resilient order processing workflow that could handle their peak traffic demands:"
    }), "\n", jsx(_components.h3, {
      children: "Order Processing Workflow"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "python",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "python",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "@hatchet.workflow"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "def"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " process_order"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "):"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    order_data "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " context."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "workflow_input"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 1: Validate order"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    validated_order "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " validate_order."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(order_data)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 2: Check inventory (with automatic retries)"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    inventory_check "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " check_inventory."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated_order)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 3: Process payment"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    payment_result "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " process_payment."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated_order, inventory_check)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 4: Update inventory"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    inventory_update "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " update_inventory."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated_order, payment_result)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 5: Generate shipping label"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    shipping_label "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " create_shipping_label."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated_order, inventory_update)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 6: Send confirmation"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    send_confirmation."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated_order, shipping_label)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " {"
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"order_id"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": validated_order["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"id"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "], "
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"status"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"completed"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "}"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "Key Implementation Features"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Atomic transactions"
        }), " ensuring data consistency"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automatic retries"
        }), " with exponential backoff for transient failures"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Checkpointing"
        }), " allowing workflows to resume after interruptions"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Dead letter handling"
        }), " for permanently failed orders"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time monitoring"
        }), " with comprehensive dashboards"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Implementation Process"
    }), "\n", jsx(_components.h3, {
      children: "Phase 1: Critical Path Migration (2 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Order validation and inventory checking"
      }), "\n", jsx(_components.li, {
        children: "Payment processing with retry logic"
      }), "\n", jsx(_components.li, {
        children: "Basic monitoring and alerting"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Phase 2: Enhanced Features (4 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Shipping integration with multiple carriers"
      }), "\n", jsx(_components.li, {
        children: "Customer notification workflows"
      }), "\n", jsx(_components.li, {
        children: "Return and refund processing"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Phase 3: Optimization (2 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Performance tuning for peak load"
      }), "\n", jsx(_components.li, {
        children: "Advanced monitoring and analytics"
      }), "\n", jsx(_components.li, {
        children: "Integration with existing business intelligence tools"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "The Results"
    }), "\n", jsx(_components.p, {
      children: "The Hatchet implementation delivered transformational improvements to ShopFlow's order processing:"
    }), "\n", jsx(_components.h3, {
      children: "Reliability Metrics"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "99.99% order completion rate"
        }), " during peak traffic periods"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Zero lost orders"
        }), " during the last Black Friday (previously ~0.1% loss rate)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automatic recovery"
        }), " from 99.8% of transient failures"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Sub-second detection"
        }), " of processing issues"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Performance Improvements"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "3x faster"
        }), " order processing during peak hours"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "50% reduction"
        }), " in payment processing timeouts"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "90% fewer"
        }), " manual interventions required"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time inventory"
        }), " updates eliminating overselling"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Cost Benefits"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "60% infrastructure cost reduction"
        }), " by optimizing resource usage"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "$2M annual savings"
        }), " from eliminating order processing errors"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "3 FTE reduction"
        }), " in operations team requirements"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Faster deployments"
        }), " reducing engineering overhead"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Architecture Overview"
    }), "\n", jsx(_components.p, {
      children: "The new order processing architecture built on Hatchet:"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "mermaid",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "mermaid",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "graph TD"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    A[Customer Order] --> B[Order Validation]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> C[Inventory Check]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    C --> D[Payment Processing]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    D --> E[Inventory Update]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    E --> F[Shipping Label]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    F --> G[Customer Notification]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    H[Failed Orders] --> I[Dead Letter Queue]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    I --> J[Manual Review]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> K[Order Analytics]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    C --> K"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    D --> K"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    E --> K"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      children: "Customer Impact"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: `"Since implementing Hatchet, we've had zero customer-facing order processing failures during our busiest shopping periods. Our customers now have complete confidence that their orders will be processed correctly and on time."`
      }), "\n", jsx(_components.p, {
        children: jsx(_components.strong, {
          children: "Mike Rodriguez, CTO at ShopFlow"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Customer satisfaction metrics showed significant improvement:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "25% increase"
        }), " in customer satisfaction scores"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "80% reduction"
        }), " in order-related support tickets"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "15% increase"
        }), " in repeat purchase rates"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Near-zero complaints"
        }), " about lost or delayed order processing"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Lessons Learned"
    }), "\n", jsx(_components.h3, {
      children: "What Worked Well"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Incremental migration"
        }), ": Starting with the core order flow reduced risk"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Comprehensive monitoring"
        }), ": Early visibility into workflow performance was crucial"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Team training"
        }), ": Investing in developer education accelerated adoption"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Testing strategy"
        }), ": Extensive load testing prevented issues during peak periods"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Key Recommendations"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Plan for peak loads"
        }), " from day one - don't wait for traffic spikes"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Implement monitoring"
        }), " before going live with production workflows"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Use feature flags"
        }), " to gradually roll out new workflow capabilities"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Document everything"
        }), " - workflow dependencies and retry policies"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Future Roadmap"
    }), "\n", jsx(_components.p, {
      children: "With their order processing foundation solid, ShopFlow is expanding Hatchet usage to:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Personalization workflows"
        }), " for product recommendations"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Fraud detection pipelines"
        }), " with machine learning integration"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Supply chain optimization"
        }), " with vendor integration workflows"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Customer service automation"
        }), " for common support requests"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The success of the order processing implementation has made Hatchet the standard choice for all new background processing requirements at ShopFlow."
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "slug": "fintech-compliance",
  "title": "Ensuring Financial Compliance at Scale",
  "description": "How a fintech company automated their compliance workflows using Hatchet's durable task execution, processing 100k+ transactions daily.",
  "company": "FinanceForward",
  "industry": "Financial Technology"
};
function _createMdxContent$1(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "Ensuring Financial Compliance at Scale"
    }), "\n", jsx(_components.h2, {
      children: "The Challenge"
    }), "\n", jsx(_components.p, {
      children: "FinanceForward, a rapidly growing fintech company, needed to process over 100,000 financial transactions daily while maintaining strict regulatory compliance. Their existing system struggled with:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Compliance workflow complexity"
        }), " across multiple regulatory frameworks"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Audit trail inconsistencies"
        }), " during system failures"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Manual oversight requirements"
        }), " causing processing delays"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Risk assessment bottlenecks"
        }), " during high-volume periods"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Regulatory reporting delays"
        }), " affecting compliance deadlines"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The company faced potential regulatory penalties and needed a solution that could guarantee compliance workflow execution even during system failures."
    }), "\n", jsx(_components.h2, {
      children: "The Solution"
    }), "\n", jsx(_components.p, {
      children: "FinanceForward implemented Hatchet to create a comprehensive compliance automation platform with guaranteed execution and complete audit trails:"
    }), "\n", jsx(_components.h3, {
      children: "Compliance Workflow Architecture"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "python",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "python",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "@hatchet.workflow"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "def"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " process_financial_transaction"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "):"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    transaction "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " context."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "workflow_input"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 1: Initial validation"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    validated "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " validate_transaction."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(transaction)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 2: Risk assessment"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    risk_assessment "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " assess_transaction_risk."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 3: Compliance checks"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    compliance_result "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " run_compliance_checks."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated, risk_assessment)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 4: Regulatory reporting"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " compliance_result["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"requires_reporting"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]:"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "        reporting "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " generate_regulatory_reports."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated, compliance_result)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 5: Final approval or rejection"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    final_decision "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " make_final_decision."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated, compliance_result)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Step 6: Audit trail completion"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    complete_audit_trail."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(validated, final_decision)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " final_decision"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "Key Compliance Features"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Immutable audit trails"
        }), " with complete transaction history"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automatic compliance checks"
        }), " against multiple regulatory frameworks"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Risk scoring"
        }), " with configurable thresholds and escalation"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Regulatory reporting"
        }), " with automated submission deadlines"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Manual review workflows"
        }), " for high-risk transactions"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Implementation Strategy"
    }), "\n", jsx(_components.h3, {
      children: "Phase 1: Core Compliance Engine (6 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Transaction validation and risk assessment workflows"
      }), "\n", jsx(_components.li, {
        children: "Basic audit trail generation and storage"
      }), "\n", jsx(_components.li, {
        children: "Integration with existing transaction processing systems"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Phase 2: Regulatory Integration (8 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Automated reporting to regulatory bodies"
      }), "\n", jsx(_components.li, {
        children: "Enhanced risk scoring with machine learning models"
      }), "\n", jsx(_components.li, {
        children: "Manual review and escalation workflows"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Phase 3: Advanced Features (4 weeks)"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Real-time compliance monitoring and alerting"
      }), "\n", jsx(_components.li, {
        children: "Predictive compliance analytics"
      }), "\n", jsx(_components.li, {
        children: "Integration with external compliance data sources"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "The Results"
    }), "\n", jsx(_components.p, {
      children: "The Hatchet-powered compliance platform transformed FinanceForward's regulatory operations:"
    }), "\n", jsx(_components.h3, {
      children: "Compliance Metrics"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "100% audit trail completeness"
        }), " with no gaps in transaction history"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "99.95% automated compliance"
        }), " processing without manual intervention"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Sub-minute compliance decisions"
        }), " for standard transactions"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Zero regulatory penalties"
        }), " since implementation"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Operational Efficiency"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "80% reduction"
        }), " in compliance processing time"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "90% fewer"
        }), " manual compliance reviews required"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time regulatory reporting"
        }), " eliminating deadline stress"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated escalation"
        }), " for high-risk transactions"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Risk Management"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "75% improvement"
        }), " in fraud detection accuracy"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time risk scoring"
        }), " for all transactions"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated suspicious activity reporting"
        }), " to regulatory authorities"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Enhanced customer due diligence"
        }), " workflows"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Architecture Deep Dive"
    }), "\n", jsx(_components.p, {
      children: "The compliance platform leverages Hatchet's durability guarantees:"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "mermaid",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "mermaid",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "graph TD"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    A[Transaction Input] --> B[Validation Engine]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> C[Risk Assessment AI]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    C --> D[Compliance Rules Engine]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    D --> E[Regulatory Reporting]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    D --> F[Manual Review Queue]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    E --> G[Audit Trail Storage]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    F --> H[Compliance Officer Review]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    H --> G"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    G --> I[Regulatory Submission]"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "Data Flow and Durability"
    }), "\n", jsx(_components.p, {
      children: "Every compliance workflow step is durably logged with:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Immutable timestamps"
        }), " for all processing steps"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Complete input/output capture"
        }), " for audit requirements"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Failure recovery"
        }), " with exact state restoration"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Regulatory-compliant data retention"
        }), " with automated archival"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Regulatory Impact"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: `"Hatchet's guaranteed execution has been game-changing for our compliance operations. We can confidently tell regulators that every transaction has been processed according to our compliance policies, with complete audit trails available instantly."`
      }), "\n", jsx(_components.p, {
        children: jsx(_components.strong, {
          children: "Jennifer Liu, Chief Compliance Officer at FinanceForward"
        })
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Regulatory Benefits"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Complete audit trails"
        }), " available within seconds of regulator requests"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated compliance reporting"
        }), " eliminating manual report generation"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Guaranteed SLA compliance"
        }), " with built-in workflow monitoring"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time regulatory notifications"
        }), " for suspicious activities"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Audit Performance"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "99.9% audit readiness"
        }), " with instant report generation"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Zero data inconsistencies"
        }), " during regulatory examinations"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated evidence collection"
        }), " for compliance investigations"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time compliance dashboard"
        }), " for executive oversight"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Compliance-Specific Features"
    }), "\n", jsx(_components.h3, {
      children: "Risk Scoring Engine"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "python",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "python",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "@hatchet.step"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "def"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " assess_transaction_risk"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "):"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    transaction "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " context."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "step_input"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Multiple risk factors"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    risk_factors "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "amount_risk"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "calculate_amount_risk"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(transaction["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"amount"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "counterparty_risk"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "assess_counterparty"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(transaction["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"recipient"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "geographic_risk"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "evaluate_geographic_risk"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(transaction["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"destination"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "behavioral_risk"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "analyze_behavioral_patterns"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(transaction["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"sender"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Aggregate risk score"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    total_risk "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " calculate_composite_risk"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(risk_factors)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Determine required approvals"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    approval_requirements "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " determine_approvals"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(total_risk)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "risk_score"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": total_risk,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "risk_factors"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": risk_factors,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '        "approval_required"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ": approval_requirements"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    }"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "Automated Reporting"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Daily regulatory filings"
        }), " with automatic submission"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Suspicious activity reports"
        }), " generated and filed automatically"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Cross-border payment notifications"
        }), " to relevant authorities"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Large transaction reporting"
        }), " with real-time thresholds"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Lessons Learned"
    }), "\n", jsx(_components.h3, {
      children: "Critical Success Factors"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Compliance-first design"
        }), ": Built workflows around regulatory requirements"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Immutable audit trails"
        }), ": Never compromise on data integrity"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated testing"
        }), ": Comprehensive compliance rule testing"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Regulatory liaison"
        }), ": Close collaboration with compliance teams"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Implementation Best Practices"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Start with highest-risk workflows"
        }), " to maximize compliance impact"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Invest heavily in monitoring"
        }), " - compliance failures are expensive"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Plan for regulatory changes"
        }), " with configurable rule engines"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Document everything"
        }), " - compliance requires extensive documentation"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Future Compliance Roadmap"
    }), "\n", jsx(_components.p, {
      children: "With their core compliance infrastructure solid, FinanceForward is expanding to:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Cross-border compliance"
        }), " with international regulatory frameworks"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "AI-powered compliance monitoring"
        }), " for emerging risk patterns"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time regulatory intelligence"
        }), " with automated rule updates"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Blockchain transaction compliance"
        }), " for cryptocurrency operations"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The Hatchet foundation has enabled FinanceForward to scale their compliance operations while maintaining the strict reliability requirements of financial services regulation."
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "slug": "tech-startup-ai",
  "title": "Scaling AI Workloads with Zero Downtime",
  "description": "How a fast-growing AI startup used Hatchet to process millions of ML inference tasks daily while maintaining sub-second latency.",
  "company": "AI Dynamics Inc.",
  "industry": "Artificial Intelligence"
};
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "Scaling AI Workloads with Zero Downtime"
    }), "\n", jsx(_components.h2, {
      children: "The Challenge"
    }), "\n", jsx(_components.p, {
      children: "AI Dynamics Inc., a fast-growing artificial intelligence startup, was struggling with their existing task processing infrastructure. As their customer base grew from hundreds to thousands of users, their homegrown queue system began showing serious limitations:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Processing bottlenecks"
        }), " during peak usage hours"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Failed ML inference tasks"
        }), " with no retry mechanism"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Infrastructure complexity"
        }), " requiring constant manual intervention"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Inconsistent performance"
        }), " affecting customer SLI commitments"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Their previous system used a combination of Redis queues and custom Python workers, which required significant engineering effort to maintain and scale."
    }), "\n", jsx(_components.h2, {
      children: "The Solution"
    }), "\n", jsx(_components.p, {
      children: "AI Dynamics chose Hatchet to replace their entire background task infrastructure. The migration involved:"
    }), "\n", jsx(_components.h3, {
      children: "1. Task Migration"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "python",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "python",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "# Before: Custom Redis queue implementation"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "@celery.task"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "def"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " process_ml_inference"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "model_id"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "input_data"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "):"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Complex error handling and retry logic"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    pass"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "# After: Hatchet workflow"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "@hatchet.workflow"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "def"
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: " process_ml_inference"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B540DC",
                fontStyle: "italic"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "):"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    model_id "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " context."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "workflow_input"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"model_id"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    input_data "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " context."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "workflow_input"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "()["
            }), jsx(_components.span, {
              style: {
                color: "#FF8B39"
              },
              children: '"input_data"'
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#637896",
                fontStyle: "italic"
              },
              children: "    # Automatic retries and error handling"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "    result "
            }), jsx(_components.span, {
              style: {
                color: "#FFFFFFEE"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " run_inference."
            }), jsx(_components.span, {
              style: {
                color: "#006E8C"
              },
              children: "call"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: "(model_id, input_data)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#BAD61C"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#B540DCFF"
              },
              children: " result"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      children: "2. Workflow Orchestration"
    }), "\n", jsx(_components.p, {
      children: "The team restructured their ML pipeline into discrete, composable steps:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Data preprocessing"
        }), " with automatic validation"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Model loading"
        }), " with intelligent caching"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Inference execution"
        }), " with checkpointing"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Result post-processing"
        }), " and delivery"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "3. Infrastructure Simplification"
    }), "\n", jsx(_components.p, {
      children: "By adopting Hatchet, AI Dynamics was able to:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Remove Redis cluster management"
      }), "\n", jsx(_components.li, {
        children: "Eliminate custom worker monitoring"
      }), "\n", jsx(_components.li, {
        children: "Reduce deployment complexity by 70%"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "The Results"
    }), "\n", jsx(_components.p, {
      children: "The migration to Hatchet delivered immediate and measurable improvements:"
    }), "\n", jsx(_components.h3, {
      children: "Performance Metrics"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "99.9% uptime"
        }), " during peak ML inference periods"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Sub-35ms P95 latency"
        }), " for task assignment"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "3x throughput increase"
        }), " without additional infrastructure"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Zero data loss"
        }), " during processing failures"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Operational Benefits"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "60% reduction"
        }), " in infrastructure management overhead"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Automated failover"
        }), " during instance failures"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time monitoring"
        }), " with built-in observability"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Simplified deployments"
        }), " with blue-green workflows"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      children: "Cost Impact"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "40% infrastructure cost reduction"
        }), " through better resource utilization"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "2 FTE savings"
        }), " in DevOps engineering time"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Faster time-to-market"
        }), " for new ML features"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Key Learnings"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: '"Hatchet allowed us to focus on our core AI capabilities instead of building and maintaining queue infrastructure. The built-in durability and retry mechanisms gave us confidence that our customer workloads would complete successfully, even during infrastructure hiccups."'
      }), "\n", jsx(_components.p, {
        children: jsx(_components.strong, {
          children: "Sarah Chen, VP of Engineering at AI Dynamics"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The migration highlighted several important factors for success:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Start small"
        }), ": Begin with non-critical workflows to build confidence"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Leverage durability"
        }), ": Use Hatchet's checkpointing for long-running ML tasks"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monitor early"
        }), ": Set up observability from day one to track performance"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Plan for scale"
        }), ": Design workflows with horizontal scaling in mind"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      children: "Technical Architecture"
    }), "\n", jsx(_components.p, {
      children: "The final architecture leveraged Hatchet's distributed processing capabilities:"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        tabIndex: "0",
        "data-language": "mermaid",
        "data-theme": "Hatchet",
        children: jsxs(_components.code, {
          "data-language": "mermaid",
          "data-theme": "Hatchet",
          style: {
            display: "grid"
          },
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "graph TB"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    A[API Gateway] --> B[Hatchet Workflows]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> C[ML Preprocessing]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> D[Model Inference]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    B --> E[Result Processing]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    C --> F[Data Validation]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    D --> G[GPU Clusters]"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#BBBBBB"
              },
              children: "    E --> H[Customer Delivery]"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This distributed approach enabled AI Dynamics to scale individual components independently based on demand patterns."
    }), "\n", jsx(_components.h2, {
      children: "Looking Forward"
    }), "\n", jsx(_components.p, {
      children: "With Hatchet handling their core infrastructure, AI Dynamics is now focusing on:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Advanced ML pipelines"
        }), " with multi-step model ensembles"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Real-time inference"
        }), " for sub-second response requirements"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Global deployment"
        }), " across multiple cloud regions"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Enhanced observability"
        }), " with custom metrics and alerting"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The solid foundation provided by Hatchet has enabled the engineering team to innovate faster while maintaining the reliability their customers depend on."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const $$splitComponentImporter$3 = () => import("./index-zLXTKQic.js");
const Route$3 = createFileRoute("/customers/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const globObjects = Object.entries(/* @__PURE__ */ Object.assign({
  "/src/content/case-studies/dev-tester/index.mdx": __vite_glob_0_0,
  "/src/content/case-studies/ecommerce-platform/index.mdx": __vite_glob_0_1,
  "/src/content/case-studies/fintech-compliance/index.mdx": __vite_glob_0_2,
  "/src/content/case-studies/tech-startup-ai/index.mdx": __vite_glob_0_3
}));
const caseStudies = globObjects.map(([url, module]) => {
  return {
    slug: getPrevPathFromExtension(url),
    frontmatter: module.frontmatter,
    Content: module?.default
  };
});
const $$splitComponentImporter$2 = () => import("./index-Cw8RdzP8.js");
const Route$2 = createFileRoute("/brand/")({
  beforeLoad: ({
    context
  }) => ({
    ...context,
    theme: "light"
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CqynqS2z.js");
const Route$1 = createFileRoute("/(home)/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./_caseStudy-Dfo7rFLt.js");
const $$splitErrorComponentImporter = () => import("./_caseStudy-C_phX3vg.js");
const $$splitComponentImporter = () => import("./_caseStudy-BKfXM9O8.js");
const Route = createFileRoute("/customers/$caseStudy")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const post = caseStudies.find((p) => p.slug === params.caseStudy);
    if (!post) throw new Error("Post not found");
    return {
      frontmatter: post.frontmatter,
      slug: post.slug
    };
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const PricingIndexRoute = Route$4.update({
  id: "/pricing/",
  path: "/pricing/",
  getParentRoute: () => Route$5
});
const CustomersIndexRoute = Route$3.update({
  id: "/customers/",
  path: "/customers/",
  getParentRoute: () => Route$5
});
const BrandIndexRoute = Route$2.update({
  id: "/brand/",
  path: "/brand/",
  getParentRoute: () => Route$5
});
const homeIndexRoute = Route$1.update({
  id: "/(home)/",
  path: "/",
  getParentRoute: () => Route$5
});
const CustomersCaseStudyRoute = Route.update({
  id: "/customers/$caseStudy",
  path: "/customers/$caseStudy",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  CustomersCaseStudyRoute,
  homeIndexRoute,
  BrandIndexRoute,
  CustomersIndexRoute,
  PricingIndexRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: (err) => /* @__PURE__ */ jsx("p", { children: err.error.stack }),
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx("p", { children: "not found" }),
    scrollRestoration: true,
    defaultViewTransition: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  Section as S,
  Text as T,
  caseStudies as c,
  isArrayofObjects as i,
  router as r
};

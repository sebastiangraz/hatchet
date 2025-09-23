import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { S as Section, T as Text } from "./router-3yl_6HbH.js";
import { B as Button } from "./Button-Ch4uDnpT.js";
import { useState, useEffect } from "react";
import { createHighlighter } from "shiki";
import "@tanstack/react-router";
import "@mdx-js/react";
const expandable = "_expandable_15npz_3";
const codeBlock$1 = "_codeBlock_15npz_11";
const expandableSection = "_expandableSection_15npz_21";
const expandableLeft = "_expandableLeft_15npz_29";
const divider$1 = "_divider_15npz_89";
const ui = "_ui_15npz_161";
const feature = "_feature_15npz_171";
const styles$6 = {
  expandable,
  codeBlock: codeBlock$1,
  expandableSection,
  expandableLeft,
  divider: divider$1,
  ui,
  feature
};
const UI = "/assets/ui-C3_0v2Xu.svg";
const corePrinciples = "/assets/corePrinciples-d3mboAfK.svg";
const ingestion = "/assets/ingestion-B4kV-ci9.svg";
const parallelization = "/assets/parallelization-Bt8z3_RP.svg";
const AIAgents = "/assets/AIAgents-DjHBsRZs.svg";
const hero = "_hero_lbojz_1 grid-parent";
const styles$5 = {
  hero
};
const Hero = (props) => {
  const {
    theme: theme2,
    title = "Managed infrastructure for everything async.",
    description = "Hatchet simplifies your stack for running background jobs, distributed workloads, and real-time AI agents with a single, scalable, easy-to-use platform. "
  } = props;
  const themeValue = theme2 ? theme2 : "";
  return /* @__PURE__ */ jsxs(Section, { "data-theme": themeValue, className: styles$5.hero, children: [
    /* @__PURE__ */ jsx(Text.H1, { balance: true, children: title }),
    /* @__PURE__ */ jsxs(Text.Body, { balance: true, children: [
      " ",
      description,
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx(Button, { to: "/pricing", children: "Start for free" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          href: "https://docs.hatchet.run/home",
          target: "_blank",
          icon: "docs",
          type: "secondary",
          children: "Docs"
        }
      )
    ] })
  ] });
};
const details = "_details_iuwom_1";
const toggleButton = "_toggleButton_iuwom_9";
const detailsContentWrapper = "_detailsContentWrapper_iuwom_33";
const styles$4 = {
  details,
  toggleButton,
  detailsContentWrapper
};
const Expandable = (props) => {
  const { children, className = "", buttonText = "Learn more" } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("details", { className: `${styles$4.details} ${className}`, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        large: true,
        type: isExpanded ? "secondary" : "default",
        icon: isExpanded ? "back" : "docs",
        as: "summary",
        className: styles$4.toggleButton,
        onClick: toggleExpanded,
        "aria-expanded": isExpanded,
        children: isExpanded ? "Hide" : buttonText
      }
    ),
    /* @__PURE__ */ jsx("div", { className: styles$4.detailsContentWrapper, children })
  ] }) });
};
const greptile = "/assets/greptile-Ctr3me4X.svg";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: greptile
}, Symbol.toStringTag, { value: "Module" }));
const mit = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--zaz--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='166'%20width='321'%20shape-rendering='crispEdges'%3e%3cg%20stroke-width='35'%20stroke='%23A31F34'%3e%3cpath%20d='m17.5,0v166m57-166v113m57-113v166m57-166v33m58,20v113'/%3e%3cpath%20d='m188.5,53v113'%20stroke='%238A8B8C'/%3e%3cpath%20d='m229,16.5h92'%20stroke-width='33'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mit
}, Symbol.toStringTag, { value: "Module" }));
const moonhub = "/assets/moonhub-CpWoPaGz.svg";
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: moonhub
}, Symbol.toStringTag, { value: "Module" }));
const logos$1 = "_logos_3ej2z_1";
const logostrip = "_logostrip_3ej2z_53";
const styles$3 = {
  logos: logos$1,
  logostrip
};
const globLogos = Object.entries(
  /* @__PURE__ */ Object.assign({
    "/src/assets/logos/greptile.svg": __vite_glob_0_0,
    "/src/assets/logos/mit.svg": __vite_glob_0_1,
    "/src/assets/logos/moonhub.svg": __vite_glob_0_2
  })
);
const logos = globLogos.map(([url, module]) => {
  const fileName = url.split("/").pop()?.replace(".svg", "") || "";
  return {
    src: module.default,
    alt: fileName,
    name: fileName
  };
});
const Logostrip = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$3.logostrip, children: [
    /* @__PURE__ */ jsx(Text.Small, { secondary: true, mono: true, children: "Running Billions of Tasks for Scale-Ups and Enterprises" }),
    /* @__PURE__ */ jsx("div", { className: styles$3.logos, children: [...logos, ...logos].map((logo) => /* @__PURE__ */ jsx("img", { src: logo.src, alt: `${logo.alt} logo` }, logo.name)) })
  ] });
};
const codeBlock = "_codeBlock_19t0f_1";
const filename = "_filename_19t0f_31";
const content = "_content_19t0f_55";
const lineNumbers = "_lineNumbers_19t0f_97";
const loading = "_loading_19t0f_161";
const styles$2 = {
  codeBlock,
  filename,
  content,
  lineNumbers,
  loading
};
const name = "Hatchet";
const type = "dark";
const semanticHighlighting = true;
const colors = { "focusBorder": "#1f212b", "foreground": "#ffffff", "widget.shadow": "#2a2139", "selection.background": "#ffffff20", "errorForeground": "#3291FF", "textLink.activeForeground": "#B540DC", "textLink.foreground": "#f97e72", "button.background": "#614D85", "dropdown.background": "#232530", "dropdown.listBackground": "#2a2139", "input.background": "#2a2139", "inputOption.activeBorder": "#B540DC99", "inputValidation.errorBackground": "#3291FF80", "inputValidation.errorBorder": "#3291FF00", "scrollbar.shadow": "#2a2139", "scrollbarSlider.activeBackground": "#9d8bca20", "scrollbarSlider.background": "#9d8bca30", "scrollbarSlider.hoverBackground": "#9d8bca50", "badge.foreground": "#ffffff", "badge.background": "#2a2139", "progressBar.background": "#f97e72", "list.activeSelectionBackground": "#ffffff20", "list.activeSelectionForeground": "#ffffff", "list.dropBackground": "#34294f66", "list.focusBackground": "#ffffff20", "list.focusForeground": "#ffffff", "list.highlightForeground": "#f97e72", "list.hoverBackground": "#37294d99", "list.hoverForeground": "#ffffff", "list.inactiveSelectionBackground": "#ffffff20", "list.inactiveSelectionForeground": "#ffffff", "list.inactiveFocusBackground": "#2a213999", "list.errorForeground": "#3291FFE6", "list.warningForeground": "#90C78Ebb", "activityBar.background": "#171520", "activityBar.dropBackground": "#34294f66", "activityBar.foreground": "#ffffffCC", "activityBarBadge.background": "#f97e72", "activityBarBadge.foreground": "#2a2139", "sideBar.background": "#241b2f", "sideBar.foreground": "#ffffff99", "sideBar.dropBackground": "#34294f4c", "sideBarSectionHeader.background": "#241b2f", "sideBarSectionHeader.foreground": "#ffffffca", "menu.background": "#463465", "editorGroup.border": "#495495", "editorGroup.dropBackground": "#4954954a", "editorGroupHeader.tabsBackground": "#241b2f", "tab.border": "#241b2f00", "tab.activeBorder": "#880088", "tab.inactiveBackground": "#262335", "editor.background": "#262335", "editorLineNumber.foreground": "#ffffff73", "editorLineNumber.activeForeground": "#ffffffcc", "editorCursor.background": "#241b2f", "editorCursor.foreground": "#f97e72", "editor.selectionBackground": "#ffffff20", "editor.selectionHighlightBackground": "#ffffff20", "editor.wordHighlightBackground": "#34294f88", "editor.wordHighlightStrongBackground": "#34294f88", "editor.findMatchBackground": "#D18616bb", "editor.findMatchHighlightBackground": "#D1861655", "editor.findRangeHighlightBackground": "#34294f1a", "editor.hoverHighlightBackground": "#463564", "editor.lineHighlightBorder": "#7059AB66", "editor.rangeHighlightBackground": "#49549539", "editorIndentGuide.background": "#444251", "editorIndentGuide.activeBackground": "#A148AB80", "editorRuler.foreground": "#A148AB80", "editorCodeLens.foreground": "#ffffff7c", "editorBracketMatch.background": "#34294f66", "editorBracketMatch.border": "#495495", "editorOverviewRuler.border": "#34294fb3", "editorOverviewRuler.findMatchForeground": "#D1861699", "editorOverviewRuler.modifiedForeground": "#b893ce99", "editorOverviewRuler.addedForeground": "#09f7a099", "editorOverviewRuler.deletedForeground": "#3291FF99", "editorOverviewRuler.errorForeground": "#3291FFdd", "editorOverviewRuler.warningForeground": "#90C78Ecc", "editorError.foreground": "#3291FF", "editorWarning.foreground": "#90C78Ecc", "editorGutter.modifiedBackground": "#b893ce8f", "editorGutter.addedBackground": "#206d4bd6", "editorGutter.deletedBackground": "#fa2e46a4", "diffEditor.insertedTextBackground": "#0beb9935", "diffEditor.removedTextBackground": "#3291FF35", "editorWidget.background": "#171520DC", "editorWidget.border": "#ffffff22", "editorWidget.resizeBorder": "#ffffff44", "editorSuggestWidget.highlightForeground": "#f97e72", "editorSuggestWidget.selectedBackground": "#ffffff36", "peekView.border": "#495495", "peekViewEditor.background": "#232530", "peekViewEditor.matchHighlightBackground": "#D18616bb", "peekViewResult.background": "#232530", "peekViewResult.matchHighlightBackground": "#D1861655", "peekViewResult.selectionBackground": "#2a213980", "peekViewTitle.background": "#232530", "panelTitle.activeBorder": "#f97e72", "statusBar.background": "#241b2f", "statusBar.foreground": "#ffffff80", "statusBar.debuggingBackground": "#f97e72", "statusBar.debuggingForeground": "#08080f", "statusBar.noFolderBackground": "#241b2f", "statusBarItem.prominentBackground": "#2a2139", "statusBarItem.prominentHoverBackground": "#34294f", "titleBar.activeBackground": "#241b2f", "titleBar.inactiveBackground": "#241b2f", "extensionButton.prominentBackground": "#f97e72", "extensionButton.prominentHoverBackground": "#B540DC", "pickerGroup.foreground": "#f97e72ea", "terminal.foreground": "#ffffff", "terminal.ansiBlue": "#03edf9", "terminal.ansiBrightBlue": "#03edf9", "terminal.ansiBrightCyan": "#03edf9", "terminal.ansiBrightGreen": "#90C78E", "terminal.ansiBrightMagenta": "#B540DC", "terminal.ansiBrightRed": "#3291FF", "terminal.ansiBrightYellow": "#BAD61C", "terminal.ansiCyan": "#03edf9", "terminal.ansiGreen": "#90C78E", "terminal.ansiMagenta": "#B540DC", "terminal.ansiRed": "#3291FF", "terminal.ansiYellow": "#f3e70f", "terminal.selectionBackground": "#ffffff20", "terminalCursor.background": "#ffffff", "terminalCursor.foreground": "#03edf9", "debugToolBar.background": "#463465", "walkThrough.embeddedEditorBackground": "#232530", "gitDecoration.modifiedResourceForeground": "#b893ceee", "gitDecoration.deletedResourceForeground": "#3291FF", "gitDecoration.addedResourceForeground": "#90C78Ecc", "gitDecoration.untrackedResourceForeground": "#90C78E", "gitDecoration.ignoredResourceForeground": "#ffffff59", "minimapGutter.addedBackground": "#09f7a099", "minimapGutter.modifiedBackground": "#b893ce", "minimapGutter.deletedBackground": "#3291FF", "breadcrumbPicker.background": "#232530" };
const tokenColors = /* @__PURE__ */ JSON.parse('[{"name":"Comment","scope":["comment","string.quoted.docstring.multi.python","string.quoted.docstring.multi.python punctuation.definition.string.begin.python","string.quoted.docstring.multi.python punctuation.definition.string.end.python"],"settings":{"foreground":"#637896","fontStyle":"italic"}},{"name":"String","scope":["string.quoted","string.template","punctuation.definition.string"],"settings":{"foreground":"#ff8b39"}},{"name":"Punctuation within templates","scope":"string.template meta.embedded.line","settings":{"foreground":"#99958A"}},{"name":"Variable","scope":["variable","entity.name.variable"],"settings":{"foreground":"#B540DC"}},{"name":"Language variable","scope":"variable.language","settings":{"foreground":"#3291FF","fontStyle":"bold"}},{"name":"Parameter","scope":"variable.parameter","settings":{"fontStyle":"italic"}},{"name":"Storage (declaration or modifier keyword)","scope":["storage.type","storage.modifier"],"settings":{"foreground":"#BAD61C"}},{"name":"Constant","scope":"constant","settings":{"foreground":"#f97e72"}},{"name":"Regex","scope":"string.regexp","settings":{"foreground":"#f97e72"}},{"name":"Number","scope":"constant.numeric","settings":{"foreground":"#f97e72"}},{"name":"Language constant (boolean, null)","scope":"constant.language","settings":{"foreground":"#f97e72"}},{"name":"Character escape","scope":"constant.character.escape","settings":{"foreground":"#006E8C"}},{"name":"Entity","scope":"entity.name","settings":{"foreground":"#3291FF"}},{"name":"HTML or XML tag","scope":"entity.name.tag","settings":{"foreground":"#006E8C"}},{"name":"HTML or XML tag brackets","scope":["punctuation.definition.tag"],"settings":{"foreground":"#006E8C"}},{"name":"Tag attribute","scope":"entity.other.attribute-name","settings":{"foreground":"#BAD61C"}},{"name":"Tag attribute HTML","scope":"entity.other.attribute-name.html","settings":{"foreground":"#BAD61C","fontStyle":"italic"}},{"name":"Class","scope":["entity.name.type","meta.attribute.class.html"],"settings":{"foreground":"#3291FF"}},{"name":"Inherited class","scope":"entity.other.inherited-class","settings":{"foreground":"#D50"}},{"name":"Function","scope":["entity.name.function","variable.function"],"settings":{"foreground":"#006E8C"}},{"name":"JS Export","scope":["keyword.control.export.js","keyword.control.import.js"],"settings":{"foreground":"#B8D9FF"}},{"name":"JS Numerics","scope":["constant.numeric.decimal.js"],"settings":{"foreground":"#006E8C"}},{"name":"Keyword","scope":"keyword","settings":{"foreground":"#BAD61C"}},{"name":"Control keyword","scope":"keyword.control","settings":{"foreground":"#BAD61C"}},{"name":"Operator","scope":"keyword.operator","settings":{"foreground":"#BAD61C"}},{"name":"Special operator","scope":["keyword.operator.new","keyword.operator.expression","keyword.operator.logical"],"settings":{"foreground":"#BAD61C"}},{"name":"Unit","scope":"keyword.other.unit","settings":{"foreground":"#f97e72"}},{"name":"Support","scope":"support","settings":{"foreground":"#3291FF"}},{"name":"Support function","scope":"support.function","settings":{"foreground":"#006E8C"}},{"name":"Support variable","scope":"support.variable","settings":{"foreground":"#B540DC"}},{"name":"Object literal key / property","scope":["meta.object-literal.key","support.type.property-name"],"settings":{"foreground":"#B540DC"}},{"name":"Key-value separator","scope":"punctuation.separator.key-value","settings":{"foreground":"#99958A"}},{"name":"Embedded punctuation","scope":"punctuation.section.embedded","settings":{"foreground":"#BAD61C"}},{"name":"Template expression","scope":["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end"],"settings":{"foreground":"#B8D9FF"}},{"name":"CSS property","scope":["support.type.property-name.css","support.type.property-name.json"],"settings":{"foreground":"#B8D9FF"}},{"name":"JS Switch control","scope":"switch-block.expr.js","settings":{"foreground":"#B8D9FF"}},{"name":"JS object path","scope":"variable.other.constant.property.js, variable.other.property.js","settings":{"foreground":"#2ee2fa"}},{"name":"Color","scope":"constant.other.color","settings":{"foreground":"#f97e72"}},{"name":"Font names","scope":"support.constant.font-name","settings":{"foreground":"#f97e72"}},{"name":"CSS #id","scope":"entity.other.attribute-name.id","settings":{"foreground":"#006E8C"}},{"name":"Pseudo CSS","scope":["entity.other.attribute-name.pseudo-element","entity.other.attribute-name.pseudo-class"],"settings":{"foreground":"#D50"}},{"name":"CSS support functions (rgb)","scope":"support.function.misc.css","settings":{"foreground":"#3291FF"}},{"name":"Markup heading","scope":["markup.heading","entity.name.section"],"settings":{"foreground":"#B540DC"}},{"name":"Markup text","scope":["text.html","keyword.operator.assignment"],"settings":{"foreground":"#ffffffee"}},{"name":"Markup quote","scope":"markup.quote","settings":{"foreground":"#99958Acc","fontStyle":"italic"}},{"name":"Markup list","scope":"beginning.punctuation.definition.list","settings":{"foreground":"#B540DC"}},{"name":"Markup link","scope":"markup.underline.link","settings":{"foreground":"#D50"}},{"name":"Markup link description","scope":"string.other.link.description","settings":{"foreground":"#f97e72"}},{"name":"Python function call","scope":"meta.function-call.generic.python","settings":{"foreground":"#006E8C"}},{"name":"Python variable params","scope":"variable.parameter.function-call.python","settings":{"foreground":"#B8D9FF"}},{"name":"C# storage type","scope":"storage.type.cs","settings":{"foreground":"#3291FF"}},{"name":"C# local variable","scope":"entity.name.variable.local.cs","settings":{"foreground":"#B540DC"}},{"name":"C# properties and fields","scope":["entity.name.variable.field.cs","entity.name.variable.property.cs"],"settings":{"foreground":"#B540DC"}},{"name":"C placeholder","scope":"constant.other.placeholder.c","settings":{"foreground":"#B8D9FF","fontStyle":"italic"}},{"name":"C preprocessors","scope":["keyword.control.directive.include.c","keyword.control.directive.define.c"],"settings":{"foreground":"#B8D9FF"}},{"name":"C storage modifier","scope":"storage.modifier.c","settings":{"foreground":"#3291FF"}},{"name":"C++ operators","scope":"source.cpp keyword.operator","settings":{"foreground":"#BAD61C"}},{"name":"C++ placeholder","scope":"constant.other.placeholder.cpp","settings":{"foreground":"#B8D9FF","fontStyle":"italic"}},{"name":"C++ include","scope":["keyword.control.directive.include.cpp","keyword.control.directive.define.cpp"],"settings":{"foreground":"#B8D9FF"}},{"name":"C++ constant modifier","scope":"storage.modifier.specifier.const.cpp","settings":{"foreground":"#3291FF"}},{"name":"Elixir Classes","scope":["source.elixir support.type.elixir","source.elixir meta.module.elixir entity.name.class.elixir"],"settings":{"foreground":"#006E8C"}},{"name":"Elixir Functions","scope":"source.elixir entity.name.function","settings":{"foreground":"#B8D9FF"}},{"name":"Elixir Constants","scope":["source.elixir constant.other.symbol.elixir","source.elixir constant.other.keywords.elixir"],"settings":{"foreground":"#006E8C"}},{"name":"Elixir String Punctuation","scope":"source.elixir punctuation.definition.string","settings":{"foreground":"#B8D9FF"}},{"name":"Elixir","scope":["source.elixir variable.other.readwrite.module.elixir","source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"],"settings":{"foreground":"#B8D9FF"}},{"name":"Elixir Binary Punctuation","scope":"source.elixir .punctuation.binary.elixir","settings":{"foreground":"#B540DC","fontStyle":"italic"}},{"name":"Clojure Globals","scope":["entity.global.clojure"],"settings":{"foreground":"#006E8C","fontStyle":"bold"}},{"name":"Clojure Storage","scope":["storage.control.clojure"],"settings":{"foreground":"#006E8C","fontStyle":"italic"}},{"name":"Clojure Metadata","scope":["meta.metadata.simple.clojure","meta.metadata.map.clojure"],"settings":{"foreground":"#3291FF","fontStyle":"italic"}},{"name":"Clojure Macros, Quoted","scope":["meta.quoted-expression.clojure"],"settings":{"fontStyle":"italic"}},{"name":"Clojure Symbols","scope":["meta.symbol.clojure"],"settings":{"foreground":"#B540DCff"}},{"name":"Go basic","scope":"source.go","settings":{"foreground":"#B540DCff"}},{"name":"Go Function Calls","scope":"source.go meta.function-call.go","settings":{"foreground":"#006E8C"}},{"name":"Go Keywords","scope":["source.go keyword.package.go","source.go keyword.import.go","source.go keyword.function.go","source.go keyword.type.go","source.go keyword.const.go","source.go keyword.var.go","source.go keyword.map.go","source.go keyword.channel.go","source.go keyword.control.go"],"settings":{"foreground":"#BAD61C"}},{"name":"Go interfaces","scope":["source.go storage.type","source.go keyword.struct.go","source.go keyword.interface.go"],"settings":{"foreground":"#B8D9FF"}},{"name":"Go Constants e.g. nil, string format (%s, %d, etc.)","scope":["source.go constant.language.go","source.go constant.other.placeholder.go","source.go variable"],"settings":{"foreground":"#006E8C"}},{"name":"Markdown links and image paths","scope":["markup.underline.link.markdown","markup.inline.raw.string.markdown"],"settings":{"foreground":"#B8D9FF","fontStyle":"italic"}},{"name":"Markdown links and image paths","scope":["string.other.link.title.markdown"],"settings":{"foreground":"#BAD61C"}},{"name":"Markdown headings","scope":["markup.heading.markdown","entity.name.section.markdown"],"settings":{"foreground":"#B540DC","fontStyle":"bold"}},{"name":"Markdown italic","scope":["markup.italic.markdown"],"settings":{"foreground":"#006E8C","fontStyle":"italic"}},{"name":"Markdown bold","scope":["markup.bold.markdown"],"settings":{"foreground":"#006E8C","fontStyle":"bold"}},{"name":"Markdown quotes","scope":["punctuation.definition.quote.begin.markdown","markup.quote.markdown"],"settings":{"foreground":"#B8D9FF"}},{"name":"Basic source colours","scope":["source.dart","source.python","source.scala"],"settings":{"foreground":"#B540DCff"}},{"name":"Dart strings","scope":["string.interpolated.single.dart"],"settings":{"foreground":"#f97e72"}},{"name":"Dart variable params","scope":["variable.parameter.dart"],"settings":{"foreground":"#90C78E"}},{"name":"Dart numerics","scope":["constant.numeric.dart"],"settings":{"foreground":"#006E8C"}},{"name":"Scala variable params","scope":["variable.parameter.scala"],"settings":{"foreground":"#006E8C"}},{"name":"Scala","scope":["meta.template.expression.scala"],"settings":{"foreground":"#90C78E"}}]');
const hatchetTheme = {
  name,
  type,
  semanticHighlighting,
  colors,
  tokenColors
};
const CodeBlock = ({
  code,
  lang = "typescript",
  showLineNumbers = true,
  highlightLines = [],
  filename: filename2,
  className
}) => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [hatchetTheme],
          langs: [lang]
        });
        const html = highlighter.codeToHtml(code, {
          lang,
          theme: hatchetTheme.name,
          transformers: [
            {
              name: "highlight-lines",
              line(node, line) {
                if (highlightLines.includes(line)) {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  if (!node.properties.className) {
                    node.properties.className = [];
                  }
                  if (Array.isArray(node.properties.className)) {
                    node.properties.className.push("highlighted-line");
                  } else {
                    node.properties.className = [
                      node.properties.className,
                      "highlighted-line"
                    ];
                  }
                }
                return node;
              }
            }
          ]
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    };
    highlightCode();
  }, [code, lang, highlightLines]);
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: `${styles$2.codeBlock} ${className || ""}`, children: /* @__PURE__ */ jsx("div", { className: styles$2.loading, children: "Loading syntax highlighting..." }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: `${styles$2.codeBlock} ${className || ""}`, children: [
    filename2 && /* @__PURE__ */ jsx("div", { className: styles$2.filename, children: filename2 }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${styles$2.content} ${showLineNumbers ? styles$2.lineNumbers : ""}`,
        dangerouslySetInnerHTML: { __html: highlightedCode }
      }
    )
  ] });
};
const quote = "_quote_1sgzb_1";
const quoteContent = "_quoteContent_1sgzb_15";
const quoteMeta = "_quoteMeta_1sgzb_21";
const styles$1 = {
  quote,
  quoteContent,
  quoteMeta
};
const Quote = ({
  children,
  person,
  name: name2,
  title,
  link
}) => {
  return /* @__PURE__ */ jsxs("div", { className: styles$1.quote, children: [
    /* @__PURE__ */ jsx("div", { className: styles$1.quoteContent, children }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.quoteMeta, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Text.Micro, { mono: true, caps: true, children: person }),
        /* @__PURE__ */ jsx(Text.Micro, { mono: true, caps: true, children: name2 }),
        /* @__PURE__ */ jsx(Text.Micro, { mono: true, caps: true, children: "·" }),
        /* @__PURE__ */ jsx(Text.Micro, { mono: true, caps: true, children: title })
      ] }),
      /* @__PURE__ */ jsx(Button, { to: link, children: "Case Study" })
    ] })
  ] });
};
const layoutChild = "_layoutChild_1irj9_1";
const center = "_center_1irj9_9";
const quarter = "_quarter_1irj9_21";
const third = "_third_1irj9_27";
const half = "_half_1irj9_33";
const twothirds = "_twothirds_1irj9_39";
const full = "_full_1irj9_45";
const layout = "_layout_1irj9_1";
const y = "_y_1irj9_95";
const grid = "_grid_1irj9_169";
const gap = "_gap_1irj9_67";
const scrollbar = "_scrollbar_1irj9_1";
const h1 = "_h1_1irj9_1";
const h2 = "_h2_1irj9_1";
const h3 = "_h3_1irj9_1";
const h4 = "_h4_1irj9_1";
const h5 = "_h5_1irj9_1";
const paragraph = "_paragraph_1irj9_1";
const italic = "_italic_1irj9_1";
const small = "_small_1irj9_1";
const micro = "_micro_1irj9_1";
const caps = "_caps_1irj9_1";
const mono = "_mono_1irj9_1";
const checker = "_checker_1irj9_1";
const flex = "_flex_1irj9_1";
const brackets = "_brackets_1irj9_1";
const divider = "_divider_1irj9_1";
const styles = {
  layoutChild,
  center,
  quarter,
  third,
  half,
  twothirds,
  full,
  layout,
  "gap-1": "_gap-1_1irj9_67",
  "gap-2": "_gap-2_1irj9_73",
  "gap-3": "_gap-3_1irj9_79",
  "gap-4": "_gap-4_1irj9_85",
  y,
  grid,
  gap,
  scrollbar,
  "does-not-exist": "_does-not-exist_1irj9_1",
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
  "grid-parent": "_grid-parent_1irj9_1",
  "py-1": "_py-1_1irj9_1",
  "py-2": "_py-2_1irj9_1",
  "py-3": "_py-3_1irj9_1",
  "py-4": "_py-4_1irj9_1",
  "py-5": "_py-5_1irj9_1",
  "py-6": "_py-6_1irj9_1",
  "pb-1": "_pb-1_1irj9_1",
  "pb-2": "_pb-2_1irj9_1",
  "pb-3": "_pb-3_1irj9_1",
  "pb-4": "_pb-4_1irj9_1",
  "pb-5": "_pb-5_1irj9_1",
  "pb-6": "_pb-6_1irj9_1",
  "my-1": "_my-1_1irj9_1",
  "my-2": "_my-2_1irj9_1",
  "my-3": "_my-3_1irj9_1",
  "my-4": "_my-4_1irj9_1",
  "mt-1": "_mt-1_1irj9_1",
  "mt-2": "_mt-2_1irj9_1",
  "mt-3": "_mt-3_1irj9_1",
  "mt-4": "_mt-4_1irj9_1",
  "mb-1": "_mb-1_1irj9_1",
  "mb-2": "_mb-2_1irj9_1",
  "mb-3": "_mb-3_1irj9_1",
  "mb-4": "_mb-4_1irj9_1"
};
const Layout = ({ children, layout: layout2, className, gap: gap2 }) => {
  const layoutValue = layout2 ? layout2 : "x";
  const classNameValue = className ? className : "";
  const gapValue = gap2 ? gap2 : 0;
  const layoutClass = `${styles.layout} ${styles[layoutValue]} ${styles[`gap-${gapValue}`]} ${classNameValue}`.trim();
  return /* @__PURE__ */ jsx("div", { className: layoutClass, children });
};
const LayoutChild = ({
  children,
  className,
  span,
  center: center2
}) => {
  const spanValue = span ? span : "";
  const classNameValue = className ? className : "";
  const layoutClass = `${styles.layoutChild} ${styles[spanValue]} ${classNameValue} ${center2 ? styles.center : ""}`.trim();
  return /* @__PURE__ */ jsx("div", { className: layoutClass, children });
};
const Gap = ({ children, className, gap: gap2 }) => {
  const classNameValue = className ? className : "";
  const gapValue = gap2 ? gap2 : 0;
  const gapClass = `${styles.gap} ${styles[`gap-${gapValue}`]} ${classNameValue}`.trim();
  return /* @__PURE__ */ jsx("div", { className: gapClass, children });
};
Layout.Child = LayoutChild;
Layout.Gap = Gap;
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx(Logostrip, {}) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("img", { src: UI, alt: "UI", className: styles$6.ui }) }),
    /* @__PURE__ */ jsxs(Section, { theme: "light", className: "py-6", children: [
      /* @__PURE__ */ jsxs(Layout, { layout: "grid", gap: 3, children: [
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.H1, { children: "Core Principles" }) }),
        " ",
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.H3, { children: "Traditional infrastructure breaks with AI workloads. Celery can't checkpoint long-running tasks. Airflow's scheduler adds 5-30s latency. Temporal is complex to operate and expensive to scale." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx("img", { src: corePrinciples }) }),
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.Body, { children: "Hatchet is built in Go and backed by PostgreSQL which offers dynamic performance profiles for use cases across your stack so you can consolidate background task infrastructure and simplify operations." }) })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: styles$6.divider }),
      /* @__PURE__ */ jsxs(Layout, { gap: 4, children: [
        /* @__PURE__ */ jsx(Layout.Child, { span: "third", center: true, children: /* @__PURE__ */ jsxs(Layout.Gap, { gap: 2, children: [
          /* @__PURE__ */ jsx(Text.H5, { children: "Performance" }),
          /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "Start tasks sub 35ms P95. Smart assignment rules handle rate limits, fairness, and priorities without complex configuration." })
        ] }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "third", center: true, children: /* @__PURE__ */ jsxs(Layout.Gap, { gap: 2, children: [
          /* @__PURE__ */ jsx(Text.H5, { children: "Durability" }),
          /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "Every task invocation is durably logged to PostgreSQL. When jobs fail, resume exactly where you left off — no lost work, no duplicate LLM calls, no engineer headaches." })
        ] }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "third", center: true, children: /* @__PURE__ */ jsxs(Layout.Gap, { gap: 2, children: [
          /* @__PURE__ */ jsx(Text.H5, { children: "Code-First" }),
          /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "Hatchet SDKs are language native so developers can write business logic as versionable, reusable, testable atomic functions." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { theme: "dark", className: `${styles$6.feature} py-6`, children: [
      /* @__PURE__ */ jsx(Text.Micro, { brackets: true, mono: true, caps: true, style: {
        color: "var(--accent)"
      }, children: "Feature" }),
      /* @__PURE__ */ jsxs(Layout, { children: [
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.H1, { balance: true, children: "AI Requests & Agents" }) }),
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.Body, { children: "AI agents need complex orchestration — managing tool calls, handling timeouts, maintaining conversation state, and enforcing safety constraints. Most teams end up building fragile in-process systems that are difficult to scale and maintain." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "full", children: /* @__PURE__ */ jsx("img", { src: AIAgents }) })
      ] }),
      /* @__PURE__ */ jsxs(FeatureExpandable, { children: [
        /* @__PURE__ */ jsxs("div", { className: styles$6.expandableLeft, children: [
          /* @__PURE__ */ jsx(Text.H5, { secondary: true, children: "Reliability with Hatchet" }),
          /* @__PURE__ */ jsx(Text.Body, { children: "Define agents as simple distributed functions with built-in orchestration primitives. Set guardrails, manage state, handle failures gracefully. Your agents stay focused on logic, not infrastructure." }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, balance: true, children: "Route and prioritize customer queries intelligently" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, balance: true, children: "Enable agents to use deterministic tooling already in your codebase" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, balance: true, children: "Run long running autonomous research with safety and security constraints" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, balance: true, children: "Built-in plumbing for Human-in-the-Loop signaling and Streaming" }) })
          ] }),
          /* @__PURE__ */ jsx(Quote, { person: "John Doe", name: "CEO", title: "Company", link: "/customers/distill", children: /* @__PURE__ */ jsx(Text.Body, { italic: true, children: "Integrating Hatchet led to a more efficient, reliable, and scalable system, enhancing Distill's ability to deliver detailed and accurate profiles to users." }) })
        ] }),
        /* @__PURE__ */ jsx(CodeBlock, { className: styles$6.codeBlock, code: `const aiAgent = hatchet.workflow("ai-agent", async (ctx) => {
  // Step 1: Process user input
  const userInput = await ctx.step("process-input", async () => {
    return ctx.workflowInput().message;
  });

  // Step 2: Call LLM with safety constraints
  const response = await ctx.step("llm-call", async () => {
    return await callLLM(userInput, {
      maxTokens: 1000,
      temperature: 0.7,
      timeoutMs: 30000
    });
  });

  // Step 3: Validate and format response
  const validatedResponse = await ctx.step("validate", async () => {
    return validateAndFormat(response);
  });

  return validatedResponse;
});

// Start the agent
aiAgent.start();`, lang: "typescript", showLineNumbers: true, highlightLines: [7, 12, 18, 25], filename: "ai-agent.ts" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { theme: "dark", className: `${styles$6.feature} py-6`, children: [
      /* @__PURE__ */ jsxs(Layout, { layout: "y", children: [
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.Micro, { brackets: true, mono: true, caps: true, style: {
          color: "var(--accent-1)"
        }, children: "Feature" }) }),
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.H1, { balance: true, children: "Ingestion & Indexing Pipelines." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "twothirds", children: /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "Modern data pipelines pull from hundreds of sources with different APIs, rate limits, and failure modes. Traditional ETL tools can't handle the unpredictability of external services and LLM processing while simultaneously being suitable for real-time requests." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx("img", { src: ingestion }) })
      ] }),
      /* @__PURE__ */ jsxs(FeatureExpandable, { children: [
        /* @__PURE__ */ jsxs("div", { className: styles$6.expandableLeft, children: [
          /* @__PURE__ */ jsx(Text.H5, { secondary: true, children: "Flexibility with Hatchet" }),
          /* @__PURE__ */ jsx(Text.Body, { children: "Build resilient pipelines that handle real-world complexity. Automatic retries, intelligent rate limiting, and checkpoint recovery mean your data stays fresh without constant firefighting." }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Sync from 100+ data sources without building custom retry logic" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Transform documents for RAG with guaranteed processing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Update vector databases in real-time with exactly-once semantics" }) })
          ] }),
          /* @__PURE__ */ jsx(Quote, { person: "John Doe", name: "CEO", title: "Company", link: "/customers/distill", children: /* @__PURE__ */ jsx(Text.Body, { italic: true, children: "Integrating Hatchet led to a more efficient, reliable, and scalable system, enhancing Distill's ability to deliver detailed and accurate profiles to users." }) })
        ] }),
        /* @__PURE__ */ jsx(CodeBlock, { className: styles$6.codeBlock, code: `failureWorkflow.onFailure({
  name: 'on-failure',
  fn: async (input, ctx) => {
    console.log('onFailure for run:', ctx.workflowRunId());
    return {
      'on-failure': 'success',
    };
  },
});`, lang: "typescript", showLineNumbers: true, highlightLines: [7, 12, 18, 25], filename: "ai-agent.ts" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { theme: "dark", className: `${styles$6.feature} py-6`, children: [
      /* @__PURE__ */ jsxs(Layout, { layout: "y", children: [
        /* @__PURE__ */ jsx(Layout.Child, { children: /* @__PURE__ */ jsx(Text.Micro, { brackets: true, mono: true, caps: true, style: {
          color: "var(--accent-2)"
        }, children: "Feature" }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "half", children: /* @__PURE__ */ jsx(Text.H1, { balance: true, children: "Massive-Parallelization." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "twothirds", children: /* @__PURE__ */ jsx(Text.Body, { balance: true, children: "Processing thousands of documents, enriching large datasets, running agent-swarms, or scheduling GPU workloads requires complex coordination. Most solutions either can't scale or become impossibly complex to manage." }) }),
        /* @__PURE__ */ jsx(Layout.Child, { span: "full", children: /* @__PURE__ */ jsx("img", { src: parallelization }) })
      ] }),
      /* @__PURE__ */ jsxs(FeatureExpandable, { children: [
        /* @__PURE__ */ jsxs("div", { className: styles$6.expandableLeft, children: [
          /* @__PURE__ */ jsx(Text.H5, { children: "Scalability with Hatchet" }),
          /* @__PURE__ */ jsx(Text.Body, { children: "Fan out to thousands of workers with a single function call. Built-in fairness algorithms and resource management ensure efficient utilization without manual tuning." }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Process entire document repositories in parallel" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Enrich millions of leads without rate limit headaches" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Schedule GPU jobs with intelligent batching" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text.Body, { secondary: true, children: "Scrape web data with automatic retry and deduplication" }) })
          ] }),
          /* @__PURE__ */ jsx(Quote, { person: "John Doe", name: "CEO", title: "Company", link: "/customers/distill", children: /* @__PURE__ */ jsx(Text.Body, { italic: true, children: "Integrating Hatchet led to a more efficient, reliable, and scalable system, enhancing Distill's ability to deliver detailed and accurate profiles to users." }) })
        ] }),
        /* @__PURE__ */ jsx(CodeBlock, { className: styles$6.codeBlock, code: `export const parent = hatchet.task({
  name: 'parent',
  fn: async (input: ParentInput, ctx) => {
    const n = input.N;
    const promises = [];

    for (let i = 0; i < n; i++) {
      promises.push(child.run({ N: i }));
    }

    const childRes = await Promise.all(promises);
    const sum = childRes.reduce((acc, curr) => acc + curr.Value, 0);

    return {
      Result: sum,
    };
  },
});`, lang: "typescript", showLineNumbers: true, highlightLines: [7, 12, 18, 25], filename: "ai-agent.ts" })
      ] })
    ] })
  ] });
}
function FeatureExpandable({
  children
}) {
  return /* @__PURE__ */ jsx(Expandable, { className: styles$6.expandable, children: /* @__PURE__ */ jsx(Section, { className: styles$6.expandableSection, children }) });
}
export {
  RouteComponent as component
};

import { MDXProvider } from "@mdx-js/react";
import { components } from "./components";

export const Markdown = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

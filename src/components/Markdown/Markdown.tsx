import { MDXProvider } from "@mdx-js/react";
import { components } from "./components";

type MarkdownProps = {
  children: React.ReactNode;
  contentSlug?: string;
};

export const Markdown = ({ children, contentSlug }: MarkdownProps) => {
  const enhancedComponents = {
    ...components,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
      components.img({ ...props, contentSlug }),
  };

  return <MDXProvider components={enhancedComponents}>{children}</MDXProvider>;
};

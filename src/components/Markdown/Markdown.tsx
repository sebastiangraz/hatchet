import { MDXProvider } from "@mdx-js/react";
import { components } from "./components";

type MarkdownProps = {
  children: React.ReactNode;
  imageResolver?: Record<string, string>;
  caseStudySlug?: string;
};

export const Markdown = ({
  children,
  imageResolver,
  caseStudySlug,
}: MarkdownProps) => {
  const enhancedComponents = {
    ...components,
    img: (props: any) =>
      components.img({ ...props, imageResolver, caseStudySlug }),
  };

  return <MDXProvider components={enhancedComponents}>{children}</MDXProvider>;
};

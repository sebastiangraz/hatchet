import { createFileRoute } from "@tanstack/react-router";
import { blog } from ".";
import { Section } from "~/components/Section/Section";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import { Text } from "~/components/Text/Text";

export const Route = createFileRoute("/blog/$entry")({
  component: RouteComponent,
  head: ({ loaderData }) => {
    const companyName = (loaderData as any)?.frontmatter?.title || "Blog Post";
    return {
      meta: [{ title: `Hatchet · ${companyName}` }],
    };
  },
  loader: (async ({ params }: { params: any }) => {
    const entry = blog.find((p) => p.slug === params.entry);
    if (!entry) throw new Error("Post not found");

    return {
      frontmatter: entry.frontmatter,
      slug: entry.slug,
    };
  }) as any,
});

function RouteComponent() {
  const { frontmatter, slug } = Route.useLoaderData() as {
    frontmatter: any;
    slug: string;
  };

  const entry = blog.find((p) => p.slug === slug);
  const Content = entry?.Content;

  return (
    <>
      <Section className={`${markdownStyles.prose} pb-6`}>
        {Content ? (
          <Markdown contentSlug={slug}>
            <Content />
          </Markdown>
        ) : (
          <Text.Body>Blog post content not found.</Text.Body>
        )}
      </Section>
    </>
  );
}

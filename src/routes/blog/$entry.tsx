import { createFileRoute } from "@tanstack/react-router";
import { blog } from ".";
import { Section } from "~/components/Section/Section";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import { Text } from "~/components/Text/Text";
import { Layout } from "~/components/Layout/Layout";
import { BlogAsset } from "./-BlogAsset";
import styles from "./blog.module.css";

export const Route = createFileRoute("/blog/$entry")({
  component: RouteComponent,
  head: ({ loaderData }) => {
    const title = (loaderData as any)?.frontmatter?.title || "Blog Post";
    return {
      meta: [{ title: `Hatchet · ${title}` }],
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
      <Section className="py-4">
        <Layout layout="y" gap={1}>
          <Layout.Child span="twothirds">
            <Text.H2>{frontmatter.title}</Text.H2>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <Text.Body balance>{frontmatter.description}</Text.Body>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <div className={styles.blogAsset}>
              <BlogAsset seed={`${frontmatter.seed}`} />
            </div>
          </Layout.Child>
        </Layout>
      </Section>
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

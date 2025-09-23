import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { caseStudies } from "../customers";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import styles from "./customers.module.css";

const PostErrorComponent = () => {
  return <p>Post not found</p>;
};

export const Route = createFileRoute("/customers/$caseStudy")({
  component: RouteComponent,

  loader: async ({ params }) => {
    const post = caseStudies.find((p) => p.slug === params.caseStudy);
    if (!post) throw new Error("Post not found");

    return {
      frontmatter: post.frontmatter,
      slug: post.slug,
    };
  },
  errorComponent: PostErrorComponent as any,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
});

function RouteComponent() {
  const { frontmatter, slug } = Route.useLoaderData();

  const post = caseStudies.find((p) => p.slug === slug);
  const Content = post?.Content;

  const { company, industry, title, description } = frontmatter;

  return (
    <>
      <Section className="py-4">
        <Button to="/customers" icon="back">
          All Cases
        </Button>

        <div
          className="divider"
          style={{ gridColumn: "bleedstart / bleedend" }}
        />
        <div className={styles.caseStudyHeader}>
          <Text.Small brackets className="industry">
            {industry}
          </Text.Small>
          <Text.H1 balance>{title}</Text.H1>
          <Text.Body balance>{description}</Text.Body>{" "}
        </div>
        <div
          className="divider"
          style={{ gridColumn: "bleedstart / bleedend" }}
        />
        <div className={styles.caseStudyHeader}>
          <Text.Small brackets className="company">
            {company}
          </Text.Small>
        </div>
      </Section>

      <Section className={`${markdownStyles.prose} pb-6`}>
        {Content ? (
          <Markdown>
            <Content />
          </Markdown>
        ) : (
          <Text.Body>Case study content not found.</Text.Body>
        )}
      </Section>
    </>
  );
}

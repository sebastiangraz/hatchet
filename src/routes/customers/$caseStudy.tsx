import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { caseStudies } from "../customers";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import styles from "./customers.module.css";

// Eagerly import all SVGs in assets/logos to map names -> src URLs
const globLogos = Object.entries(
  import.meta.glob<{ default: string }>(["/src/assets/logos/*.svg"], {
    eager: true,
  })
);

const logoSrcByName: Record<string, string> = Object.fromEntries(
  globLogos.map(([url, module]) => {
    const fileName = url.split("/").pop()?.replace(".svg", "") || "";
    return [fileName, module.default as string];
  })
);

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

  const { company, industry, title, description, logotype, website } =
    frontmatter as {
      company?: string;
      industry?: string;
      title?: string;
      description?: string;
      logotype?: string; // filename without extension from /src/assets/logos
      website?: string;
    };
  const sanitizedWebsite = website?.replace(/^https?:\/\/(www\.)?|\/+$/g, "");
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
          <Text.H1 balance>{title}</Text.H1>
          <Text.H5 balance>{description}</Text.H5>{" "}
        </div>
        <div
          className="divider"
          style={{ gridColumn: "bleedstart / bleedend" }}
        />
        <div className={styles.caseStudyMeta}>
          <div>
            {logotype && logoSrcByName[logotype] ? (
              <img
                className={styles.logotype}
                src={logoSrcByName[logotype]}
                alt={`${company || logotype} logo`}
              />
            ) : null}
            <Text.Micro secondary caps mono balance>
              {company}
            </Text.Micro>
          </div>
          <div>
            <Text.Small brackets mono caps className="industry">
              {industry}
            </Text.Small>
            <Text.Micro secondary caps mono balance>
              Industry
            </Text.Micro>
          </div>
          <div>
            {website && (
              <>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Text.Small brackets mono caps className="website">
                    {sanitizedWebsite}
                  </Text.Small>
                </a>{" "}
                <Text.Micro secondary caps mono balance>
                  Website
                </Text.Micro>
              </>
            )}{" "}
          </div>
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

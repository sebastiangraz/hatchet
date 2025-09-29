import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { caseStudies } from "../customers";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import styles from "./customers.module.css";
import { Quote } from "~/components/Quote/Quote";
import { Authors } from "~/settings";

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

export const Route = createFileRoute("/customers/$caseStudy")({
  component: RouteComponent,
  head: ({ loaderData }) => {
    const companyName =
      (loaderData as any)?.frontmatter?.company || "Customer Case Study";
    return {
      meta: [{ title: `Hatchet · ${companyName}` }],
    };
  },
  loader: (async ({ params }: { params: any }) => {
    const post = caseStudies.find((p) => p.slug === params.caseStudy);
    if (!post) throw new Error("Post not found");

    return {
      frontmatter: post.frontmatter,
      slug: post.slug,
    };
  }) as any,
  errorComponent: PostErrorComponent as any,
  notFoundComponent: PostNotFoundComponent as any,
});

function RouteComponent() {
  const { frontmatter, slug } = Route.useLoaderData() as {
    frontmatter: any;
    slug: string;
  };

  const post = caseStudies.find((p) => p.slug === slug);
  const Content = post?.Content;

  const { company, industry, title, description, logotype, website } =
    frontmatter as {
      company?: string;
      industry?: string;
      title?: string;
      description?: string;
      logotype?: string;
      website?: string;
    };
  const sanitizedWebsite = website?.replace(/^https?:\/\/(www\.)?|\/+$/g, "");
  const authorCompany = Authors.find((a) => a.company === company);
  if (!authorCompany)
    console.warn("Author company not found, check Authors object");
  return (
    <>
      <Section className="py-4">
        <div className={styles.caseStudyTop}>
          <Button to="/customers" icon="back">
            All Cases
          </Button>
          {authorCompany && (
            <Quote.Author
              name={authorCompany?.name || ""}
              slug={authorCompany?.slug || ""}
              title={authorCompany?.title || ""}
              company={authorCompany?.company || ""}
            />
          )}
        </div>
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
            {" "}
            <Text.Micro caps mono balance>
              {company}
            </Text.Micro>
            {logotype && logoSrcByName[logotype] ? (
              <img
                className={styles.logotype}
                src={logoSrcByName[logotype]}
                alt={`${company || logotype} logo`}
              />
            ) : null}
          </div>
          <div>
            {" "}
            <Text.Micro caps mono balance>
              Industry
            </Text.Micro>
            <Text.Small mono caps className="industry">
              {industry}
            </Text.Small>
          </div>
          <div>
            {website && (
              <>
                {" "}
                <Text.Micro caps mono balance>
                  Website
                </Text.Micro>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Text.Small mono caps className="website">
                    {sanitizedWebsite}
                  </Text.Small>
                </a>{" "}
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

function PostErrorComponent({ error }: { error: Error }) {
  return (
    <Section className="py-4">
      <Text.H3>Post Error</Text.H3>
      <Text.Micro secondary mono>
        {error.message}
      </Text.Micro>
    </Section>
  );
}

function PostNotFoundComponent({ error }: { error: Error }) {
  return (
    <Section className="py-4">
      <Text.H3>Post not found</Text.H3>
      <Text.Micro secondary mono>
        {error.message}
      </Text.Micro>
    </Section>
  );
}

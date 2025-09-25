import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./customers.module.css";
import { getPrevPathFromExtension } from "~/utils";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/")({
  head: () => ({
    meta: [{ title: "Hatchet · Customers" }],
  }),
  component: RouteComponent,
});

const globObjects = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["/src/content/case-studies/*/*.mdx"],
    {
      eager: true,
    }
  )
);

type CaseStudy = {
  slug: string;
  frontmatter: any;
  Content: React.ComponentType;
};

export const caseStudies = globObjects.map(([url, module]): CaseStudy => {
  return {
    slug: getPrevPathFromExtension(url),
    frontmatter: module.frontmatter,
    Content: module?.default,
  };
});

function RouteComponent() {
  const publishedCaseStudies = caseStudies.filter(
    (caseStudy) => caseStudy.frontmatter.publish !== false
  );

  return (
    <>
      <Section className="py-4">
        <div className="flex" style={{ gridColumn: "start / end" }}>
          <Text.H1>Customers</Text.H1>
          <Text.Body balance>
            See how leading companies are using Hatchet to build more resilient,
            scalable applications without the complexity of managing their own
            infrastructure.
          </Text.Body>
        </div>
      </Section>

      <Section theme="light" className="py-4">
        <div className={styles.caseStudyGrid}>
          {publishedCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </>
  );
}

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { slug, frontmatter } = caseStudy;

  return (
    <div className={styles.caseStudyCard}>
      <Link to={`/customers/$caseStudy`} params={{ caseStudy: slug }}>
        <Text.H2 balance>{frontmatter.title}</Text.H2>
      </Link>
      <Text.Body>{frontmatter.description}</Text.Body>
      <Text.Micro caps mono brackets className={styles.company}>
        {frontmatter.industry}
      </Text.Micro>

      <Button to={`/customers/${slug}`}>Read</Button>
    </div>
  );
};

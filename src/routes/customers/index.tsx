import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./customers.module.css";

export const Route = createFileRoute("/customers/")({
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
  return (
    <main>
      <Section theme="dark" className="py-4">
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
        <div className={styles["case-studies-grid"]}>
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </main>
  );
}

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const { slug, frontmatter } = caseStudy;

  return (
    <div>
      <Text.Small brackets className={styles.company}>
        {frontmatter.company}
      </Text.Small>
      <Text.Small brackets className={styles.industry}>
        {frontmatter.industry}
      </Text.Small>
      <Text.H3 balance>{frontmatter.title}</Text.H3>
      <Text.Body>{frontmatter.description}</Text.Body>
      <Button to={`/customers/${slug}`} type="primary" theme="dark">
        Read
      </Button>
    </div>
  );
};

export function getPrevPathFromExtension(path: string, extension = ".mdx") {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match
    ? path.slice(
        path.lastIndexOf("/", path.length - match[0].length - 1) + 1,
        path.length - match[0].length
      )
    : "";
}

// const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
//   return (
//     <div>
//       <Text.Small brackets className={styles.company}>
//         {caseStudy.company}
//       </Text.Small>
//       <Text.Small brackets className={styles.industry}>
//         {caseStudy.industry}
//       </Text.Small>
//       <Text.H4>{caseStudy.title}</Text.H4>
//       <Text.Body>{caseStudy.description}</Text.Body>
//       <Button
//         to={`/customers/${caseStudy.id}`}
//         type="primary"
//         className={styles["read-more-btn"]}
//         theme="dark"
//       >
//         Read Case Study
//       </Button>
//     </div>
//   );
// };

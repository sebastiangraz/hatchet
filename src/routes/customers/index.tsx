import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import type { CaseStudy } from "~/types";
import styles from "./customers.module.css";

export const Route = createFileRoute("/customers/")({
  component: RouteComponent,
});

// Sample case studies data (in a real app, this would come from an API or file system)
const caseStudies: CaseStudy[] = [
  {
    id: "tech-startup-ai",
    title: "Scaling AI Workloads with Zero Downtime",
    description:
      "How a fast-growing AI startup used Hatchet to process millions of ML inference tasks daily while maintaining sub-second latency.",
    company: "AI Dynamics Inc.",
    industry: "Artificial Intelligence",
  },
  {
    id: "ecommerce-platform",
    title: "Building Resilient Order Processing",
    description:
      "A major e-commerce platform replaced their custom queue system with Hatchet, reducing infrastructure costs by 60% while improving reliability.",
    company: "ShopFlow",
    industry: "E-commerce",
  },
  {
    id: "fintech-compliance",
    title: "Ensuring Financial Compliance at Scale",
    description:
      "How a fintech company automated their compliance workflows using Hatchet's durable task execution, processing 100k+ transactions daily.",
    company: "FinanceForward",
    industry: "Financial Technology",
  },
];

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
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </main>
  );
}

const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <div>
      <Text.Small brackets className={styles.company}>
        {caseStudy.company}
      </Text.Small>
      <Text.Small brackets className={styles.industry}>
        {caseStudy.industry}
      </Text.Small>
      <Text.H4>{caseStudy.title}</Text.H4>
      <Text.Body>{caseStudy.description}</Text.Body>
      <Button
        to={`/customers/${caseStudy.id}`}
        type="primary"
        className={styles["read-more-btn"]}
        theme="dark"
      >
        Read Case Study
      </Button>
    </div>
  );
};

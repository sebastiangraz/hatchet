import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import type { CaseStudy } from "~/types";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/customers/$caseStudy")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const caseStudy = getCaseStudyMetadata(params.caseStudy);
    if (!caseStudy) {
      throw notFound();
    }
    return { caseStudy };
  },
});

// Sample case studies data - in real app this would load from filesystem or API
const caseStudiesData: Record<string, CaseStudy> = {
  "tech-startup-ai": {
    id: "tech-startup-ai",
    title: "Scaling AI Workloads with Zero Downtime",
    description:
      "How a fast-growing AI startup used Hatchet to process millions of ML inference tasks daily while maintaining sub-second latency.",
    company: "AI Dynamics Inc.",
    industry: "Artificial Intelligence",
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "Building Resilient Order Processing",
    description:
      "A major e-commerce platform replaced their custom queue system with Hatchet, reducing infrastructure costs by 60% while improving reliability.",
    company: "ShopFlow",
    industry: "E-commerce",
  },
  "fintech-compliance": {
    id: "fintech-compliance",
    title: "Ensuring Financial Compliance at Scale",
    description:
      "How a fintech company automated their compliance workflows using Hatchet's durable task execution, processing 100k+ transactions daily.",
    company: "FinanceForward",
    industry: "Financial Technology",
  },
};

function getCaseStudyMetadata(id: string): CaseStudy | null {
  return caseStudiesData[id] || null;
}

function RouteComponent() {
  const { caseStudy } = Route.useLoaderData();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMDXContent() {
      try {
        const mdxModule = await import(
          `../../content/case-studies/${caseStudy.id}/index.mdx`
        );
        setMDXContent(() => mdxModule.default);
      } catch (error) {
        console.warn(
          `MDX file not found for case study: ${caseStudy.id}`,
          error
        );
        setMDXContent(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadMDXContent();
  }, [caseStudy.id]);

  return (
    <main>
      <Section theme="dark" className="py-4">
        <Button to="/customers" type="secondary">
          ← Back to Case Studies
        </Button>
        <div
          className="divider"
          style={{ gridColumn: "bleedstart / bleedend" }}
        />
        <Text.Small brackets className="company">
          {caseStudy.company}
        </Text.Small>
        <Text.Small brackets className="industry">
          {caseStudy.industry}
        </Text.Small>

        <Text.H1 balance>{caseStudy.title}</Text.H1>
        <Text.Body balance>{caseStudy.description}</Text.Body>
      </Section>

      <Section theme="dark" className="py-4">
        <div className="case-study-content">
          {isLoading ? (
            <Text.Body>Loading case study...</Text.Body>
          ) : MDXContent ? (
            <MDXContent />
          ) : (
            <Text.Body>Case study content not found.</Text.Body>
          )}
        </div>
      </Section>
    </main>
  );
}

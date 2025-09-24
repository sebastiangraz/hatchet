import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";

import UI from "~/assets/ui.svg";
import corePrinciples from "~/assets/corePrinciples.svg";
import ingestion from "~/assets/ingestion.svg";
import parallelization from "~/assets/parallelization.svg";
import AIAgents from "~/assets/AIAgents.svg";
import illustration0 from "~/assets/illustration-0.svg";
import badges from "~/assets/badges.svg";

import { Hero } from "~/components/Hero/Hero";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Expandable } from "~/components/Expandable/Expandable";
import { Logostrip } from "~/components/Logostrip/Logostrip";
import { CodeBlock } from "~/components/CodeBlock/CodeBlock";
import { Quote } from "~/components/Quote/Quote";
import { Layout } from "~/components/Layout/Layout";
import { Button } from "~/components/Button/Button";

export const Route = createFileRoute("/(home)/")({
  component: RouteComponent,
});
{
  /* <Expandable className={styles.expandable}></Expandable>; */
}
function RouteComponent() {
  return (
    <>
      <Hero />
      <Section>
        <Logostrip />
      </Section>
      <Section>
        <img src={UI} alt="UI" className={styles.ui} />
      </Section>
      <Section theme="light" className="py-6">
        <Layout layout="grid" gap={3}>
          <Layout.Child>
            <Text.H1>Core Principles</Text.H1>
          </Layout.Child>{" "}
          <Layout.Child>
            <Text.H3>
              Traditional infrastructure breaks with AI workloads. Celery can't
              checkpoint long-running tasks. Airflow's scheduler adds 5-30s
              latency. Temporal is complex to operate and expensive to scale.
            </Text.H3>
          </Layout.Child>
          <Layout.Child>
            <img src={corePrinciples}></img>
          </Layout.Child>
          <Layout.Child>
            <Text.Body>
              Hatchet is built in Go and backed by PostgreSQL which offers
              dynamic performance profiles for use cases across your stack so
              you can consolidate background task infrastructure and simplify
              operations.
            </Text.Body>
          </Layout.Child>
        </Layout>

        <hr className={styles.divider} />

        <Layout gap={4}>
          <Layout.Child span="third" center>
            <Layout.Gap gap={2}>
              <Text.H5>Performance</Text.H5>
              <Text.Body balance>
                Start tasks sub 35ms P95. Smart assignment rules handle rate
                limits, fairness, and priorities without complex configuration.
              </Text.Body>
            </Layout.Gap>
          </Layout.Child>
          <Layout.Child span="third" center>
            <Layout.Gap gap={2}>
              <Text.H5>Durability</Text.H5>
              <Text.Body balance>
                Every task invocation is durably logged to PostgreSQL. When jobs
                fail, resume exactly where you left off — no lost work, no
                duplicate LLM calls, no engineer headaches.
              </Text.Body>
            </Layout.Gap>
          </Layout.Child>
          <Layout.Child span="third" center>
            <Layout.Gap gap={2}>
              <Text.H5>Code-First</Text.H5>
              <Text.Body balance>
                Hatchet SDKs are language native so developers can write
                business logic as versionable, reusable, testable atomic
                functions.
              </Text.Body>
            </Layout.Gap>
          </Layout.Child>
        </Layout>
      </Section>
      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Text.Micro brackets mono caps style={{ color: "var(--accent)" }}>
          Feature
        </Text.Micro>
        <Layout>
          <Layout.Child>
            <Text.H1 balance>AI Requests & Agents</Text.H1>
          </Layout.Child>
          <Layout.Child>
            <Text.Body>
              AI agents need complex orchestration — managing tool calls,
              handling timeouts, maintaining conversation state, and enforcing
              safety constraints. Most teams end up building fragile in-process
              systems that are difficult to scale and maintain.
            </Text.Body>
          </Layout.Child>
          <Layout.Child span="full">
            <img src={AIAgents}></img>
          </Layout.Child>
        </Layout>
        <FeatureExpandable>
          <div className={styles.expandableLeft}>
            <Text.H5 secondary>Reliability with Hatchet</Text.H5>
            <Text.Body>
              Define agents as simple distributed functions with built-in
              orchestration primitives. Set guardrails, manage state, handle
              failures gracefully. Your agents stay focused on logic, not
              infrastructure.
            </Text.Body>
            <ul>
              <li>
                <Text.Body secondary balance>
                  Route and prioritize customer queries intelligently
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary balance>
                  Enable agents to use deterministic tooling already in your
                  codebase
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary balance>
                  Run long running autonomous research with safety and security
                  constraints
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary balance>
                  Built-in plumbing for Human-in-the-Loop signaling and
                  Streaming
                </Text.Body>
              </li>
            </ul>
            <Quote
              person="John Doe"
              name="CEO"
              title="Company"
              link="/customers/distill"
            >
              <Text.Body italic>
                Integrating Hatchet led to a more efficient, reliable, and
                scalable system, enhancing Distill's ability to deliver detailed
                and accurate profiles to users.
              </Text.Body>
            </Quote>
          </div>
          <CodeBlock
            className={styles.codeBlock}
            code={`const aiAgent = hatchet.workflow("ai-agent", async (ctx) => {
  // Step 1: Process user input
  const userInput = await ctx.step("process-input", async () => {
    return ctx.workflowInput().message;
  });

  // Step 2: Call LLM with safety constraints
  const response = await ctx.step("llm-call", async () => {
    return await callLLM(userInput, {
      maxTokens: 1000,
      temperature: 0.7,
      timeoutMs: 30000
    });
  });

  // Step 3: Validate and format response
  const validatedResponse = await ctx.step("validate", async () => {
    return validateAndFormat(response);
  });

  return validatedResponse;
});

// Start the agent
aiAgent.start();`}
            lang="typescript"
            showLineNumbers={true}
            highlightLines={[7, 12, 18, 25]}
            filename="ai-agent.ts"
          />
        </FeatureExpandable>
      </Section>

      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Layout layout="y">
          <Layout.Child>
            <Text.Micro brackets mono caps style={{ color: "var(--accent-1)" }}>
              Feature
            </Text.Micro>
          </Layout.Child>
          <Layout.Child>
            <Text.H1 balance>Ingestion & Indexing Pipelines.</Text.H1>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <Text.Body balance>
              Modern data pipelines pull from hundreds of sources with different
              APIs, rate limits, and failure modes. Traditional ETL tools can't
              handle the unpredictability of external services and LLM
              processing while simultaneously being suitable for real-time
              requests.
            </Text.Body>
          </Layout.Child>
          <Layout.Child>
            <img src={ingestion}></img>
          </Layout.Child>
        </Layout>
        <FeatureExpandable>
          <div className={styles.expandableLeft}>
            <Text.H5 secondary>Flexibility with Hatchet</Text.H5>
            <Text.Body>
              Build resilient pipelines that handle real-world complexity.
              Automatic retries, intelligent rate limiting, and checkpoint
              recovery mean your data stays fresh without constant firefighting.
            </Text.Body>
            <ul>
              <li>
                <Text.Body secondary>
                  Sync from 100+ data sources without building custom retry
                  logic
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>
                  Transform documents for RAG with guaranteed processing
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>
                  Update vector databases in real-time with exactly-once
                  semantics
                </Text.Body>
              </li>
            </ul>
            <Quote
              person="John Doe"
              name="CEO"
              title="Company"
              link="/customers/distill"
            >
              <Text.Body italic>
                Integrating Hatchet led to a more efficient, reliable, and
                scalable system, enhancing Distill's ability to deliver detailed
                and accurate profiles to users.
              </Text.Body>
            </Quote>
          </div>
          <CodeBlock
            className={styles.codeBlock}
            code={`failureWorkflow.onFailure({
  name: 'on-failure',
  fn: async (input, ctx) => {
    console.log('onFailure for run:', ctx.workflowRunId());
    return {
      'on-failure': 'success',
    };
  },
});`}
            lang="typescript"
            showLineNumbers={true}
            highlightLines={[7, 12, 18, 25]}
            filename="ai-agent.ts"
          />
        </FeatureExpandable>
      </Section>

      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Layout layout="y">
          <Layout.Child>
            <Text.Micro brackets mono caps style={{ color: "var(--accent-2)" }}>
              Feature
            </Text.Micro>
          </Layout.Child>
          <Layout.Child span="half">
            <Text.H1 balance>Massive-Parallelization.</Text.H1>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <Text.Body balance>
              Processing thousands of documents, enriching large datasets,
              running agent-swarms, or scheduling GPU workloads requires complex
              coordination. Most solutions either can't scale or become
              impossibly complex to manage.
            </Text.Body>
          </Layout.Child>
          <Layout.Child span="full">
            <img src={parallelization}></img>
          </Layout.Child>
        </Layout>
        <FeatureExpandable>
          <div className={styles.expandableLeft}>
            <Text.H5>Scalability with Hatchet</Text.H5>
            <Text.Body>
              Fan out to thousands of workers with a single function call.
              Built-in fairness algorithms and resource management ensure
              efficient utilization without manual tuning.
            </Text.Body>
            <ul>
              <li>
                <Text.Body secondary>
                  Process entire document repositories in parallel
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>
                  Enrich millions of leads without rate limit headaches
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>
                  Schedule GPU jobs with intelligent batching
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>
                  Scrape web data with automatic retry and deduplication
                </Text.Body>
              </li>
            </ul>
            <Quote
              person="John Doe"
              name="CEO"
              title="Company"
              link="/customers/distill"
            >
              <Text.Body italic>
                Integrating Hatchet led to a more efficient, reliable, and
                scalable system, enhancing Distill's ability to deliver detailed
                and accurate profiles to users.
              </Text.Body>
            </Quote>
          </div>
          <CodeBlock
            className={styles.codeBlock}
            code={`export const parent = hatchet.task({
  name: 'parent',
  fn: async (input: ParentInput, ctx) => {
    const n = input.N;
    const promises = [];

    for (let i = 0; i < n; i++) {
      promises.push(child.run({ N: i }));
    }

    const childRes = await Promise.all(promises);
    const sum = childRes.reduce((acc, curr) => acc + curr.Value, 0);

    return {
      Result: sum,
    };
  },
});`}
            lang="typescript"
            showLineNumbers={true}
            highlightLines={[7, 12, 18, 25]}
            filename="ai-agent.ts"
          />
        </FeatureExpandable>
      </Section>
      <Section
        theme="light"
        className="py-6 pb-8"
        style={{ position: "relative" }}
      >
        <img src={illustration0} className={styles.illustration0}></img>
        <Layout>
          <Layout.Child>
            <Layout.Gap>
              <Text.H3 balance>
                AI that scales.{" "}
                <Text secondary>
                  Consolidate your legacy orchestration into one Reliable,
                  Scalable, & Secure solution.
                </Text>
              </Text.H3>
            </Layout.Gap>
          </Layout.Child>
          <Layout.Child>
            <ul className="neutral">
              <li>
                <Text.Body secondary balance>
                  Route and prioritize customer queries intelligently
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary balance>
                  Enable agents to use deterministic tooling already in your
                  codebase
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary balance>
                  Run long running autonomous research with safety and security
                  constraints
                </Text.Body>
              </li>
            </ul>
          </Layout.Child>
          <Layout.Child>
            <Layout.Gap gap={2} dir="x">
              <Button>Start for free</Button>
              <Button type="secondary">Schedule Enterprise Demo</Button>{" "}
            </Layout.Gap>
          </Layout.Child>{" "}
          <Layout.Child>
            <Layout.Child>
              <img src={badges}></img>
            </Layout.Child>
          </Layout.Child>
        </Layout>
      </Section>
    </>
  );
}

function FeatureExpandable({ children }: { children: React.ReactNode }) {
  return (
    <Expandable className={styles.expandable}>
      <Section className={styles.expandableSection}>
        {/* <div className={styles.expandableClip}></div> */}
        {children}
      </Section>
    </Expandable>
  );
}

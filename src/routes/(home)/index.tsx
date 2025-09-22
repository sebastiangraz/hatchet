import { createFileRoute } from "@tanstack/react-router";
import Hero from "~/components/Hero/Hero";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import styles from "./index.module.css";
import UI from "~/assets/ui.svg";
import corePrinciples from "~/assets/corePrinciples.svg";
import AIAgents from "~/assets/AIAgents.svg";
import { Expandable } from "~/components/Expandable/Expandable";
import { Logostrip } from "~/components/Logostrip/Logostrip";
import { CodeBlock } from "~/components/CodeBlock/CodeBlock";
import { Quote } from "~/components/Quote/Quote";

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
        <div className="flex" style={{ gridColumn: "start / 7" }}>
          <Text.H1>Core Principles</Text.H1>
          <img src={corePrinciples}></img>
        </div>
        <div className="flex" style={{ gridColumn: "8 / end" }}>
          <Text.H3>
            Traditional infrastructure breaks with AI workloads. Celery can't
            checkpoint long-running tasks. Airflow's scheduler adds 5-30s
            latency. Temporal is complex to operate and expensive to scale.
          </Text.H3>

          <Text.Body>
            Hatchet is built in Go and backed by PostgreSQL which offers dynamic
            performance profiles for use cases across your stack so you can
            consolidate background task infrastructure and simplify operations.
          </Text.Body>
        </div>
        <div
          className="divider"
          style={{ gridColumn: "bleedstart / bleedend" }}
        />

        <div className={styles.subgrid}>
          <div className="flex">
            <Text.H5>Performance</Text.H5>
            <Text.Body>
              Start tasks sub 35ms P95. Smart assignment rules handle rate
              limits, fairness, and priorities without complex configuration.
            </Text.Body>
          </div>
          <div className="flex">
            <Text.H5>Durability</Text.H5>
            <Text.Body>
              Every task invocation is durably logged to PostgreSQL. When jobs
              fail, resume exactly where you left off — no lost work, no
              duplicate LLM calls, no engineer headaches.
            </Text.Body>
          </div>
          <div className="flex">
            <Text.H5>Code-First</Text.H5>
            <Text.Body>
              Hatchet SDKs are language native so developers can write business
              logic as versionable, reusable, testable atomic functions.
            </Text.Body>
          </div>
        </div>
      </Section>
      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Text.H1 balance className={styles.featureTitle}>
          AI Requests & Agents
        </Text.H1>
        <Text.Body className={styles.featureBody}>
          AI agents need complex orchestration — managing tool calls, handling
          timeouts, maintaining conversation state, and enforcing safety
          constraints. Most teams end up building fragile in-process systems
          that are difficult to scale and maintain.
        </Text.Body>
        <img src={AIAgents}></img>
        <FeatureExpandable>
          <div className={styles.expandableLeft}>
            <Text.H5>Reliability With Hatchet</Text.H5>
            <Text.Body>
              Define agents as simple distributed functions with built-in
              orchestration primitives. Set guardrails, manage state, handle
              failures gracefully. Your agents stay focused on logic, not
              infrastructure.
            </Text.Body>
            <ul>
              <li>
                <Text.Body secondary>
                  Built-in orchestration primitives
                </Text.Body>
              </li>
              <li>
                <Text.Body secondary>Guardrails</Text.Body>
              </li>
              <li>
                <Text.Body secondary>State management</Text.Body>
              </li>
              <li>
                <Text.Body secondary>Failure handling</Text.Body>
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

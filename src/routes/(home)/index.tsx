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
import { Markdown } from "~/components/Markdown/Markdown";

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
        <Markdown>{/* Put code block here */}</Markdown>
      </Section>
    </>
  );
}

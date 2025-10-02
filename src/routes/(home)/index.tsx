import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";

import UI from "~/assets/ui.svg";
import corePrinciples from "~/assets/corePrinciples.svg";
import ingestion from "~/assets/ingestion.svg";
import parallelization from "~/assets/parallelization.svg";
import AIAgents from "~/assets/AIAgents.svg";
import illustration0 from "~/assets/illustration-0.svg";
import badges from "~/assets/badges.svg";
import step1 from "~/assets/step1.svg";
import step2 from "~/assets/step2.svg";
import step3 from "~/assets/step3.svg";
import step4 from "~/assets/step4.svg";
import howItWorks from "~/assets/how.svg";

import { Hero } from "~/components/Hero/Hero";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Expandable } from "~/components/Expandable/Expandable";
import { Logostrip } from "~/components/Logostrip/Logostrip";
import { CodeBlock } from "~/components/CodeBlock/CodeBlock";
import { Codetab } from "~/components/Codetab/Codetab";
import { Quote } from "~/components/Quote/Quote";
import { Layout } from "~/components/Layout/Layout";
import { Button } from "~/components/Button/Button";
import { Accordion } from "~/components/Accordion/Accordion";

export const Route = createFileRoute("/(home)/")({
  head: () => ({
    meta: [{ title: "Hatchet" }],
  }),
  component: RouteComponent,
});

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
              Traditional infrastructure breaks with AI workloads. Celery can’t
              checkpoint long-running tasks. Airflow’s scheduler adds 5-30s
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
        <img src={illustration0} className={styles.illustration0}></img>
      </Section>

      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Layout layout="y">
          <Layout.Child>
            <Text.Micro brackets mono caps style={{ color: "var(--accent-1)" }}>
              Use Case
            </Text.Micro>
          </Layout.Child>
          <Layout.Child>
            <Text.H1 balance>Ingestion & Indexing Pipelines.</Text.H1>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <Text.Body balance>
              Modern data pipelines pull from hundreds of sources with different
              APIs, rate limits, and failure modes. Traditional ETL tools can’t
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
            <Quote author="soohoon" link="/customers/greptile">
              <Text.Body className={styles.quote}>
                With Hatchet, we’ve scaled our indexing workflows effortlessly,
                reducing failed runs by 50% and doubling our user base in just
                two weeks!
              </Text.Body>
            </Quote>
          </div>
          <Codetab
            className={styles.codeBlock}
            filename="failure-handler"
            languages={{
              typescript: (
                <CodeBlock
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
                  highlightLines={[6]}
                />
              ),
              python: (
                <CodeBlock
                  code={`@failure_workflow.on_failure()
async def on_failure(context: Context):
    print(f'onFailure for run: {context.workflow_run_id()}')
    return {
        'on-failure': 'success'
    }`}
                  lang="python"
                  showLineNumbers={true}
                  highlightLines={[5]}
                />
              ),
              go: (
                <CodeBlock
                  code={`func onFailure(ctx context.Context) error {
    workflowRunID := ctx.WorkflowRunID()
    fmt.Printf("onFailure for run: %s\\n", workflowRunID)
    return nil
}`}
                  lang="go"
                  showLineNumbers={true}
                  highlightLines={[3]}
                />
              ),
            }}
          />
        </FeatureExpandable>
      </Section>

      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Text.Micro brackets mono caps style={{ color: "var(--accent)" }}>
          Use Case
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
            <Quote author="shaun" link="/customers/moonhub">
              <Text.Body className={styles.quote}>
                Implementing Hatchet has revolutionized our task management
                system, enabling us to handle a growing number of background
                tasks efficiently.
              </Text.Body>
            </Quote>
          </div>
          <Codetab
            className={styles.codeBlock}
            filename="ai-agent"
            languages={{
              typescript: (
                <CodeBlock
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
                  highlightLines={[10, 11, 12]}
                />
              ),
              python: (
                <CodeBlock
                  code={`@hatchet.workflow(name="ai-agent")
class AIAgentWorkflow:
    @hatchet.step()
    async def process_input(self, context: Context):
        return context.workflow_input()["message"]
    
    @hatchet.step()
    async def llm_call(self, context: Context):
        user_input = context.step_output("process_input")
        return await call_llm(user_input, 
            max_tokens=1000,
            temperature=0.7,
            timeout_ms=30000
        )
    
    @hatchet.step()
    async def validate(self, context: Context):
        response = context.step_output("llm_call")
        return validate_and_format(response)

# Start the agent
ai_agent.start()`}
                  lang="python"
                  showLineNumbers={true}
                  highlightLines={[10, 11, 12, 13]}
                />
              ),
              go: (
                <CodeBlock
                  code={`func aiAgent(ctx context.Context, input map[string]interface{}) error {
    // Step 1: Process user input
    userInput := input["message"].(string)

    // Step 2: Call LLM with safety constraints
    response, err := callLLM(ctx, userInput, LLMConfig{
        MaxTokens:  1000,
        Temperature: 0.7,
        TimeoutMs:  30000,
    })
    if err != nil {
        return err
    }

    // Step 3: Validate and format response
    validatedResponse, err := validateAndFormat(response)
    if err != nil {
        return err
    }

    return nil
}`}
                  lang="go"
                  showLineNumbers={true}
                  highlightLines={[6, 7, 8, 9]}
                />
              ),
            }}
          />
        </FeatureExpandable>
      </Section>

      <Section theme="dark" className={`${styles.feature} py-6`}>
        <Layout layout="y">
          <Layout.Child>
            <Text.Micro brackets mono caps style={{ color: "var(--accent-2)" }}>
              Use Case
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
            <Text.H5 secondary>Scalability with Hatchet</Text.H5>
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
            <Quote author="ymir" link="/customers/aevy">
              <Text.Body className={styles.quote}>
                Hatchet enables Aevy to process up to 50,000 documents in under
                an hour through optimized parallel execution, compared to nearly
                a week with our previous setup.
              </Text.Body>
            </Quote>
          </div>
          <Codetab
            className={styles.codeBlock}
            filename="parallel-execution"
            languages={{
              typescript: (
                <CodeBlock
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
                  highlightLines={[7, 8, 9]}
                />
              ),
              python: (
                <CodeBlock
                  code={`@hatchet.task(name="parent")
async def parent(input: ParentInput, ctx: Context):
    n = input.N
    promises = []
    
    for i in range(n):
        promises.append(child.run({"N": i}))
    
    child_res = await asyncio.gather(*promises)
    total = sum(res["Value"] for res in child_res)
    
    return {
        "Result": total
    }`}
                  lang="python"
                  showLineNumbers={true}
                  highlightLines={[6, 7]}
                />
              ),
              go: (
                <CodeBlock
                  code={`func parent(ctx context.Context, input ParentInput) (*ParentOutput, error) {
    n := input.N
    var wg sync.WaitGroup
    results := make([]ChildResult, n)
    
    for i := 0; i < n; i++ {
        wg.Add(1)
        go func(idx int) {
            defer wg.Done()
            results[idx], _ = child.Run(ctx, ChildInput{N: idx})
        }(i)
    }
    
    wg.Wait()
    sum := 0
    for _, res := range results {
        sum += res.Value
    }
    
    return &ParentOutput{Result: sum}, nil
}`}
                  lang="go"
                  showLineNumbers={true}
                  highlightLines={[6, 7, 8, 9, 10, 11]}
                />
              ),
            }}
          />
        </FeatureExpandable>
      </Section>
      <Section theme="light" className={`${styles.ctaSection} py-6 pb-8`}>
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
              <Button
                href="https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7"
                target="_blank"
              >
                Start for free
              </Button>
              <Button
                type="secondary"
                to="mailto:contact@hatchet.run"
                target="_blank"
              >
                Schedule Enterprise Demo
              </Button>{" "}
            </Layout.Gap>
          </Layout.Child>{" "}
          <Layout.Child>
            <Layout.Child>
              <img src={badges} className={styles.badges}></img>
            </Layout.Child>
          </Layout.Child>
        </Layout>
      </Section>

      <Section className="py-6" theme="light">
        <Layout layout="y" gap={3}>
          <Layout.Child>
            <img src={howItWorks}></img>
          </Layout.Child>
          <Layout.Child>
            <Text.H1>How it works</Text.H1>
          </Layout.Child>
          <Layout.Child span="twothirds">
            <Text.Body secondary balance>
              There are two components to running Hatchet – the{" "}
              <Text italic>orchestration engine</Text> and your{" "}
              <Text italic>workers</Text> with self-host or fully managed
              options for both. Since Hatchet is Open Source, you can run
              multiple deployment strategies (i.e. on prem) without any
              application changes.
            </Text.Body>
          </Layout.Child>
        </Layout>
        {/* Accordion here */}
        <Accordion direction="x" exclusive={true} className={styles.accordion}>
          <Accordion.Item open>
            <Layout.Gap gap={3}>
              <Text.Body className={styles.step}>
                Step 1
                <br />
                <Text secondary>Write tasks as code</Text>
              </Text.Body>

              <Card>
                <div className={styles.cardContent}>
                  {" "}
                  <img src={step1}></img>
                  <Text.Body secondary balance>
                    <Text primary>Build workflows</Text> by writing simple
                    functions. Your tasks automatically retry on failure and
                    handle complex dependencies between steps.
                  </Text.Body>
                </div>
              </Card>
            </Layout.Gap>
          </Accordion.Item>
          <Accordion.Item>
            <Layout.Gap gap={3}>
              <Text.Body className={styles.step}>
                Step 2
                <br />
                <Text secondary>Invoke Tasks</Text>
              </Text.Body>
              <Card>
                <div className={styles.cardContent}>
                  <img src={step2}></img>
                  <Text.Body secondary balance>
                    <Text primary>Start workflows</Text> from your API, schedule
                    them to run at specific times, or trigger them when events
                    happen. Tasks run immediately or queue up for later.
                  </Text.Body>
                </div>
              </Card>
            </Layout.Gap>
          </Accordion.Item>
          <Accordion.Item>
            <Layout.Gap gap={3}>
              <Text.Body className={styles.step}>
                Step 3
                <br />
                <Text secondary>Run Workers in your Cloud</Text>
              </Text.Body>
              <Card>
                <div className={styles.cardContent}>
                  <img src={step3}></img>
                  <Text.Body secondary balance>
                    <Text primary>Deploy workers</Text> on Kubernetes, Porter,
                    Ryvn, or any container platform. They automatically connect
                    to Hatchet and can scale up or down based on workload..
                  </Text.Body>
                </div>
              </Card>
            </Layout.Gap>
          </Accordion.Item>
          <Accordion.Item>
            <Layout.Gap gap={3}>
              <Text.Body className={styles.step}>
                Step 4
                <br />
                <Text secondary>Monitor and Replay</Text>
              </Text.Body>
              <Card>
                <div className={styles.cardContent}>
                  <img src={step4}></img>
                  <Text.Body secondary balance>
                    <Text primary>See all your worksflows</Text> in the
                    dashboard, get alerts when tasks fail, and export metrics to
                    your monitoring tools. Full visibility (and control) without
                    extra setup.
                  </Text.Body>
                </div>
              </Card>
            </Layout.Gap>
          </Accordion.Item>
        </Accordion>
      </Section>
    </>
  );
}

function FeatureExpandable({ children }: { children: React.ReactNode }) {
  return (
    <Expandable className={styles.expandable}>
      <Section className={styles.expandableSection}>{children}</Section>
    </Expandable>
  );
}

function Card({ children }: { children?: React.ReactNode }) {
  return <div className={styles.card}>{children}</div>;
}

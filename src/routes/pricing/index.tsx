import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./pricing.module.css";

export const Route = createFileRoute("/pricing/")({
  beforeLoad: ({ context }) => ({
    ...context,
    theme: "light" as const,
  }),
  component: RouteComponent,
});

// Pricing data organized for table layout
const cloudPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For testing and small-scale experimentation",
    buttonText: "Get Started",
    buttonHref: "https://hatchet.run",
    popular: false,
  },
  {
    name: "Starter",
    price: "$180",
    period: "/mo",
    description: "For smaller systems starting to face scaling challenges",
    buttonText: "Get Started",
    buttonHref: "https://hatchet.run",
    popular: false,
  },
  {
    name: "Growth",
    price: "$425",
    period: "/mo",
    description:
      "For larger services experiencing especially tricky scaling problems.",
    buttonText: "Get Started",
    buttonHref: "https://hatchet.run",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    period: "",
    description: "For especially complex systems with unique requirements.",
    buttonText: "Talk to us",
    buttonHref: "https://hatchet.run",
    popular: false,
  },
];

const featureRows = [
  // Throughput Limits Section
  {
    type: "category",
    category: "Throughput Limits",
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: [
      "10/s Task Runs",
      "100/s Task Runs",
      "500/s Task Runs",
      "500-10k/s Task Runs",
    ],
  },
  {
    type: "feature",
    subcategory: "Concurrent Runs",
    values: [
      "2k Concurrent Runs",
      "10k Concurrent Runs",
      "100k Concurrent Runs",
      "100k-1M Concurrent Runs",
    ],
  },

  // Managed Compute Section
  {
    type: "category",
    category: "Managed Compute",
  },
  {
    type: "feature",
    subcategory: "Shared CPU",
    values: [
      "Shared CPU",
      "$0.01/CPU/hour Shared CPU",
      "$0.01/CPU/hour Shared CPU",
      "Custom Shared CPU",
    ],
  },
  {
    type: "feature",
    subcategory: "Performance CPU",
    values: [
      "-",
      "-",
      "$0.02/CPU/hour Performance CPU",
      "Custom Performance CPU",
    ],
  },
  {
    type: "feature",
    subcategory: "RAM",
    values: ["-", "-", "$0.01/GB/hour RAM", "Custom RAM"],
  },
  {
    type: "feature",
    subcategory: "Instance Types",
    values: [
      "1xCPU/1xGB Instance Types",
      "up to 2xCPU/4GB Instance Types",
      "up to 8xCPU/16GB Instance Types",
      "Custom Instance Types",
    ],
  },
  {
    type: "feature",
    subcategory: "GPU",
    values: ["-", "-", "Available (Beta) GPU", "Custom GPU"],
  },
  {
    type: "feature",
    subcategory: "Auto Scale",
    values: [
      "0-2 instances Auto Scale",
      "0-5 instances Auto Scale",
      "0-200 instances Auto Scale",
      "Custom Auto Scale",
    ],
  },

  // Included Usage Section
  {
    type: "category",
    category: "Included Usage",
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: [
      "2k/day Task Runs",
      "20k/day Task Runs",
      "100k/day Task Runs",
      "Custom Task Runs",
    ],
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: [
      "1 GB Active Storage",
      "10 GB Active Storage",
      "100 GB Active Storage",
      "Custom Active Storage",
    ],
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: [
      "10 GB Network Bandwidth",
      "100 GB Network Bandwidth",
      "1 TB Network Bandwidth",
      "Custom Network Bandwidth",
    ],
  },
  {
    type: "feature",
    subcategory: "Compute Credits",
    values: [
      "$5/mo Compute Credits",
      "$25/mo Compute Credits",
      "$100/mo Compute Credits",
      "Custom Compute Credits",
    ],
  },

  // Additional Usage Section
  {
    type: "category",
    category: "Additional Usage",
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["N/A", "N/A", "$10/million Task Runs", "Custom Task Runs"],
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: ["N/A", "N/A", "N/A", "Custom Active Storage"],
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: ["N/A", "N/A", "N/A", "Custom Network Bandwidth"],
  },

  // General Section
  {
    type: "category",
    category: "General",
  },
  {
    type: "feature",
    subcategory: "Public Discord Support",
    values: ["Included", "Included", "Included", "Included"],
  },
  {
    type: "feature",
    subcategory: "Private Shared Slack Support",
    values: ["-", "Included", "Included", "Included"],
  },
  {
    type: "feature",
    subcategory: "Onboarding",
    values: ["-", "-", "Included", "Included"],
  },
  {
    type: "feature",
    subcategory: "SLAs",
    values: ["-", "-", "-", "Custom SLAs"],
  },
  {
    type: "feature",
    subcategory: "Data Retention",
    values: ["1 day", "3 days", "7 days", "Custom"],
  },
  {
    type: "feature",
    subcategory: "SOC 2",
    values: ["-", "-", "-", "Available"],
  },
  {
    type: "feature",
    subcategory: "HIPAA",
    values: ["-", "-", "-", "Available"],
  },
  {
    type: "feature",
    subcategory: "BAA",
    values: ["-", "-", "-", "Available"],
  },

  // Additional Limits Section
  {
    type: "category",
    category: "Additional Limits",
  },
  {
    type: "feature",
    subcategory: "Events",
    values: ["1k/day", "20k/day", "100k/day", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Max Workers",
    values: ["1", "50", "200", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Users",
    values: ["1", "3", "10", "Custom"],
  },
];

const selfHostedPlans = [
  {
    name: "Essentials",
    price: "$500",
    period: "/mo",
    description: "Self-hosted support for essential needs",
    buttonText: "Talk to us",
    buttonHref: "https://hatchet.run",
  },
  {
    name: "Enterprise",
    price: "Starting at $2000",
    period: "/mo",
    description: "Self-hosted enterprise support with advanced guidance",
    buttonText: "Talk to us",
    buttonHref: "https://hatchet.run",
  },
];

const selfHostedFeatureRows = [
  // Support Section
  {
    type: "category",
    category: "Support",
  },
  {
    type: "feature",
    subcategory: "Response Time SLA",
    values: ["2 business days", "1 business day"],
  },
  {
    type: "feature",
    subcategory: "Shared Slack Channel",
    values: ["Included", "Included"],
  },
  {
    type: "feature",
    subcategory: "Monthly Office Hours",
    values: ["-", "Included"],
  },

  // Infrastructure Guidance Section
  {
    type: "category",
    category: "Infrastructure Guidance",
  },
  {
    type: "feature",
    subcategory: "",
    values: ["Public docker-compose or Helm charts", "Advanced setups"],
  },
];

function RouteComponent() {
  return (
    <>
      <Section className="py-6">
        <div className={styles.header}>
          <Text.H1 balance>Transparent, Flexible Pricing</Text.H1>
          <Text.Body className={styles.subtitle}>
            Hatchet offers both Fully Managed Hatchet Cloud packages and
            Self-Hosted Plans.
          </Text.Body>
        </div>
      </Section>

      <Section theme="light" className="py-6">
        <Text.H2 className={styles.sectionTitle}>
          Managed Cloud Packages
        </Text.H2>

        <div className={styles.pricingTable}>
          {/* Header Row */}
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}></div>
            {cloudPlans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.headerCell} ${plan.popular ? styles.popularHeader : ""}`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                <Text.H3>{plan.name}</Text.H3>
                <div className={styles.priceContainer}>
                  <Text.H2 className={styles.price}>{plan.price}</Text.H2>
                  {plan.period && (
                    <Text.Body className={styles.period}>
                      {plan.period}
                    </Text.Body>
                  )}
                </div>
                <Text.Body className={styles.description}>
                  {plan.description}
                </Text.Body>
                <Button
                  href={plan.buttonHref}
                  target="_blank"
                  className={styles.button}
                  type={plan.popular ? "default" : "secondary"}
                >
                  {plan.buttonText} →
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {featureRows.map((row, rowIndex) => {
            if (row.type === "category") {
              return (
                <div key={rowIndex} className={styles.categoryRow}>
                  <div className={styles.categoryCell}>
                    <Text.H5 className={styles.featureCategory}>
                      {row.category}
                    </Text.H5>
                  </div>
                  {cloudPlans.map((_, index) => (
                    <div key={index} className={styles.emptyCategoryCell}></div>
                  ))}
                </div>
              );
            }

            if (row.type === "feature" && row.values) {
              return (
                <div key={rowIndex} className={styles.tableRow}>
                  <div className={styles.featureCell}>
                    <Text.Small className={styles.featureSubcategory}>
                      {row.subcategory}
                    </Text.Small>
                  </div>
                  {row.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className={styles.valueCell}
                      data-plan={cloudPlans[valueIndex].name}
                    >
                      <Text.Small>{value}</Text.Small>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </Section>

      <Section theme="dark" className="py-6">
        <Text.H2 className={styles.sectionTitle}>Self-Hosted Packages</Text.H2>
        <Text.Body className={styles.subtitle}>
          Hatchet is MIT licensed and free to self-host. We offer additional
          support packages for self-hosted users.
        </Text.Body>

        <div className={styles.selfHostedTable}>
          {/* Header Row */}
          <div className={styles.selfHostedHeader}>
            <div className={styles.headerCell}></div>
            {selfHostedPlans.map((plan, index) => (
              <div key={index} className={styles.headerCell}>
                <Text.H3>{plan.name}</Text.H3>
                <div className={styles.priceContainer}>
                  <Text.H2 className={styles.price}>{plan.price}</Text.H2>
                  {plan.period && (
                    <Text.Body className={styles.period}>
                      {plan.period}
                    </Text.Body>
                  )}
                </div>
                <Text.Body className={styles.description}>
                  {plan.description}
                </Text.Body>
                <Button
                  href={plan.buttonHref}
                  target="_blank"
                  className={styles.button}
                  type="secondary"
                >
                  {plan.buttonText} →
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {selfHostedFeatureRows.map((row, rowIndex) => {
            if (row.type === "category") {
              return (
                <div key={rowIndex} className={styles.categoryRow}>
                  <div className={styles.categoryCell}>
                    <Text.H5 className={styles.featureCategory}>
                      {row.category}
                    </Text.H5>
                  </div>
                  {selfHostedPlans.map((_, index) => (
                    <div key={index} className={styles.emptyCategoryCell}></div>
                  ))}
                </div>
              );
            }

            if (row.type === "feature" && row.values) {
              return (
                <div key={rowIndex} className={styles.tableRow}>
                  <div className={styles.featureCell}>
                    <Text.Small className={styles.featureSubcategory}>
                      {row.subcategory}
                    </Text.Small>
                  </div>
                  {row.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className={styles.valueCell}
                      data-plan={selfHostedPlans[valueIndex].name}
                    >
                      <Text.Small>{value}</Text.Small>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </Section>
    </>
  );
}

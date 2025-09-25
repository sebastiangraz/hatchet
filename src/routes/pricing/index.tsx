import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./pricing.module.css";

export const Route = createFileRoute("/pricing/")({
  head: () => ({
    meta: [{ title: "Hatchet · Pricing" }],
  }),
  beforeLoad: ({ context }) => ({
    ...context,
    theme: "light" as const,
  }),
  component: RouteComponent,
});

// Pricing data organized for table layout
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For testing and small-scale experimentation",
    buttonText: "Get Started",
    buttonHref:
      "https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7?plan=free",
    popular: false,
  },
  {
    name: "Starter",
    price: "$180",
    period: "/mo",
    description: "For smaller systems starting to face scaling challenges",
    buttonText: "Get Started",
    buttonHref:
      "https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7?plan=starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "$425",
    period: "/mo",
    description:
      "For larger services experiencing especially tricky scaling problems.",
    buttonText: "Get Started",
    buttonHref:
      "https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7?plan=growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For especially complex systems with unique requirements.",
    buttonText: "Contact",
    buttonHref: "mailto:contact@hatchet.run",
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
    values: ["10/s", "100/s", "500/s", "500-10k/s"],
  },
  {
    type: "feature",
    subcategory: "Concurrent Runs",
    values: ["2k", "10k", "100k", "100k-1M"],
  },

  // Managed Compute Section
  {
    type: "category",
    category: "Managed Compute",
  },
  {
    type: "feature",
    subcategory: "Shared CPU",
    values: ["$0.01/CPU/hour", "$0.01/CPU/hour", "$0.01/CPU/hour", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Performance CPU",
    values: ["-", "$0.02/CPU/hour", "$0.02/CPU/hour", "Custom"],
  },
  {
    type: "feature",
    subcategory: "RAM",
    values: ["$0.01/GB/hour", "$0.01/GB/hour", "$0.01/GB/hour", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Instance Types",
    values: ["1xCPU/1xGB", "up to 2xCPU/4GB", "up to 8xCPU/16GB", "Custom"],
  },
  {
    type: "feature",
    subcategory: "GPU",
    values: ["-", "-", "Available (Beta)", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Auto Scale",
    values: ["0-2 instances", "0-5 instances", "0-200 instances", "Custom"],
  },

  // Included Usage Section
  {
    type: "category",
    category: "Included Usage",
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["2k/day", "20k/day", "100k/day", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: ["1 GB", "10 GB", "100 GB", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: ["10 GB", "100 GB", "1 TB", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Compute Credits",
    values: ["$5/mo", "$25/mo", "$100/mo", "Custom"],
  },

  // Additional Usage Section
  {
    type: "category",
    category: "Additional Usage",
  },
  {
    type: "feature",
    subcategory: "Task Runs",
    values: ["N/A", "N/A", "$10/million", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Active Storage",
    values: ["N/A", "N/A", "N/A", "Custom"],
  },
  {
    type: "feature",
    subcategory: "Network Bandwidth",
    values: ["N/A", "N/A", "N/A", "Custom"],
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
      <Section className="py-4">
        <div className={styles.header}>
          <Text.H1 balance>Pricing</Text.H1>
          <Text.Body balance className={styles.subtitle}>
            Hatchet offers both Fully Managed Hatchet Cloud packages and
            Self-Hosted Plans.
          </Text.Body>
        </div>
      </Section>

      <Section theme="light" className="pb-6">
        <div className={styles.pricingTable}>
          {/* Header Row */}
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}></div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.headerCell} ${plan.popular ? styles.popularHeader : ""}`}
              >
                <Text.Small mono caps>
                  {plan.name}
                </Text.Small>
                <div className={styles.priceContainer}>
                  <Text.H3 className={styles.price}>{plan.price}</Text.H3>
                  {plan.period && (
                    <Text.Micro mono caps className={styles.period}>
                      {plan.period}
                    </Text.Micro>
                  )}
                </div>
                <Text.Small secondary balance className={styles.description}>
                  {plan.description}
                </Text.Small>
                <Button href={plan.buttonHref} target="_blank">
                  {plan.buttonText}
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
                  {plans.map((_, index) => (
                    <div key={index} className={styles.emptyCategoryCell}></div>
                  ))}
                </div>
              );
            }

            if (row.type === "feature" && row.values) {
              return (
                <div key={rowIndex} className={styles.tableRow}>
                  <div className={styles.featureCell}>
                    <Text.Small mono className={styles.featureSubcategory}>
                      {row.subcategory}
                    </Text.Small>
                  </div>
                  {row.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className={styles.valueCell}
                      data-plan={plans[valueIndex].name}
                    >
                      <Text.Small mono secondary>
                        {value}
                      </Text.Small>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Mobile Pricing Table */}
        <div className={styles.mobilePricingTable}>
          {plans.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={`${styles.mobileCard} ${plan.popular ? styles.popularCard : ""}`}
            >
              {/* Plan Header */}
              <div className={styles.mobileCardHeader}>
                <Text.Small mono caps className={styles.mobilePlanName}>
                  {plan.name}
                </Text.Small>
                <div className={styles.mobilePriceContainer}>
                  <Text.H3 className={styles.mobilePrice}>{plan.price}</Text.H3>
                  {plan.period && (
                    <Text.Micro mono caps className={styles.mobilePeriod}>
                      {plan.period}
                    </Text.Micro>
                  )}
                </div>
                <Text.Small
                  secondary
                  balance
                  className={styles.mobileDescription}
                >
                  {plan.description}
                </Text.Small>
                <Button
                  href={plan.buttonHref}
                  target="_blank"
                  className={styles.mobileButton}
                >
                  {plan.buttonText}
                </Button>
              </div>

              {/* Plan Features */}
              <div className={styles.mobileCardFeatures}>
                {featureRows.map((row, rowIndex) => {
                  if (row.type === "category") {
                    return (
                      <div
                        key={rowIndex}
                        className={styles.mobileCategoryHeader}
                      >
                        <Text.H5 className={styles.mobileCategoryTitle}>
                          {row.category}
                        </Text.H5>
                      </div>
                    );
                  }

                  if (
                    row.type === "feature" &&
                    row.values &&
                    row.values[planIndex]
                  ) {
                    return (
                      <div key={rowIndex} className={styles.mobileFeatureRow}>
                        <Text.Small mono className={styles.mobileFeatureLabel}>
                          {row.subcategory}
                        </Text.Small>
                        <Text.Small
                          mono
                          secondary
                          className={styles.mobileFeatureValue}
                        >
                          {row.values[planIndex]}
                        </Text.Small>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* <Section theme="dark" className="py-6">
        <Text.H2 className={styles.sectionTitle}>Self-Hosted Packages</Text.H2>
        <Text.Body className={styles.subtitle}>
          Hatchet is MIT licensed and free to self-host. We offer additional
          support packages for self-hosted users.
        </Text.Body>

        <div className={styles.selfHostedTable}>
      
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
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

  
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
      </Section> */}
    </>
  );
}

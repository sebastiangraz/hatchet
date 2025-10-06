import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./customers.module.css";
import { getPrevPathFromExtension, highlightNumbers } from "~/utils/utils";
import { Link } from "@tanstack/react-router";
import { Layout } from "~/components/Layout/Layout";
import { ImpactIcon } from "./-impactIcons";

type Customer = {
  slug: string;
  frontmatter: any;
  Content: React.ComponentType;
};

export const Route = createFileRoute("/customers/")({
  head: () => ({
    meta: [{ title: "Hatchet · Customers" }],
  }),
  component: RouteComponent,
});

const globObjects = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["/src/content/customers/*/*.mdx"],
    {
      eager: true,
    }
  )
);

export const customers = globObjects.map(([url, module]): Customer => {
  return {
    slug: getPrevPathFromExtension(url),
    frontmatter: module.frontmatter,
    Content: module?.default,
  };
});

function RouteComponent() {
  const publishedCustomers = customers.filter(
    (customer) => customer.frontmatter.publish !== false
  );

  return (
    <>
      <Section className="py-4">
        <Layout gap={1}>
          <Layout.Child span="half">
            <Text.H1>Customers</Text.H1>
          </Layout.Child>
          <Layout.Child span="half">
            <Text.Body balance>
              See how leading companies are using Hatchet to build more
              resilient, scalable applications without the complexity of
              managing their own infrastructure.
            </Text.Body>
          </Layout.Child>
        </Layout>
      </Section>

      <Section theme="light" className="py-4">
        <div className={styles.customerGrid}>
          {publishedCustomers.map((e) => (
            <CustomerCard key={e.slug} customer={e} />
          ))}
        </div>
      </Section>
    </>
  );
}

const CustomerCard = ({ customer }: { customer: Customer }) => {
  const { slug, frontmatter } = customer;

  const renderImpact = () => {
    const parts = highlightNumbers(frontmatter.impact);
    return parts.map((part, index) => {
      if (part.type === "number") {
        return (
          <Text key={index} primary mono>
            {part.value}
          </Text>
        );
      }
      return part.value;
    });
  };

  return (
    <div className={styles.customerCard}>
      <Link to={`/customers/$customer`} params={{ customer: slug }}>
        <Text.H2 balance>{frontmatter.title}</Text.H2>
      </Link>
      <Text.Body>{frontmatter.description}</Text.Body>{" "}
      <div className={styles.impact}>
        <ImpactIcon icon={frontmatter.impactIcon} />
        <Text.Micro
          balance
          caps
          mono
          brackets
          secondary
          className={styles.micro}
        >
          {renderImpact()}
        </Text.Micro>
      </div>
      <Button to={`/customers/${slug}`}>Read</Button>
    </div>
  );
};

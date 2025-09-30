import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import styles from "./customers.module.css";
import { getPrevPathFromExtension } from "~/utils";
import { Link } from "@tanstack/react-router";

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

type Customer = {
  slug: string;
  frontmatter: any;
  Content: React.ComponentType;
};

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

  return (
    <div className={styles.customerCard}>
      <Link to={`/customers/$customer`} params={{ customer: slug }}>
        <Text.H2 balance>{frontmatter.title}</Text.H2>
      </Link>
      <Text.Body>{frontmatter.description}</Text.Body>
      <Text.Micro caps mono brackets className={styles.company}>
        {frontmatter.industry}
      </Text.Micro>

      <Button to={`/customers/${slug}`}>Read</Button>
    </div>
  );
};

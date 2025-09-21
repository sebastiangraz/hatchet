import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
export const Route = createFileRoute("/pricing/")({
  beforeLoad: ({ context }) => ({
    ...context,
    theme: "light" as const,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section className="py-4">
      <Text.H1>Pricing</Text.H1>
    </Section>
  );
}

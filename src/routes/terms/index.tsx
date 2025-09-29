import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import Content from "~/content/pages/terms/index.mdx";

export const Route = createFileRoute("/terms/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section className={`${markdownStyles.prose} pb-6`}>
      <Markdown contentSlug="terms">
        <Content />
      </Markdown>
    </Section>
  );
}

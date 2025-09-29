import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Markdown } from "~/components/Markdown/Markdown";
import markdownStyles from "~/components/Markdown/markdown.module.css";
import Content from "~/content/pages/announcement/index.mdx";

export const Route = createFileRoute("/announcement/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section className={`${markdownStyles.prose} pb-6`}>
      <Markdown contentSlug="announcement">
        <Content />
      </Markdown>
    </Section>
  );
}

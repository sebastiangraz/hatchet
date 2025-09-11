import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Text } from "~/components";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

type theme = "light" | "dark";

interface HeroProps {
  theme?: theme;
  title?: string;
  description?: string;
}

function RouteComponent() {
  return (
    <main>
      <Hero theme="dark" />
      <Hero
        theme="light"
        title="Light mode title"
        description="Your stack for running background jobs"
      />
    </main>
  );
}

export const Hero = (props: HeroProps) => {
  const {
    theme = "light",
    title = "Managed infrastructure for everything async.",
    description = "Hatchet simplifies your stack for running background jobs, distributed workloads, and real-time AI agents with a single, scalable, easy-to-use platform. ",
  } = props;

  return (
    <section
      data-theme={theme}
      className="grid"
      style={{
        display: "grid",
        gap: "2rlh",
      }}
    >
      <Text.H1 balance>{title}</Text.H1>
      <Text.Body> {description} </Text.Body>
    </section>
  );
};

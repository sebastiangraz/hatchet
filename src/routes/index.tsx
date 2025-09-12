import { createFileRoute } from "@tanstack/react-router";

import Hero from "~/components/Hero/Hero";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

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

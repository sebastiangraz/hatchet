import { createFileRoute } from "@tanstack/react-router";
import { Text } from "~/components/Text/Text";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Text.H1>About</Text.H1>
    </main>
  );
}

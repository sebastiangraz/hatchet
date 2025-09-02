// LLM Context: TanStack Start is a full-stack React framework on TanStack Router + Vite: Router delivers type-safe routing (inferred TypeScript, nested/layout routes, loaders with SWR-style caching, prefetching, file-based routes, JSON-first search params with schema + middleware), while Start adds full-document SSR/streaming, server functions/RPC, bundling, deploy-anywhere, and end-to-end type safety; use Router for client-side, Start for full-stack.

import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: (err) => <p>{err.error.stack}</p>,
    defaultNotFoundComponent: () => <p>not found</p>,
    scrollRestoration: true,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

/// <reference types="vite/client" />
import * as React from "react";
import { RootLayout } from "~/components/RootLayout/RootLayout";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useChildMatches,
} from "@tanstack/react-router";
import CSSGlobal from "~/styles/global.css?url";
import CSSUtils from "~/styles/utils.css?url";
import { Nav } from "~/components/Nav/Nav";
import { Footer } from "~/components/Footer/Footer";
import Favicon from "~/assets/favicon.svg";
import { theme } from "~/types";

interface RootContext {
  theme?: theme;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Hatchet" },
      {
        name: "description",
        content:
          "Deploy More Resilient Apps. Hatchet is a platform for building distributed web apps that solves scaling problems like concurrency, fairness, and rate limiting. Instead of managing your own task queue or pub/sub system, you can use Hatchet to distribute your functions between a set of workers with minimal configuration or infrastructure.",
      },
    ],
    links: [
      { rel: "stylesheet", href: CSSGlobal },
      { rel: "stylesheet", href: CSSUtils },
      { rel: "icon", href: Favicon },
    ],
  }),
  context: (): RootContext => ({
    theme: "dark", // default theme
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const childMatches = useChildMatches();

  // Get the leaf-most (current) route's context
  const currentContext = childMatches[childMatches.length - 1]
    ?.context as RootContext;
  const theme = currentContext?.theme || "dark";

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body data-theme={theme}>
        <Nav />
        <RootLayout>{children}</RootLayout>
        <Footer />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}

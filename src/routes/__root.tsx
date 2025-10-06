/// <reference types="vite/client" />
import * as React from "react";
import { RootLayout } from "~/components/RootLayout/RootLayout";
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
import OGImage from "~/assets/og.png";
import { theme } from "~/types";
import { CodetabProvider } from "~/components/Codetab/CodetabContext";

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

      { property: "og:title", content: "Hatchet" },
      {
        property: "og:description",
        content:
          "Deploy More Resilient Apps. Hatchet is a platform for building distributed web apps that solves scaling problems like concurrency, fairness, and rate limiting.",
      },
      { property: "og:image", content: OGImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hatchet.run" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hatchet" },
      {
        name: "twitter:description",
        content:
          "Deploy More Resilient Apps. Hatchet is a platform for building distributed web apps that solves scaling problems like concurrency, fairness, and rate limiting.",
      },
      { name: "twitter:image", content: OGImage },
    ],
    links: [
      { rel: "stylesheet", href: CSSGlobal },
      { rel: "stylesheet", href: CSSUtils },
      { rel: "icon", href: Favicon },
    ],
  }),
  context: (): RootContext => ({
    theme: "dark",
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

  const currentContext = childMatches[childMatches.length - 1]
    ?.context as RootContext;
  const theme = currentContext?.theme || "dark";

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body data-theme={theme}>
        <CodetabProvider>
          <Nav />
          <RootLayout>{children}</RootLayout>
          <Footer />
          {/* <TanStackRouterDevtools position="bottom-right" /> */}
          <Scripts />
        </CodetabProvider>
      </body>
    </html>
  );
}

/// <reference types="vite/client" />
import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import CSSGlobal from "~/styles/global.css?url";
import CSSUtils from "~/styles/utils.css?url";
import { Nav } from "~/components/Nav/Nav";
import Favicon from "~/assets/favicon.svg";

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
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />

        {children}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}

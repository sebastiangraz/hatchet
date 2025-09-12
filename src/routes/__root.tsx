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

export const Route = createRootRoute({
  // head: () => ({
  //   links: [
  //     { rel: "stylesheet", href: CSSGlobal },
  //     { rel: "stylesheet", href: CSSUtils },
  //   ],
  // }),
  head: () => ({
    links: [
      { rel: "stylesheet", href: CSSGlobal },
      { rel: "stylesheet", href: CSSUtils },
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

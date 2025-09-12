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

export const Route = createRootRoute({
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
        <div>
          <Link to="/">Index</Link>
          <Link to="/about">About</Link>
        </div>

        {children}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}

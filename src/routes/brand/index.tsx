import { createFileRoute } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { ExposeProps } from "./-ExposeProps";
import styles from "./brand.module.css";
import { Button } from "~/components/Button/Button";
import { BlogAsset } from "../blog/-BlogAsset";

export const Route = createFileRoute("/brand/")({
  head: () => ({
    meta: [{ title: "Hatchet · Brand" }],
  }),
  beforeLoad: ({ context }) => ({
    ...context,
    theme: "light" as const,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Section className={`${styles.section} py-4`}>
        <ExposeProps ignoreProps={["children"]}>
          <Text.H1>H1 Heading</Text.H1>
          <Text.H2>H2 Heading</Text.H2>
          <Text.H3>H3 Heading</Text.H3>
          <Text.H4>H4 Heading</Text.H4>
          <Text.H5>H5 Heading</Text.H5>
          <Text.Body>
            Body · See how leading companies are using Hatchet to build more
            resilient, scalable applications without the complexity of managing
            their own infrastructure.
          </Text.Body>
          <Text.Small>
            Small · See how leading companies are using Hatchet to build more
            resilient, scalable applications without the complexity of managing
            their own infrastructure.
          </Text.Small>
          <Text.Micro>
            Micro · See how leading companies are using Hatchet to build more
            resilient, scalable applications without the complexity of managing
            their own infrastructure.
          </Text.Micro>

          <Text.Small mono>Small Mono</Text.Small>
          <Text.Micro mono>Micro Mono</Text.Micro>

          <Text.Small mono caps brackets>
            Small Mono
          </Text.Small>
          <Text.Micro mono caps brackets>
            Micro Mono
          </Text.Micro>
        </ExposeProps>
      </Section>

      <Section className={`${styles.section} py-4`}>
        <ExposeProps ignoreProps={["children"]}>
          <Button>Button</Button>
          <Button icon="back">Button</Button>
          <Button icon="docs">Button</Button>

          <Button type="secondary">Button</Button>
          <Button type="secondary" icon="back">
            Button
          </Button>
          <Button type="secondary" icon="docs">
            Button
          </Button>
        </ExposeProps>
        <hr />
        <ExposeProps ignoreProps={["children"]} theme="dark">
          <Button>Button</Button>
          <Button icon="back">Button</Button>
          <Button icon="docs">Button</Button>

          <Button type="secondary">Button</Button>
          <Button type="secondary" icon="back">
            Button
          </Button>
          <Button type="secondary" icon="docs">
            Button
          </Button>
        </ExposeProps>
        <hr />
        <ExposeProps ignoreProps={["children"]}>
          <Button large>Button</Button>
          <Button large type="secondary" icon="down">
            Button
          </Button>
        </ExposeProps>
      </Section>
      <Section className={`${styles.sectionThird} py-4`} theme="dark">
        <ExposeProps>
          <BlogAsset seed="14" />
          <BlogAsset seed="15" />
          <BlogAsset seed="16" />
          <BlogAsset seed="17" />
          <BlogAsset seed="18" />
          <BlogAsset seed="19" />
          <BlogAsset seed="20" />
          <BlogAsset seed="2" />
          <BlogAsset seed="22" />
        </ExposeProps>
      </Section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "~/components/Section/Section";
import { Text } from "~/components/Text/Text";
import { Layout } from "~/components/Layout/Layout";
import styles from "./blog.module.css";
import { getPrevPathFromExtension } from "~/utils";
import { BlogAsset } from "./-BlogAsset";

type Blog = {
  slug: string;
  frontmatter: any;
  Content: React.ComponentType;
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [{ title: "Hatchet · Blog" }],
  }),
  component: RouteComponent,
});

const globObjects = Object.entries(
  import.meta.glob<string | string[] | any>(["/src/content/blog/*/*.mdx"], {
    eager: true,
  })
);

export const blog = globObjects.map(([url, module]): Blog => {
  return {
    slug: getPrevPathFromExtension(url),
    frontmatter: module.frontmatter,
    Content: module?.default,
  };
});

function RouteComponent() {
  const publishedBlog = blog.filter(
    (blog) => blog.frontmatter.publish !== false
  );
  publishedBlog.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
  return (
    <>
      <Section className="py-4">
        <Layout layout="y" gap={1}>
          <Layout.Child span="half">
            <Text.H1>Blog</Text.H1>
          </Layout.Child>
          <Layout.Child span="half">
            <Text.Body balance>
              Keep up to date with the latest news and updates from Hatchet.
            </Text.Body>
          </Layout.Child>
        </Layout>
      </Section>

      <Section theme="light" className="py-4">
        <div className={styles.blogGrid}>
          {publishedBlog.map((e) => (
            <BlogCard key={e.slug} blog={e} />
          ))}
        </div>
      </Section>
    </>
  );
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { slug, frontmatter } = blog;

  return (
    <div className={styles.blogCard}>
      <Link to={`/blog/$entry`} params={{ entry: slug }}>
        <div className={styles.blogAsset}>
          <BlogAsset seed={`5${Date.now()}`} />
        </div>
      </Link>
      <div className={styles.blogMeta}>
        <Text.Micro secondary caps mono brackets className={styles.blogDate}>
          {frontmatter.date}
        </Text.Micro>
        <Text.Body balance>{frontmatter.title}</Text.Body>
      </div>
    </div>
  );
};

import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXC from "@/components/MDXC";
import PostHeader from "@/components/PostHeader";
import PostBody from "@/components/PostBody";
import PostFooter from "@/components/PostFooter";
import TableOfContents from "@/components/TableOfContents";

const sortedPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export function generateStaticParams() {
  return sortedPosts.map((post) => {
    slug: post.slug;
  });
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = allPosts.find((post) => post.slug === slug);
  const postIndex = sortedPosts.findIndex((post) => post.slug === slug);
  const prevPost = sortedPosts[postIndex - 1] || null;
  const nextPost = sortedPosts[postIndex + 1] || null;
  if (!post) notFound();

  return (
    <article className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
      <PostHeader post={post} />
      {/*<div className="pt-8 pb-8 ">*/}
      <div
        className="pt-8 pb-8 transition-colors grid grid-cols-4 gap-x-6"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="w-full h-auto col-span-3 md:col-span-4">
          <PostBody>
            <MDXC post={post} />
          </PostBody>
        </div>
        <aside className="left-1/3">
          <div className="md:hidden  sticky top-24 col-span-1">
            <TableOfContents source={post.body.raw} />
          </div>
        </aside>
      </div>
      <div className="pb-8">
        <PostFooter prevPost={prevPost} nextPost={nextPost} />
      </div>
    </article>
  );
}

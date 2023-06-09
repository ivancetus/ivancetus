import { allPosts } from "contentlayer/generated";
import PostList from "@/components/PostList";
import { compareDesc } from "date-fns";

export default function Articles() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <ul className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
      {posts.map((post, index) => (
        <PostList index={index} key={post.slug} post={post} />
      ))}
    </ul>
  );
}

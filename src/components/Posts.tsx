import { Post } from "contentlayer/generated";
import PostList from "@/components/PostList";

type Props = {
  posts: Post[];
};
export default function Posts({ posts }: Props) {
  return (
    <ul className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
      {posts.map((post, index) => (
        <PostList index={index} key={post.slug} post={post} />
      ))}
    </ul>
  );
}

import Posts from "@/components/Posts";
import Tags from "@/components/Tags";
import { sortedPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = sortedPosts();
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-auto">
        <div className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
          <div className="prose prose-2xl my-4 dark:prose-invert text-center md:prose-xl">
            <h2>All Posts</h2>
          </div>
          <Tags />
          <Posts posts={posts} />
        </div>
      </div>
    </main>
  );
}

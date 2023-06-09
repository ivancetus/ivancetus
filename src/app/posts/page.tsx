import Posts from "@/components/Posts";

export default function PostsPage() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-auto">
        <div className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
          <div className="prose prose-2xl my-8 dark:prose-invert text-center">
            <h2>All Posts</h2>
          </div>
          <Posts />
        </div>
      </div>
    </main>
  );
}

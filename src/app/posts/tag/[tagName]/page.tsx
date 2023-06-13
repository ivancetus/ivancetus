import { allPosts, Post } from "contentlayer/generated";
import { countUniqueTags } from "@/lib/countUniqueTags";
import Tags from "@/components/Tags";
import Posts from "@/components/Posts";
import TagPageTitle from "@/components/TagPageTitle";
import { sortedPosts } from "@/lib/posts";

const tags = allPosts.flatMap((post: Post) => post.tags);
const uniqueTagAndCount: TagCountPair[] = countUniqueTags(tags);

export function generateStaticParams() {
  return uniqueTagAndCount.map((tag) => {
    tagName: tag.tagName;
  });
}

export default function Page({ params }: { params: { tagName: string } }) {
  const { tagName } = params;
  const filteredPosts = sortedPosts().filter((post) => {
    return post.tags.includes(tagName);
  });
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-auto">
        <div className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
          <div className="prose prose-2xl my-4 dark:prose-invert text-center md:prose-xl">
            <TagPageTitle tagName={tagName} />
          </div>
          <Tags />
          <Posts posts={filteredPosts} />
        </div>
      </div>
    </main>
  );
}

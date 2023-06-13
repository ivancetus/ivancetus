import { allPosts, Post } from "contentlayer/generated";
import TagList from "@/components/TagList";
import { countUniqueTags } from "@/lib/countUniqueTags";

export default function Tags() {
  const tags = allPosts.flatMap((post: Post) => post.tags);
  const uniqueTagAndCount: TagCountPair[] = countUniqueTags(tags).sort((a, b) =>
    a.tagName.localeCompare(b.tagName)
  );
  // console.log(uniqueTagAndCount);

  return (
    <div className="flex items-center justify-center flex-wrap py-4">
      {uniqueTagAndCount.map((tag) => (
        <TagList key={tag.tagName} tagName={tag.tagName} count={tag.count} />
      ))}
    </div>
  );
}

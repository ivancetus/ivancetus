import { format, parseISO } from "date-fns";
import type { Post } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  post: Post;
};
export default function PostHeader({ post }: Props) {
  return (
    <header className="py-6">
      <div className="space-y-1 text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 xs:text-3xl">
            {post.title}
          </h1>
        </div>
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 xs:text-sm">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </dd>
          </div>
        </dl>
        <div className="pt-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`posts/tag/${tag}`}
              className="text-sm flex-wrap transition-colors flex-row font-mono p-1 py-0.5 m-1 dark:bg-zinc-700 bg-zinc-200 rounded-lg hover:dark:bg-zinc-300 hover:bg-zinc-700 hover:text-zinc-300 hover:dark:text-zinc-500 hover:font-semibold"
            >
              #{tag.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

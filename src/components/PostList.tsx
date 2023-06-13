import Link from "next/link";
import type { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

type Props = {
  post: Post;
  index: number;
};

export default function PostList({ post }: Props) {
  const { title, date, description, slug, tags } = post;
  const formattedDate = format(parseISO(date), "LLLL d, yyyy");
  return (
    <li className="group transition-colors">
      <Link href={`/posts/${slug}`} className="">
        <article className="space-y-2 rounded-md p-4 transition-colors group-hover:bg-slate-200 dark:group-hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 md:text-sm xs:text-xs">
              <time dateTime={date}>{formattedDate}</time>
            </dd>
          </dl>
          <div className="space-y-3 xl:col-span-3">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-xl md:text-2xl xs:text-lg">
                {title}
              </h3>
            </div>
            <div className="prose prose-sm max-w-none text-gray-500 transition-colors dark:text-gray-400 md:prose-base xs:prose-sm">
              {description}
            </div>
            <div className="flex flex-wrap text-left text-xs text-gray-500 transition-colors dark:text-gray-400 leading-loose">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border-solid border border-zinc-300 items-start p-1 py-0 mr-2 mb-2 rounded-sm dark:bg-zinc-700 bg-zinc-200 dark:text-zinc-300 text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

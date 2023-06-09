import Link from "next/link";
import type { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

type Props = {
  post: Post;
  index: number;
};

export default function ArticleList({ post }: Props) {
  const { title, date, description, slug, tags } = post;
  const formattedDate = format(parseISO(date), "LLLL d, yyyy");
  return (
    <li className="group transition-colors">
      <Link href={`/posts/${slug}`} className="">
        <article className="space-y-2 rounded-xl p-4 transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800 xl:grid xl:grid-cols-4  xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 md:text-base">
              <time dateTime={date}>{formattedDate}</time>
            </dd>
          </dl>
          <div className="space-y-3 xl:col-span-3">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-xl md:text-2xl">
                {title}
              </h3>
            </div>
            <div className="prose prose-sm max-w-none text-gray-500 transition-colors dark:text-gray-400 md:prose-base">
              {description}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

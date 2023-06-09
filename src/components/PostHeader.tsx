import { format, parseISO } from "date-fns";
import type { Post } from "contentlayer/generated";

type Props = {
  post: Post;
};
export default function PostHeader({ post }: Props) {
  return (
    <header className="py-6">
      <div className="space-y-1 text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {post.title}
          </h1>
        </div>
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

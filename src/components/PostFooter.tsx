import Link from "next/link";
import { Post } from "contentlayer/generated";
type Props = {
  prevPost: Post;
  nextPost: Post;
};
export default function PostFooter({ prevPost, nextPost }: Props) {
  return (
    <footer>
      <div className="flex items-center gap-4 pt-4 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8 md:flex-col">
        {prevPost ? (
          <div className="basis-6/12">
            <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
              PREVIOUS POST
            </h2>
            <Link
              href={`/posts/${prevPost.slug}`}
              className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              ← {prevPost.title}
            </Link>
          </div>
        ) : (
          <div className="basis-6/12" />
        )}
        {nextPost && (
          <div className="basis-6/12 text-right">
            <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
              NEXT POST
            </h2>
            <Link
              href={`/posts/${nextPost.slug}`}
              className="block text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 sm:text-right"
            >
              {nextPost.title} →
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

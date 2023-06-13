import Link from "next/link";
import { Post } from "contentlayer/generated";
type Props = {
  prevPost: Post;
  nextPost: Post;
};
export default function PostFooter({ prevPost, nextPost }: Props) {
  return (
    <footer>
      <div className="flex items-center gap-4 pt-4 text-base font-medium lg:gap-8 lg:pt-8 md:flex-col">
        {prevPost ? (
          <div className="basis-6/12">
            <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 md:text-center">
              <span className="md:hidden">&#129092;</span> PREVIOUS POST{" "}
              <span className="hidden md:inline">&#129093;</span>
            </h2>
            <Link
              href={`/posts/${prevPost.slug}`}
              className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 md:text-center hover:cursor-pointer"
            >
              {prevPost.title}
            </Link>
          </div>
        ) : (
          <div className="basis-6/12" />
        )}
        {nextPost && (
          <div className="basis-6/12 text-right">
            <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 md:text-center">
              NEXT POST <span className="md:hidden">&#129094;</span>
              <span className="hidden md:inline">&#129095;</span>
            </h2>
            <Link
              href={`/posts/${nextPost.slug}`}
              className="block text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 md:text-center hover:cursor-pointer"
            >
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

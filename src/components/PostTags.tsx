import { allPosts, Post } from "contentlayer/generated";
import PostList from "@/components/PostList";
import { useEffect, useState } from "react";

export default function PostTags() {
  const tags = allPosts.flatMap((post: Post) => [post.tags]);
  // const tags = [...new Set()];
  //   const allTags = []
  //   for (posts in allPosts) {
  //   for (tag of post.tag)}
  // }
  //   const [postsFilteredByTag, setPostsFilteredByTag] =
  //     useState<typeof allPosts>(allPosts);
  //   const [tag, setTag] = useState("")
  //   const getFilterPosts = (tag: {tag: string}) => {
  //     const filtered = allPosts.filter(post => {
  //         if (post.tags.includes(tag) {
  //             if (allPosts.length !== postsFilteredByTag.length && !postsFilteredByTag.includes(post) ) {
  //           return post
  //         }
  //         }
  // }

  // useEffect(() => {
  //   const filterByTag: string[] =
  // });
  return (
    <>{tags}</>
    // <ul className="divide-y divide-zinc-300 transition-colors dark:divide-zinc-500">
    //   {postsFilteredByTag.map((post, index) => (
    //     <PostList index={index} key={post.slug} post={post} />
    //   ))}
    // </ul>
  );
}

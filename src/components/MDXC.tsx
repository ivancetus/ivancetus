"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Post } from "contentlayer/generated";
import mdxComponents from "@/lib/mdxComponents";

type Props = {
  post: Post;
};
export default function MDXC({ post }: Props) {
  const MDXContent = useMDXComponent(post.body.code);
  // @ts-ignore
  return <MDXContent components={mdxComponents} />;
}

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const sortedPosts = () =>
  allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

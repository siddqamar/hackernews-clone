import { defineQuery } from "next-sanity";

export const STORIES_QUERY = defineQuery(`
  *[_type == "story"] | order(score desc) [0...30] {
    _id,
    title,
    url,
    author,
    score,
    createdAt,
    "commentCount": count(*[_type == "comment" && references(^._id)])
  }
`);

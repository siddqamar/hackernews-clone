import { StoryItem } from "@/components/StoryItem";
import { getStories } from "@/sanity/lib/api";

// Mock data for initial preview and fallback
const MOCK_STORIES = [
  {
    _id: "1",
    title: "Gemini CLI is surprisingly capable",
    url: "https://example.com/gemini",
    author: "cliauthor",
    score: 156,
    createdAt: new Date().toISOString(),
    commentCount: 42,
  },
  {
    _id: "2",
    title: "Show HN: A Hacker News clone in Next.js 15",
    author: "developer",
    score: 89,
    createdAt: new Date().toISOString(),
    commentCount: 12,
  },
  {
    _id: "3",
    title: "The future of Headless CMS with Sanity",
    url: "https://sanity.io",
    author: "sanity_fan",
    score: 230,
    createdAt: new Date().toISOString(),
    commentCount: 88,
  }
];

export default async function Home() {
  const sanityStories = await getStories();
  const stories = sanityStories.length > 0 ? sanityStories : MOCK_STORIES;

  return (
    <div className="flex flex-col">
      {stories.map((story, index) => (
        <StoryItem key={story._id} rank={index + 1} story={story} />
      ))}
      <div className="mt-4 ml-8">
        <button className="text-[10pt] cursor-pointer hover:underline text-hn-grey">
          More
        </button>
      </div>
    </div>
  );
}
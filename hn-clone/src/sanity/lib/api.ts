import { client } from "./client";
import { STORIES_QUERY } from "./queries";

export interface Story {
  _id: string;
  title: string;
  url?: string;
  author: string;
  score: number;
  createdAt: string;
  commentCount: number;
}

export async function getStories(): Promise<Story[]> {
  try {
    // If projectId is dummy, don't even try to fetch to avoid network errors in logs
    if (client.config().projectId === 'dummy-id') {
      console.warn("Sanity Project ID is missing (dummy-id). Returning mock data.");
      return [];
    }
    
    return await client.fetch(STORIES_QUERY);
  } catch (error) {
    console.error("Error fetching stories from Sanity:", error);
    return [];
  }
}

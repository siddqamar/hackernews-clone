import Link from 'next/link'
import { ChevronUp } from 'lucide-react'

interface StoryProps {
  rank: number
  story: {
    _id: string
    title: string
    url?: string
    author: string
    score: number
    createdAt: string
    commentCount?: number
  }
}

export function StoryItem({ rank, story }: StoryProps) {
  const domain = story.url ? new URL(story.url).hostname.replace('www.', '') : null
  const timeAgo = new Date(story.createdAt).toLocaleDateString() // Simplification for now

  return (
    <div className="flex items-start gap-1 py-1">
      <div className="min-w-[1.5rem] text-right text-hn-grey text-[10pt] pt-[1px]">
        {rank}.
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-1">
          <button className="text-hn-grey cursor-pointer hover:text-black self-start mt-[3px]">
            <ChevronUp size={14} strokeWidth={3} />
          </button>
          <span className="text-[10pt] font-medium leading-tight">
            {story.url ? (
              <a href={story.url} target="_blank" rel="noreferrer" className="hover:underline visited:text-gray-500">
                {story.title}
              </a>
            ) : (
              <Link href={`/item/${story._id}`} className="hover:underline">
                {story.title}
              </Link>
            )}
          </span>
          {domain && (
            <span className="text-[8pt] text-hn-grey hover:underline cursor-pointer">
              ({domain})
            </span>
          )}
        </div>
        <div className="text-[7pt] text-hn-grey ml-[18px] mt-0.5">
          <span>{story.score} points</span> by {story.author} <span title={story.createdAt}>{timeAgo}</span> | 
          <Link href={`/item/${story._id}`} className="hover:underline ml-1">
             {story.commentCount || 0} comments
          </Link>
        </div>
      </div>
    </div>
  )
}

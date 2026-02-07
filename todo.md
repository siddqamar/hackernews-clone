# Todo List - HN Clone

## Phase 1: Setup & Infrastructure
- [x] Initialize Next.js project with TypeScript and Tailwind CSS
- [x] Install dependencies (`lucide-react`, `sanity`, `next-sanity`, `clsx`, `tailwind-merge`)
- [x] Configure Sanity Schema:
    - [x] `story`: title, url, author, score, descendants (comment count), createdAt
    - [x] `comment`: text, author, parentStory, createdAt
- [x] Setup shadcn/ui (Button, Dialog/Modal) - *Replaced with custom Tailwind components to match HN's minimalist design*

## Phase 2: Core Components
- [x] Create `Navbar` component (Orange header with HN logo and nav links)
- [x] Create `StoryItem` component (The classic list row: rank, upvote, title, domain, meta info)
- [x] Create `Footer` component (Navigation links and search bar placeholder)

## Phase 3: Layout & Pages
- [x] Implement Main Layout (Centered container, specific HN background colors)
- [x] Implement Home Page (List of stories fetched from Sanity)
- [x] Implement "Submit" functionality:
    - [x] Add "submit" link in Navbar
    - [x] Create a modal/popup trigger that shows the hackathon message

## Phase 4: Polish & Data
- [x] Ensure mobile responsiveness (adjusting font sizes and padding)
- [x] Add placeholder/manual data in Sanity Studio (Added seed script and fallback data)
- [x] Final visual audit against news.ycombinator.com (Implemented responsive navbar and story items)

import { client } from '../src/sanity/lib/client'

const STORIES = [
  {
    _type: 'story',
    title: 'Show HN: Gemini CLI Agent',
    url: 'https://gemini.google.com',
    author: 'google_dev',
    score: 500,
    createdAt: new Date().toISOString(),
  },
  {
    _type: 'story',
    title: 'Hacker News API',
    url: 'https://github.com/HackerNews/API',
    author: 'pg',
    score: 1200,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _type: 'story',
    title: 'Rust for Web Developers',
    url: 'https://rust-lang.org',
    author: 'rustacean',
    score: 340,
    createdAt: new Date(Date.now() - 10000000).toISOString(),
  }
]

async function seed() {
  if (client.config().projectId === 'dummy-id') {
    console.error('Error: You are using a dummy project ID. Please set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in your .env.local file.')
    process.exit(1)
  }

  console.log('Starting seed...')
  
  for (const story of STORIES) {
    try {
      await client.create(story)
      console.log(`Created story: ${story.title}`)
    } catch (err) {
      console.error(`Failed to create story: ${story.title}`, err)
    }
  }

  console.log('Seeding complete!')
}

seed().catch(console.error)

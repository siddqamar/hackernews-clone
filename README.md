# Hacker News Clone

This is a modern Hacker News clone built for a hackathon using Next.js 15, Sanity.io, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Docker Desktop**: [Download and Install Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Quick Start (Running the App)

Follow these steps to run the application using Docker Compose:

1. **Start the environment:**
   ```bash
   docker-compose up -d
   ```

2. **Access the container:**
   ```bash
   docker compose exec sandbox bash
   ```

3. **Install and Start:**
   ```bash
   cd hn-clone
   npm install
   npm run dev
   ```

4. **View the Application:**
   Visit [http://localhost:3000](http://localhost:3000).

---

## Sanity.io Setup Guide

To connect the application to your own Sanity project and manage content:

### 1. Create a Sanity Project
If you don't have one, create it at [sanity.io/manage](https://sanity.io/manage) or run:
```bash
npx sanity@latest init
```

### 2. Configure Environment Variables
Inside the `hn-clone` directory, create a `.env.local` file:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your_write_token" # Required only for seeding data
```

### 3. Setup Sanity Studio
The Studio is built-in at `/studio`. You can manage your content by visiting [http://localhost:3000/studio](http://localhost:3000/studio).

### 4. Seed Initial Data (Optional)
To quickly populate your Sanity project with sample stories, run the following command inside the container (ensure you have set `SANITY_API_TOKEN`):
```bash
npx tsx scripts/seed-sanity.ts
```

### 5. CORS Settings
Make sure to add `http://localhost:3000` to the **CORS Origins** in your Sanity project settings (sanity.io/manage) to allow the frontend to fetch data.

---

## Project Structure
- `hn-clone/src/app`: Next.js App Router (UI & Pages)
- `hn-clone/src/sanity`: Sanity schemas, client, and queries
- `hn-clone/scripts`: Seeding scripts for content
- `docker-compose.yml`: Local development environment

---
*Built with Gemini 3 CLI for the hackathon.*
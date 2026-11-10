/**
 * Plain mode shows problem → what I built → result.
 * Technical mode shows architecture notes and the stack.
 */
export const projects = [
  {
    id: 'discover-your-color',
    name: 'Discover Your Color',
    context: 'MyTEPI, 2024 – present',
    plain: {
      problem:
        'Businesses selling regulated products have to prove what’s in each product and where it came from, and customers want to check for themselves.',
      solution:
        'A platform where every product gets a QR code. Scan it and you see the product’s history and its official lab results. Businesses manage everything in one place, connected to the checkout systems they already use.',
      result: 'Dozens of clients onboarded, each able to prove product authenticity to their own customers via a scan.',
    },
    technical: {
      points: [
        'QR-code chain of custody linking each product to its verified records.',
        'Certificate of Analysis (COA) ingestion and management across hundreds of documents per client.',
        'Integrations with client point-of-sale systems.',
        'React front end and Node.js/TypeScript back end on AWS (S3, CloudFront, RDS, Cognito, Amplify, Route 53) and Heroku.',
      ],
      stack: ['React', 'Node.js', 'TypeScript', 'AWS', 'Heroku', 'POS integrations'],
    },
  },
  {
    id: 'topmast',
    name: 'Topmast',
    context: 'Personal product, 2026 – present (private beta)',
    plain: {
      problem:
        'My own job-search tracker worked well for me, but it was built for one person on one computer. Other job seekers need the same tools without any setup.',
      solution:
        'A job-search tracker anyone can sign up for, rebuilt from my personal dashboard as a product. It works in the browser, keeps working offline, sends reminders by push and email, and its paid tier finds matching jobs and writes tailored resumes and cover letters.',
      result: 'Running in an invite-only beta, built and maintained by me end to end, with 600+ automated tests.',
    },
    technical: {
      points: [
        'Multi-tenant SaaS: users → organizations → workspaces, every query scoped by workspace, with Postgres row-level security as a second guard.',
        'Fastify API with batched, idempotent mutations and offline-first sync (IndexedDB via Dexie) so edits made offline replay correctly.',
        'pnpm + Turborepo monorepo; shared domain logic is pure TypeScript used by both the web app and the API, and an Electron desktop app wraps the web build.',
        'Background jobs on Inngest: job ingestion from Greenhouse, Lever, Ashby, Workable and SmartRecruiters APIs, matching with embeddings (pgvector) and Claude scoring, and push/email reminders.',
        'CI on GitHub Actions with a Neon database branch per pull request; deployed to Render and Cloudflare Pages, with WorkOS sign-in and Sentry monitoring.',
      ],
      stack: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Drizzle', 'Turborepo', 'Electron', 'Inngest', 'GitHub Actions'],
    },
  },
  {
    id: 'job-tracker',
    name: 'Job Tracker',
    context: 'Personal project, 2026',
    plain: {
      problem: 'Job hunting means checking dozens of job boards every day, rewriting a resume for each role, and keeping track of where every application stands.',
      solution:
        'An AI agent runs every morning: it scans career pages and job boards, scores each listing against my background, drafts a tailored resume and cover letter for the best matches and emails me a report. A dashboard I built shows the whole pipeline, today’s to-dos and suggested status changes to approve, on my PC or my phone. I review and submit every application myself.',
      result: 'Turns hours of daily searching into a short list worth reading, and became the starting point for Topmast.',
    },
    technical: {
      points: [
        'Scheduled agents crawl career pages and job boards, score listings against a structured career profile, deduplicate against earlier runs and write results to Supabase (Postgres).',
        'React + TypeScript dashboard (TanStack Query and Table, Tailwind, Recharts) reads and writes Supabase directly, with magic-link sign-in and row-level security limiting access to one account.',
        'Database triggers own the bookkeeping (status dates, history, locked fields); the app writes only an approved set of columns, checked by tests.',
        'Local Fastify + SQLite server for settings and an "Ask Claude" panel that can only propose changes; I approve every write.',
        'pnpm monorepo with shared zod schemas, Vitest unit tests and a Playwright end-to-end test against a stand-in database.',
      ],
      stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Fastify', 'SQLite', 'Playwright', 'AI agents'],
    },
  },
  {
    id: 'loan-guru',
    name: 'Loan Guru',
    context: 'GoPrime Mortgage, 2026',
    plain: {
      problem: 'Loan officers lose time digging through long mortgage guidelines to answer a single question.',
      solution:
        'An AI assistant they simply email. It reads the question, searches the company’s mortgage documentation, and replies with an answer and the source it used. If it isn’t confident in the first answer, it looks again before replying.',
      result: 'Cuts research and underwriting time by giving officers a cited answer instead of a document to search.',
    },
    technical: {
      points: [
        'Inbound handling and threaded replies through the Microsoft Graph API, including BCC routing; fixed production issues with filter/sort conflicts, deduplication, rate limiting and conversation IDs.',
        'FastAPI service over a Qdrant vector store of mortgage documentation on a Linux EC2 instance, with n8n workflows on Windows Server.',
        'Two-attempt RAG pipeline with cited sources; weighted confidence scoring across accuracy, relevance and completeness decides whether to answer or retry.',
        'Intent classification routes each email; a conversational fallback agent handles anything that isn’t a guideline question.',
      ],
      stack: ['FastAPI', 'Microsoft Graph API', 'AWS EC2', 'Qdrant', 'n8n', 'RAG', 'LLM APIs'],
    },
  },
  {
    id: 'loan-summaries',
    name: 'Automatic loan summaries',
    context: 'GoPrime Mortgage, 2026',
    plain: {
      problem: 'Every new loan application meant combing through pages of data before an officer could act on it.',
      solution:
        'A system that reads each new application and emails the loan officer a clear summary, several times a day. Borrowers’ personal details are swapped for placeholder codes before the AI sees anything, then put back in the final email.',
      result: 'Hundreds of loans summarized so far, with no raw borrower data ever sent to the AI.',
    },
    technical: {
      points: [
        'Scheduled pipeline pulls new applications from Encompass several times a day.',
        'PII tokenization replaces sensitive borrower fields with tokens before any call to the Anthropic API.',
        'Model output is detokenized and delivered as a formatted email to the assigned loan officer.',
      ],
      stack: ['Encompass', 'Anthropic Claude API', 'PII tokenization', 'Email automation'],
    },
  },
];

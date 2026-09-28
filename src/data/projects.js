/**
 * Plain mode shows problem → what I built → result.
 * Technical mode shows architecture notes and the stack.
 */
export const projects = [
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
        'Two-attempt RAG pipeline against a Qdrant vector store of mortgage documentation, with cited sources in every reply.',
        'Weighted confidence scoring across accuracy, relevance and completeness decides whether to answer or retry.',
        'Intent classification routes each email; a conversational fallback agent handles anything that isn’t a guideline question.',
        'Inbound handling and threaded replies through the Microsoft Graph API, including BCC routing.',
        'Runs on n8n (Windows Server) with Qdrant + FastAPI on a Linux EC2 instance.',
      ],
      stack: ['n8n', 'RAG', 'Qdrant', 'FastAPI', 'Microsoft Graph API', 'AWS EC2', 'LLM APIs'],
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
    id: 'job-search-agent',
    name: 'Daily job-search agent',
    context: 'Personal project, 2026',
    plain: {
      problem: 'Job hunting means checking dozens of job boards every day and rewriting a resume for each role.',
      solution:
        'An AI agent that runs every morning. It scans career pages and job boards, scores each listing against my background, drafts a tailored resume and cover letter for the best matches, skips anything I’ve already seen and emails me a report. I review and submit every application myself.',
      result: 'Turns hours of daily searching into a short list worth reading.',
    },
    technical: {
      points: [
        'Scheduled daily agent that crawls career pages and job boards.',
        'Scores listings against a structured career profile and ranks the results.',
        'Generates tailored resumes and cover letters for top matches.',
        'Deduplicates against previous runs and emails a ranked report.',
      ],
      stack: ['AI agents', 'Scheduled automation', 'LLM APIs', 'Document generation'],
    },
  },
];

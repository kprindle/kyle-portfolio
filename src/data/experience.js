/**
 * Each highlight has two versions:
 *   plain     – for recruiters and non-technical readers
 *   technical – for engineers and hiring managers
 * The reading-mode toggle decides which one shows.
 */
export const experience = [
  {
    company: 'GoPrime Mortgage',
    engagement: 'Contract',
    location: 'Remote',
    roles: [{ title: 'Full-Stack Developer & AI Consultant', dates: 'Mar 2026 – Present' }],
    summary: 'I build AI tools that help GoPrime’s loan officers find answers and review new loans faster.',
    highlights: [
      {
        plain:
          'Built an AI assistant that 32 loan officers can email with mortgage questions. It replies with an answer and shows exactly which guideline it came from.',
        technical:
          'Built Loan Guru: an n8n email agent with a two-attempt RAG pipeline over a Qdrant vector store, weighted confidence scoring, intent classification and Microsoft Graph replies.',
      },
      {
        plain:
          'Automated summaries of every new loan application, emailed to officers several times a day, while keeping borrowers’ personal details away from the AI.',
        technical:
          'Automated Encompass loan-summary emails several times daily, with PII tokenization so borrower data never reaches the Anthropic API in raw form.',
      },
      {
        plain: 'Found and fixed problems in the live systems quickly so officers weren’t left waiting on answers.',
        technical:
          'Resolved production issues in the Microsoft Graph integration: filter/sort conflicts, deduplication, API rate limiting and conversation-ID handling.',
      },
    ],
  },
  {
    company: 'MyTEPI',
    engagement: 'Full-time',
    location: 'Remote',
    roles: [
      { title: 'VP of Product & Co-Founder', dates: 'Sep 2025 – Present' },
      { title: 'Lead Software Engineer (first engineer hired)', dates: 'Jan 2024 – Sep 2025' },
    ],
    summary:
      'MyTEPI hired me as its first engineer, with no code, servers or systems in place. I built the whole platform, and was later named a co-founder in recognition of that work, moving into product leadership.',
    highlights: [
      {
        plain: 'Built the company’s entire software platform from scratch. It still runs on that foundation today.',
        technical:
          'Designed and built the full stack from zero: React front end, Node.js/TypeScript services, AWS (S3, CloudFront, RDS, Cognito, Amplify, Route 53) and Heroku.',
      },
      {
        plain:
          'Brought dozens of business clients onto the platform, each with hundreds of lab-test documents, and connected it to the checkout systems they already used.',
        technical:
          'Onboarded dozens of clients with hundreds of Certificate of Analysis documents each, and built integrations with client point-of-sale systems.',
      },
      {
        plain: 'Participating clients saw a 12.5% increase in yearly revenue.',
        technical:
          'The platform made the company’s proprietary color algorithms deployable at scale; participating clients saw a 12.5% annual revenue increase.',
      },
      {
        plain: 'Managed a team of 4, including hiring and training a junior engineer who took over web development.',
        technical:
          'Managed 4 people and trained a junior engineer to take ownership of web development. Own technical hiring and architecture decisions.',
      },
      {
        plain: 'Set product direction and work with founders, outside developers, testing labs and physician partners.',
        technical:
          'Own the product roadmap and coordinate across founders, external developers, testing labs and physician organizations.',
      },
    ],
  },
];

export const earlierExperience = {
  company: 'Parking management company',
  location: 'Charlotte, NC',
  title: 'Valet Supervisor',
  dates: '2020 – 2024',
  summary:
    'Promoted from valet to supervisor and placed at the company’s highest-revenue location, the Grand Bohemian Hotel in uptown Charlotte. Led teams of 8, trained dozens of new hires, and handled guest issues across a 300-room hotel, restaurant and rooftop bar. Worked full-time through college, and stayed on after graduating in 2022 while searching a tight tech market for the right engineering role.',
};

export const education = {
  school: 'University of North Carolina at Charlotte',
  degree: 'B.S. Computer Science',
  dates: '2018 – 2022',
};

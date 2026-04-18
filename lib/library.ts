export type LibraryItem = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  level: string;
  format: string;
  href?: string;
};

export const featured = [
  {
    slug: 'chatgpt-pdf-study-assistant',
    title: 'How to use ChatGPT as a PDF study assistant',
    description:
      'A practical workflow for reading, summarizing, extracting, and questioning PDF documents with AI.',
    tag: 'Featured Tutorial',
    level: 'Beginner',
    format: 'PDF workflow',
    href: '/tutorials',
  },
  {
    slug: 'nextjs-app-router-mistakes',
    title: 'Avoiding common mistakes in the Next.js App Router',
    description:
      'A grounded guide to structure, rendering, and routing pitfalls when building modern AI or content-heavy sites.',
    tag: 'Featured Tutorial',
    level: 'Intermediate',
    format: 'Next.js',
    href: '/tutorials',
  },
  {
    slug: 'mermaid-flowcharts-basic-syntax',
    title: 'Mermaid Flowcharts — basic syntax',
    description:
      'A clean entry point for creating readable diagrams from text for architecture notes and knowledge hubs.',
    tag: 'Featured Visual',
    level: 'Beginner',
    format: 'Diagram',
    href: '/resources',
  },
] satisfies LibraryItem[];

export const tutorials = [
  {
    slug: 'chatgpt-pdf-study-assistant',
    title: 'How to use ChatGPT as a PDF study assistant',
    description:
      'Learn a practical workflow for reading, summarizing, extracting, and questioning PDF documents with AI.',
    tag: 'Tutorial',
    level: 'Beginner',
    format: 'PDF workflow',
  },
  {
    slug: 'nextjs-app-router-mistakes',
    title: 'Avoiding common mistakes in the Next.js App Router',
    description:
      'A grounded guide to structure, rendering, and routing pitfalls developers hit in the App Router.',
    tag: 'Tutorial',
    level: 'Intermediate',
    format: 'Next.js',
  },
  {
    slug: 'claude-code-practical-workflows',
    title: 'Getting practical with Claude Code workflows',
    description:
      'A simple introduction to using Claude Code for codebase exploration, refactoring, debugging, and repeatable dev tasks.',
    tag: 'Tutorial',
    level: 'Intermediate',
    format: 'Developer tools',
  },
] satisfies LibraryItem[];

export const resources = [
  {
    slug: 'chatgpt-101-webinar-resource-guide',
    title: 'ChatGPT 101 Webinar Resource Guide',
    description:
      'An official practical guide for prompt workflows, file-based exercises, and everyday AI usage patterns.',
    tag: 'Resource',
    level: 'Official',
    format: 'Guide',
    href: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-101-webinar-resource-guide',
  },
  {
    slug: 'openai-api-documentation',
    title: 'OpenAI API Documentation',
    description:
      'Official developer documentation for building with OpenAI APIs, production topics, and platform references.',
    tag: 'Resource',
    level: 'Official',
    format: 'API docs',
    href: 'https://developers.openai.com/api/docs',
  },
  {
    slug: 'nextjs-on-vercel',
    title: 'Next.js on Vercel',
    description:
      'Official deployment and framework guidance for running Next.js projects smoothly on Vercel.',
    tag: 'Resource',
    level: 'Official',
    format: 'Deployment',
    href: 'https://vercel.com/docs/frameworks/full-stack/nextjs',
  },
] satisfies LibraryItem[];

export const visuals = [
  {
    slug: 'mermaid-flowcharts-basic-syntax',
    title: 'Mermaid Flowcharts — basic syntax',
    description:
      'A clear entry point for making readable diagrams from text, ideal for architecture notes and explainers.',
    tag: 'Visual',
    level: 'Beginner',
    format: 'Mermaid',
    href: 'https://mermaid.js.org/syntax/flowchart.html',
  },
  {
    slug: 'mermaid-syntax-reference-and-examples',
    title: 'Mermaid syntax reference and examples',
    description:
      'A compact reference for supported diagram types, styling options, and reusable patterns.',
    tag: 'Visual',
    level: 'Reference',
    format: 'Examples',
    href: 'https://mermaid.js.org/intro/syntax-reference.html',
  },
] satisfies LibraryItem[];

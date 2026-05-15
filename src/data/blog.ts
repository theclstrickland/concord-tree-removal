export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-tree-removal-cost-concord-nc',
    title: 'How Much Does Tree Removal Cost in Concord NC?',
    description: 'Tree removal in Concord NC costs $250 to $2,500 depending on size, location, and complexity. Get the full pricing breakdown for Cabarrus County homeowners.',
    date: '2026-05-15',
    readTime: '6 min read',
  },
  {
    slug: 'tree-trimming-vs-tree-removal-which-do-you-need',
    title: "What's the Difference Between Tree Trimming and Tree Removal?",
    description: 'Not sure if your tree needs trimming or full removal? Here is how to tell the difference and choose the right service for your Concord NC property.',
    date: '2026-05-15',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-hire-tree-removal-service-questions-to-ask',
    title: 'How to Hire a Tree Removal Service: What Questions Should I Ask?',
    description: 'Hiring a tree service in Concord NC? These 8 questions help you spot the pros, avoid scams, and get the best value on your next tree removal project.',
    date: '2026-05-15',
    readTime: '5 min read',
  },
];

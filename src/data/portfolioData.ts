export interface ExperienceItem {
  id: string;
  role: string;
  establishment: string;
  period: string;
  description: string;
}

export const PORTFOLIO_INFO = {
  name: 'Cheela Mae Felix',
  role: 'Outlet Cashier / Service Crew',
  category: 'Customer Service & F&B',
  profileText:
    'Detail-oriented customer service and friendly with 3 years experience handling money transactions and point of sales, resolving customer problem/complaints. Dedicated to providing exceptional service. I am Ready to leverage these skills in your company.',
  profileImage: '/prof.png',
  fallbackProfileImage: '/assets/aistudio/prof_441c6f1e.png',
  phone: '+639106465123',
  phoneDisplay: '+63 910 646 5123',
  email: 'cheelamaef@gmail.com',
  location: 'Blk3 Lot14 Matina Shanghai urban vill. Davao City Philippines',
  initials: 'CMF'
};

export const EXPERIENCE: ExperienceItem = {
  id: 'exp-1',
  role: 'Outlet Cashier/ Service Crew',
  establishment: 'Retail or Food-and-Beverage Establishment',
  period: 'October 2023– April 2025',
  description:
    'Manages financial transactions, operates the point-of-sale (POS) system, and provides customer service at a retail or food-and-beverage establishment.'
};

export const CORE_SKILLS = [
  {
    name: 'Communication',
    description: 'Effective verbal and interpersonal communication with customers and team members.'
  },
  {
    name: 'Time Management',
    description: 'Punctuality, efficient task prioritization, and handling high-volume order flows.'
  },
  {
    name: 'Ai & Automatic Tools',
    description: 'Operating computerized POS registers, automated tools, and digital transaction systems.'
  },
  {
    name: 'Customer Service',
    description: 'Dedicated customer assistance, resolving inquiries, and de-escalating customer complaints.'
  }
];

export const EDUCATION = {
  school: "Daniel R. Aguinaldo Nat'high School",
  track: 'Technical-vocational-livelihood (HOME ECONOMICS- FOOD AND BEVERAGE)',
  period: '2017-2023'
};

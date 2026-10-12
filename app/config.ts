/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   Personal content for Amy Zhao. Facts come from her 2026 resume.
   Derived links (GitHub, LinkedIn, email, resume) are built from ME.
   ───────────────────────────────────────────────────────────────────── */

export const ME = {
  firstName: 'Amy',
  lastName: 'Zhao',
  role: 'Computer Science Student',
  email: 'amyzhaoseattle@gmail.com',
  github: 'amyzhao-entrepreneur',
  linkedin: 'amy-zhao-entrepreneur',
  resumePath: '/resume.pdf',
};

const GITHUB_URL = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://www.linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF = `mailto:${ME.email}`;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const PERSON = {
  firstName: ME.firstName,
  lastName: ME.lastName,
  fullName: `${ME.firstName} ${ME.lastName}`,
  role: ME.role,
};

export const SITE = {
  url: SITE_URL,
  title: `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description:
    'Personal site of Amy Zhao, a computer science student at UCLA. Resume, projects, GitHub, and LinkedIn.',
};

export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  headline: 'My name is Amy. Welcome to my page!',
  photo: '/headshot.jpg',
  bio: 'I am a computer science student at UCLA. I built Motivate Me, a daily-quotes iOS app on the App Store, founded Trailblazer Tutoring, and write middle-grade and young adult books.',
};

export interface EducationEntry {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  graduation: string;
  /** Prefix the date with "Expected" for a degree still in progress. */
  expected?: boolean;
  courses: string[];
  notes?: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of California, Los Angeles',
    degree: 'B.S. in Computer Science',
    graduation: 'Jun 2030',
    expected: true,
    courses: [],
    notes: [
      'Member of the New Bruin Leadership Academy, a leadership program for 50 students.',
      'UCLA Alumni Scholar: 1 of 175 selected from 2,000 applicants.',
      'Bruin Software Engineers Fellowship: 15% acceptance rate; selected for the LLM Inference track.',
    ],
  },
  {
    school: 'Stanford University',
    degree: 'Summer Session, Public Speaking and Economics',
    gpa: '4.00',
    graduation: 'Aug 2025',
    courses: [],
  },
  {
    school: 'Inglemoor High School',
    degree: 'Full IB Diploma, Magna Cum Laude',
    gpa: '3.98',
    graduation: 'Jun 2026',
    courses: [],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Motivate Me: Soft Daily Quotes',
    role: 'iOS App Creator & Developer',
    location: '',
    start: 'Jul 2026',
    end: 'Present',
    bullets: [
      'Published an iOS app that delivers daily motivational quotes, exports wallpapers, and shows quotes on Home Screen widgets.',
      'Reached 90 App Store downloads and 290 page views in the first eight weeks, with no paid promotion.',
      'Implemented daily quote rotation, on-demand refresh, quote history, and photo-library export.',
      'Designed the App Store promotional text and screenshots in Canva.',
    ],
    tech: ['Swift', 'iOS', 'Canva'],
  },
  {
    company: 'DataVisor',
    role: 'Marketing Intern',
    location: '',
    start: 'Aug 2025',
    end: 'Nov 2025',
    bullets: [
      'Prepared DEFEND Training, an AML, fraud, and risk education platform, for launch at a Forbes Fintech 50 company that uses AI to fight financial fraud.',
      'Secured a partnership with About Fraud, increasing platform reach by 29,000+ professionals.',
      'Produced 10- to 15-minute video lectures with HeyGen and coordinated with a video editor on quality and consistency.',
      'Managed new-user onboarding in Absorb LMS, collected testimonials, and tracked work in Jira, Monday.com, and Slack.',
    ],
    tech: ['HeyGen', 'Absorb LMS', 'Jira', 'Monday.com', 'Slack', 'Google Workspace'],
  },
  {
    company: 'Trailblazer Tutoring',
    role: 'Founder & CEO',
    location: '',
    start: 'Jul 2022',
    end: 'Present',
    bullets: [
      'Founded TrailblazerTutoring.com, an English tutoring company, and generated $98,000+ in revenue.',
      'Built and manage a 12-person team: 6 English tutors, 2 art tutors, and 4 backup English tutors.',
      'Run pricing, tutor onboarding, parent communication, and quality control across 20+ weekly online and in-person classes.',
      'Developed 100,000+ words of curriculum and copyrighted it with the Library of Congress. Coached students admitted to Castilleja, Woodland, and Overlake.',
    ],
    tech: ['Square', 'PayPal', 'Google Sheets', 'Google Calendar'],
  },
  {
    company: 'Independent Author',
    role: 'Middle-Grade & Young Adult Author',
    location: '',
    start: 'Nov 2016',
    end: 'Present',
    bullets: [
      'Wrote and independently published 4 chapter books and 3 graphic novels.',
      'Registered a sole proprietorship and a Washington State business license at age 11, and generated $15,000+ in book sales.',
      'Worked with independent bookstores in 6 states to host youth writing workshops, author interviews, and book events.',
    ],
    tech: [],
  },
];

export interface ProjectEntry {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  featured: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Motivate Me',
    description:
      'A soft daily-quotes iOS app. People get one motivational quote a day, export wallpapers, and keep a quote on the Home Screen with widgets. It is free on the App Store, with no ads or in-app purchases.',
    tech: ['Swift', 'iOS', 'Widgets'],
    github: `${GITHUB_URL}/Motivate-Me`,
    live: 'https://apps.apple.com/us/app/motivate-me-soft-daily-quotes/id6797728698',
    liveLabel: 'App Store',
    featured: true,
  },
  {
    name: 'Trailblazer Tutoring',
    description:
      'An English tutoring company I founded in 2022. The team teaches 20+ weekly classes, and the company has generated $98,000+ in revenue.',
    tech: ['Operations', 'Curriculum', 'Tutoring'],
    live: 'https://www.trailblazertutoring.com',
    liveLabel: 'Website',
    featured: true,
  },
  {
    name: 'Books',
    description:
      'Four chapter books and three graphic novels, written and independently published. Book sales have passed $15,000, alongside youth writing workshops with bookstores in six states.',
    tech: ['Writing', 'Publishing'],
    featured: false,
  },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email', href: EMAIL_HREF },
];

export const CONTACT = {
  email: ME.email,
  blurb:
    "I am a computer science student at UCLA. If you want to talk about Motivate Me, Trailblazer Tutoring, or a project you're working on, my inbox is open.",
  links: [
    { label: 'Email', href: EMAIL_HREF, display: ME.email },
    { label: 'GitHub', href: GITHUB_URL, display: `github.com/${ME.github}` },
    { label: 'LinkedIn', href: LINKEDIN_URL, display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume', href: ME.resumePath, display: 'Download PDF' },
  ],
};

export const FOOTER = {
  tagline: 'Computer science student at UCLA. I build iOS apps, run Trailblazer Tutoring, and write books.',
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'LinkedIn', href: LINKEDIN_URL },
        { label: 'Email', href: EMAIL_HREF },
        { label: 'Resume', href: ME.resumePath },
      ],
    },
  ],
};

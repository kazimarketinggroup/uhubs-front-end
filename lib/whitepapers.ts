export type Whitepaper = {
  title: string;
  description: string;
  // Google Drive share link or direct-download URL for the PDF.
  // For auto-download use: https://drive.google.com/uc?export=download&id=<FILE_ID>
  downloadUrl: string;
};

export const whitepapers: Whitepaper[] = [
  {
    title: "Leveraging Competency Data helps Move the Needle on Performance",
    description:
      "Webinar Special: This webinar is in partnership with our SBR to understand why Leveraging Competency Data helps Move the Needle on Performance...",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_1",
  },
  {
    title: "Future of Sales Enablement in 2021",
    description:
      "Sales Enablement is a rising discipline in the SaaS space, and is increasingly becoming a necessity. Get insights into where the world of Sales Enablement is heading.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_2",
  },
  {
    title: "Sales Motivation Toolkit",
    description:
      "Salespeople can be highly skilled, but if their managers aren't motivating them to put those skill sets into action, where do they go from there?",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_3",
  },
  {
    title:
      "Understanding Which Competencies Drive SAAS A-Players to Achieve Excellence",
    description:
      "In this whitepaper, we are looking at the competencies & development trends that correlate with outstanding performance to see what differentiates A player reps from others...",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_4",
  },
  {
    title: "Remote Sales Performance in 2021",
    description:
      "Written in partnership with G2, Smarp, Salesforce and more, this study reveals how SaaS sales leaders have adapted their organisations to the remote world.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_5",
  },
  {
    title: "1:1 Coaching Best Practices For Sales Leaders",
    description:
      "Coaching is one of the most important roles sales leaders play in developing people, improving performance and achieving goals. So where do you start?",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_6",
  },
  {
    title: "2024 - Sales Manager Insights",
    description:
      "This whitepaper compiles insights from leading sales executives, offering a comprehensive look at how top professionals are navigating these challenges to drive growth & efficiency",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_7",
  },
  {
    title: "10 lessons helping scale B2B SaaS sales teams from Seed to Exit",
    description:
      "The journey from Seed to Exit is a testing, but rewarding, one. Discover how to nail your niche, write your playbook, build your team, and more.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID_8",
  },
];

import {
  Landmark,
  Monitor,
  Send,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type IndustryDetail = {
  heroTitle: string;
  heroBullets: string[];
  heroImage: string;
  heroImageAlt: string;
  challenges: { title: string; description: string }[];
  midTitle: string;
  midDescription: string;
  helpsTitle: string;
  helps: { title: string; description: string }[];
  datasetNote: string;
};

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  navLabel: string;
  menuLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  detail: IndustryDetail;
};

export const industries: Industry[] = [
  {
    slug: "private-equity-portfolios",
    icon: Landmark,
    title: "Private Equity Portfolios",
    navLabel: "Private Equity Backed Companies",
    menuLabel: "Private Equity",
    description:
      "The modern revenue acceleration partner to benchmark and drive value-creation across a portfolio.",
    image: "/assets/images/industries/Rectangle 4659.png",
    imageAlt: "Skyscrapers overlaid with financial market charts",
    detail: {
      heroTitle: "Benchmark What 'Great' Looks Like Across Your Whole Portfolio",
      heroBullets: [
        "Diagnose Performance Gaps",
        "Build stronger teams and predictable growth.",
        "AI-powered insights with expert guidance.",
      ],
      heroImage: "/assets/images/industries/Group 1707481070.png",
      heroImageAlt:
        "Collage of revenue roles Uhubs supports: Chief Revenue Officer, Sales Manager, SDR and Sales Enablement",
      challenges: [
        {
          title: "Aggressive targets, no diagnosis",
          description:
            "Value-creation plans commit to revenue growth before anyone has a clear picture of why the existing team isn't hitting quota - or how to fix it within the hold period.",
        },
        {
          title: "Headcount is the default lever",
          description:
            "Hiring before fixing execution gaps inflates cost without improving win rate. Revenue per head falls and exit multiples move in the wrong direction.",
        },
        {
          title: "Hard to defend to the IC",
          description:
            "Sales capability investment rarely maps cleanly to the revenue and EBITDA metrics an investment committee cares about - making it easy to cut and hard to justify.",
        },
      ],
      midTitle: "De-risk the thesis. Across every Portco.",
      midDescription:
        "Gain a clear picture of sales execution across every portfolio company - so you know exactly where to intervene before it threatens the plan.",
      helpsTitle:
        "A Specialist, Data Driven Partner To Private Equity Backed Companies.",
      helps: [
        {
          title: "Diagnose A Portco In Days, Not Quarters",
          description:
            "A Structured Revenue Diagnostic Identifies The Execution Gaps Costing You Growth - Fast Enough To Act Within The Hold Period.",
        },
        {
          title: "Spot The Upside Hiding In Your Portfolio",
          description:
            "Compare Sales Teams And Assets Against Top Performers And Each Other To Find Where The Biggest Opportunity Lives In The Team You Already Own.",
        },
        {
          title: "IC-Ready Reporting",
          description:
            "Tie Capability Improvements Directly To Win Rate, Ramp Time, And Revenue Per Head — In The Metrics Your Investment Committee Expects.",
        },
      ],
      datasetNote:
        "Every Asset is benchmarked against one of the largest proprietary sales capability datasets in modern GTM - 500K+ data points across 45 countries.",
    },
  },
  {
    slug: "professional-services",
    icon: Users,
    title: "Professional services",
    navLabel: "Professional Services",
    menuLabel: "Professional Services",
    description:
      "Turn billable experts into confident commercial sellers on complex, relationship-led engagements.",
    image: "/assets/images/industries/Rectangle 4661.png",
    imageAlt: "Consultants collaborating in a client meeting",
    detail: {
      heroTitle: "Turn Billable Experts Into Confident Commercial Sellers",
      heroBullets: [
        "Identify where commercial skills are limiting revenue growth",
        "Build consistent business development habits across every level",
        "Give your experts the confidence to have commercial conversations",
      ],
      heroImage: "/assets/images/industries/Group 1707481072.png",
      heroImageAlt:
        "Collage of professional services roles Uhubs supports: Business Development, Consulting Talent, Account Manager and Subject Matter Experts",
      challenges: [
        {
          title: "Selling is a second job",
          description:
            "Partners and consultants are brilliant at delivery, but BD is left to instinct - which makes it inconsistent and nearly impossible to coach.",
        },
        {
          title: "Long, relationship-led cycles",
          description:
            "Complex engagements turn on trust and discovery - capabilities that are hard to observe, difficult to coach, and impossible to improve without data.",
        },
        {
          title: 'No shared view of "good"',
          description:
            "Every team defines great BD differently, so coaching and hiring rely on gut feel rather than evidence - making it hard to build anything repeatable.",
        },
      ],
      midTitle: "Fee-earners are expected to win work as well as deliver it",
      midDescription:
        "but commercial capability is rarely measured or developed with any rigour. Here's what Uhubs does about it.",
      helpsTitle:
        "Built For The Way Professional Services Firms Actually Win Work.",
      helps: [
        {
          title: "Define The Winning Blueprint",
          description:
            "Benchmark Your BD Teams Against The Capability Patterns That Actually Win Complex Professional Services Engagements - Not Generic Sales Frameworks.",
        },
        {
          title: "Build Confidence And Proactivity",
          description:
            "Behavioural Insight From Real Client Conversations Shows Exactly Where Discovery, Stakeholder Engagement, And Value Framing Break Down.",
        },
        {
          title: "Develop Fee-Earners At Scale",
          description:
            "Role-Specific Development Plans Build Commercial Capability Across Partners And Consultants - Without Pulling Them Off Client Work.",
        },
      ],
      datasetNote:
        "Every engagement leverages Uhubs proprietary sales capability dataset of 500K+ data points across 45 countries.",
    },
  },
  {
    slug: "logistics-manufacturing",
    icon: Truck,
    title: "Logistics & Manufacturing",
    navLabel: "Logistics & Manufacturing",
    menuLabel: "Logistics & Manufacturing",
    description:
      "Shorten sales cycles and grow deal sizes whilst reducing the performance gap across your teams.",
    image: "/assets/images/industries/Rectangle 4661 (1).png",
    imageAlt: "Warehouse racking stacked with palletised goods",
    detail: {
      heroTitle: "Reduce Ramp Up Time And Improve Win Rate",
      heroBullets: [
        "Identify why your reps win on price but lose when buyers want business value",
        "Build the skills to navigate procurement-led cycles and multi-stakeholder deals",
        "Develop account managers who grow revenue, not just protect it",
      ],
      heroImage: "/assets/images/industries/Group 1707481074.png",
      heroImageAlt:
        "Collage of logistics and manufacturing roles Uhubs supports: Chief Revenue Officer, Sales Manager, Business Development and Sales Enablement",
      challenges: [
        {
          title: "Deals go quiet and nobody knows why",
          description:
            "When procurement, operations, and finance all have a say, conversations stall in the gaps between them - and it's hard to know which relationship or conversation broke down.",
        },
        {
          title: "Margin under pressure",
          description:
            "Discounting fills the gap when negotiation skills are weak - quietly eroding deal size and margin on every deal, across the whole team.",
        },
        {
          title: "Long cycles hide the cause",
          description:
            "By the time a deal slips, the execution gap that caused it is long forgotten - so the same mistake happens again on the next one.",
        },
      ],
      midTitle:
        "You can see when deals slip and margin erodes. What's harder to see is why.",
      midDescription:
        "Here's how Uhubs gives your sales leaders visibility into the execution gaps driving it.",
      helpsTitle:
        "Revenue Diagnostics Built For How Logistics And Manufacturing Teams Actually Sell.",
      helps: [
        {
          title: "Find Where Deals Lose Momentum",
          description:
            "Behavioural And CRM Data Reveal The Exact Stages Where Deals Stall - So You Know Precisely Where To Coach And Intervene, Not Just That Something Went Wrong.",
        },
        {
          title: "Protect Margin In Negotiation",
          description:
            "Benchmark And Coach Negotiation Capability So Reps Hold Value Instead Of Defaulting To Discounts.",
        },
        {
          title: "Embed Consistent Execution",
          description:
            "Build A Shared Standard For What Good Looks Like Across Regions And Product Lines, Then Track Whether It's Improving With Data.",
        },
      ],
      datasetNote:
        "Every engagement leverages Uhubs proprietary sales capability dataset of 500K+ data points across 45 countries.",
    },
  },
  {
    slug: "software",
    icon: Monitor,
    title: "Software",
    navLabel: "Software",
    menuLabel: "Software",
    description:
      "Ramp new reps faster, improve execution across an existing team to increase revenue per employee.",
    image: "/assets/images/industries/Rectangle 4661 (2).png",
    imageAlt: "Developer workstation showing code on screen",
    detail: {
      heroTitle: "Ramp Reps Faster And Increase Revenue Per Head",
      heroBullets: [
        "Identify why top performers win and replicate those behaviours at scale",
        "Cut ramp time by focusing the journey on a clear, evidence-based playbook from day one",
        "Increase quota attainment without adding headcount",
      ],
      heroImage: "/assets/images/industries/Group 1707481076.png",
      heroImageAlt:
        "Collage of software sales roles Uhubs supports: Chief Revenue Officer, Sales Manager, SDR and Sales Enablement",
      challenges: [
        {
          title: "Onboarding is a black box",
          description:
            "New BDRs ramp at wildly different speeds, and it is unclear which capabilities actually predict early success.",
        },
        {
          title: "Pipeline quality slips",
          description:
            "Activity looks healthy while qualification discipline quietly erodes - and by the time win rates fall, the damage is already baked into the quarter.",
        },
        {
          title: "Expansion is left to chance",
          description:
            "NRR depends on post-sale skills that most teams never measure or develop - leaving your biggest growth lever to individual instinct.",
        },
      ],
      midTitle:
        "Software Sales teams hitting targets right now aren't hiring their way there.",
      midDescription:
        "They're building capability in the team they already have. Here's how Uhubs makes that possible.",
      helpsTitle: "Benchmark Your Team Against The GTM Industry",
      helps: [
        {
          title: "Ramp Reps On What Matters",
          description:
            "Link Onboarding To The Specific Capabilities That Drive First Qualified Meetings And Early Quota Attainment - Not Generic Sales Training.",
        },
        {
          title: "Tighten Qualification",
          description:
            "Behavioural Insight From Calls Shows Exactly Where Qualification Breaks Down - And Which Capabilities Separate Reps Who Close From Those Who Don't.",
        },
        {
          title: "Grow Expansion Revenue",
          description:
            "Benchmark And Develop The Account Expansion Capabilities That Drive NRR - The Skills Most Teams Assume Their AMs Already Have.",
        },
      ],
      datasetNote:
        "Every engagement leverages Uhubs proprietary sales capability dataset, the largest in the industry for B2B Software companies of 500K+ data points across 45 countries.",
    },
  },
  {
    slug: "travel",
    icon: Send,
    title: "Travel",
    navLabel: "Travel",
    menuLabel: "Travel",
    description:
      "Benchmark what 'great looks like' so you can embed consistent execution across regions and seasons.",
    image: "/assets/images/industries/Rectangle 4661 (3).png",
    imageAlt: "Travellers walking with their luggage",
    detail: {
      heroTitle: "Close The Gap Between Your Top Advisors And The Rest",
      heroBullets: [
        "Identify what your highest performers do differently on every enquiry",
        "Build consistent conversion and upsell habits across a high-volume team",
        "Reduce ramp time for new advisors and cut the cost of turnover",
      ],
      heroImage: "/assets/images/industries/Group 1707481077.png",
      heroImageAlt:
        "Collage of travel sales roles Uhubs supports: Chief Commercial Officer, Sales Manager, Travel Consultant and Sales Enablement",
      challenges: [
        {
          title: "Volume hides variation",
          description:
            "Big teams average out - masking the execution gap between top and bottom performers until it's already cost you a significant chunk of revenue.",
        },
        {
          title: "Seasonality strains capability",
          description:
            "Peaks expose weaknesses in qualification and conversion that quieter periods conveniently hide - and by the time you see it, the revenue damage is already done.",
        },
        {
          title: "Inconsistent across regions",
          description:
            "What good performance looks like varies team to team - making coaching inconsistent, hiring unpredictable, and performance improvement impossible.",
        },
      ],
      midTitle: "A widening gap between your top Advisors and the rest.",
      midDescription:
        "You can see that performance varies. The harder question is why and which behaviours to change. Here's how Uhubs answers it.",
      helpsTitle: "Built For High-Volume, Distributed Travel Sales Teams.",
      helps: [
        {
          title: "Benchmark At Scale",
          description:
            "Assess And Compare Large, Distributed Teams Against Your Top Performers Without Manual Scoring Or Call-By-Call Observation.",
        },
        {
          title: "Lift Conversion In Peaks",
          description:
            "Pinpoint The Capabilities That Drive Conversion And Coach Them Before The Next Seasonal Rush - Not After It's Already Cost You Bookings.",
        },
        {
          title: "One Standard, Everywhere",
          description:
            "Embed A Consistent Definition Of Great Across Every Region And Team, Then Track Whether It's Improving - With Data, Not Gut Feel.",
        },
      ],
      datasetNote:
        "Every engagement leverages Uhubs proprietary sales capability dataset of 500K+ data points across 45 countries.",
    },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

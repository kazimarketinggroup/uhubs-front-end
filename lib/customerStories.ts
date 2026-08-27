const img = (file: string) => `/assets/images/customerstories/${file}`;

export type ClientLogo = {
  name: string;
  src: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Yulife", src: img("67b9159ae0429ca00f50208b_yulife logo.svg") },
  { name: "Pulsar Group", src: img("681e21e76db472338b93be8a_Group 427321275.svg") },
  {
    name: "Treatwell",
    src: img("681e21e7ebaaed16a8a00bce_idHx-s1Ql7_1743934127026 1.svg"),
  },
  {
    name: "Flexport",
    src: img(
      "67f263fb10db00cd6a212886_6776765abc6b7d4fac50255e_66c266f1788daf3798a6d134_Flexport_logo.svg"
    ),
  },
  { name: "Mintel", src: img("681e20cc9cac426cee73ac60_Mintel_Logo_New.avif") },
  { name: "FastSpring", src: img("681e2104c9bc34968c73cdfb_images.avif") },
  {
    name: "Travelopia",
    src: img("67758a5f97573ca47f66134c_travelopia_logo.avif"),
  },
  {
    name: "ParentPay Group",
    src: img("67b9159ae0429ca00f5020ac_parentpay.avif"),
  },
  {
    name: "Quark Expeditions",
    src: img("6a22dc0a2615d49e459f30a7_Quark_Expeditions_logo.svg 1.svg"),
  },
  { name: "Infraspeak", src: img("681e21acc12b296204e91569_Group 427321339.svg") },
];

export type FeaturedStory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const featuredStories: FeaturedStory[] = [
  {
    slug: "parentpay",
    title: "How Uhubs Helped ParentPay Define Their Territory Manager Blueprint",
    description:
      "Uhubs helped ParentPay define their Territory Manager blueprint, guiding 3 new hires and providing tailored development plans...",
    image: img("67e2c4d26c6eb73314b039c0_Group 427321260.avif"),
    imageAlt: "ParentPay Group customer story",
  },
  {
    slug: "fastest-growing-companies",
    title: "How Uhubs Reduced Ramp Time By 50% For Europe's Fastest Growing Companies",
    description:
      "A 50% reduction in ramp time resulting in a £200k revenue benefit per rep within 60 days whilst saving 41 hours per quarter in manager admin and training time.",
    image: img("67f2571c3f5e55db676b37bd_patentrenewal.avif"),
    imageAlt: "Customer story about Europe's fastest growing companies",
  },
  {
    slug: "smarp",
    title: "How Uhubs Helped Smarp Increase Deal Sizes By > 10%",
    description:
      "Uhubs helped Smarp boost deal sizes by over 10%, save 41 hours per quarter in admin, and launch a Sales Academy—contributing to their successful acquisition",
    image: img("67f251c422455a5d04acb491_Group 427321259.avif"),
    imageAlt: "Smarp customer story",
  },
  {
    slug: "pulsar",
    title: "How Uhubs Reduced BDR Ramp Time By 31% For Pulsar",
    description:
      "A 31% reduction in time to first meeting scheduled for BDRs since Uhubs partnered with Pulsar, and an 89% reduction in BDR ramp time variance...",
    image: img("67f25b2290c68aa2f6ed1b81_Group 427321258.avif"),
    imageAlt: "Pulsar customer story",
  },
  {
    slug: "pleo",
    title: "How Uhubs Helped Pleo Cross $100m ARR And Achieve 130% Net Revenue Retention",
    description:
      "Uhubs helped Pleo surpass $100M ARR and achieve 130% net revenue retention by using a data-driven approach to identify and address team training needs...",
    image: img("67f24e5b38b9facd4b24e23d_Pleo.avif"),
    imageAlt: "Pleo customer story",
  },
  {
    slug: "yulife",
    title: "How Uhubs Helped Yulife Embed And Reinforce Their Sales Process To Increase Win Rates By 9%",
    description:
      "A data driven approach to pinpointing specific skills and competencies holding back performance and an efficient way to drive behaviour change across the team...",
    image: img("67f254066455127fcc0e9b97_Group 427321261.avif"),
    imageAlt: "Yulife customer story",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  topic: string;
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "simplifying-coaching-for-busy-sales-managers",
    title: "Simplifying Coaching for Busy Sales Managers",
    industry: "Fintech",
    topic: "Manager Enablement",
    image: img("68094d348a1183bd0eeb2029_pexels-mikael-blomkvist-6476255-p-2000.jpg"),
    imageAlt: "Sales team reviewing performance charts around a desk",
  },
  {
    slug: "supporting-global-sales-reps-with-consistent-learning",
    title: "Supporting Global Sales Reps with Consistent Learning",
    industry: "SaaS",
    topic: "Coaching Across Geos",
    image: img("6809690dfeacb7809d25511e_pexels-lara-jameson-8828423-p-2000.jpg"),
    imageAlt: "World map with location pins and a magnifying glass",
  },
  {
    slug: "turning-feedback-into-actionable-sales-coaching",
    title: "Turning Feedback into Actionable Sales Coaching",
    industry: "IT Services",
    topic: "Feedback & Development",
    image: img("6809666ce1056cd9aec2472f_pexels-cdc-library-3992926-p-2000.jpg"),
    imageAlt: "IT help desk agent working across multiple monitors",
  },
  {
    slug: "driving-continuous-feedback-in-enablement",
    title: "Driving Continuous Feedback in Enablement",
    industry: "SaaS",
    topic: "Feedback & Enablement",
    image: img("680964956af32ad9f12d02ea_pexels-edmond-dantes-4344878-p-2000.jpg"),
    imageAlt: "One-to-one feedback conversation across a meeting table",
  },
  {
    slug: "fast-flexible-development-for-new-reps",
    title: "Fast, Flexible Development for New Reps",
    industry: "SaaS",
    topic: "Skill Development & Onboarding",
    image: img("680950d06ea650361230a7df_pexels-thirdman-5060979-p-2000.jpg"),
    imageAlt: "Hourglass in front of a professional working on a laptop",
  },
  {
    slug: "scaling-onboarding-across-sales-segments",
    title: "Scaling Onboarding Across Sales Segments",
    industry: "Marketing & Advertising",
    topic: "Onboarding Across Territories",
    image: img("680955c4cf2061bad9521ca3_pexels-rdne-7581036-p-2000.jpg"),
    imageAlt: "Welcome gift for a new team member on an office desk",
  },
  {
    slug: "building-a-coaching-culture-in-fintech",
    title: "Building a Coaching Culture in Fintech",
    industry: "Finance",
    topic: "Coaching & Performance",
    image: img("68094e6c14292655b049d9d8_pexels-cottonbro-5989934-p-2000.jpg"),
    imageAlt: "Two colleagues talking in a modern office corridor",
  },
  {
    slug: "accelerating-sdr-onboarding-in-saas",
    title: "Accelerating SDR Onboarding in SaaS",
    industry: "SaaS",
    topic: "New Hire Onboarding",
    image: img("68094db975ba582adc3f5f23_pexels-linkedin-7245805-p-2000.jpg"),
    imageAlt: "New sales rep working at a laptop in a bright office",
  },
  {
    slug: "elevating-sales-training-in-transportation",
    title: "Elevating Sales Training in Transportation",
    industry: "Logistics",
    topic: "Continuous Enablement",
    image: img("68094f887e7dce2b466d2c01_pexels-misbaa-eri-426041722-31709069-p-2000.jpg"),
    imageAlt: "Sales team in an open-plan office during a training session",
  },
  {
    slug: "supporting-sales-enablement-in-insurance",
    title: "Supporting Sales Enablement in Insurance",
    industry: "Insurance",
    topic: "Onboarding",
    image: img("6809505de601d91bf8f669f1_pexels-pixabay-268941-p-2000.jpg"),
    imageAlt: "Canopy of colourful umbrellas",
  },
  {
    slug: "coaching-with-confidence-in-legal-tech",
    title: "Coaching with Confidence in Legal Tech",
    industry: "Legal",
    topic: "Coaching & Onboarding",
    image: img("68096b9e32b25f8d22681081_pexels-mikael-blomkvist-6476186-p-2000.jpg"),
    imageAlt: "Team discussing a presentation on a large screen",
  },
  {
    slug: "scaling-saas-sales-teams-globally",
    title: "Scaling SaaS Sales Teams Globally",
    industry: "SaaS",
    topic: "Onboarding & Development",
    image: img("680952e74869bbaa08785664_pexels-fauxels-3184325-p-2000.jpg"),
    imageAlt: "Distributed team collaborating with laptops and tablets",
  },
  {
    slug: "reducing-ramp-time-in-financial-services",
    title: "Reducing Ramp Time in Financial Services",
    industry: "Finance Industry",
    topic: "Onboarding",
    image: img("68094ac4d7c270801ee1e883_pexels-pixabay-158826-p-2000.jpg"),
    imageAlt: "Wall of red LED lights",
  },
];

export const caseStudyIndustries: string[] = [
  ...new Set(caseStudies.map((study) => study.industry)),
];

export function getFeaturedStory(slug: string): FeaturedStory | undefined {
  return featuredStories.find((story) => story.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export const customerStoriesHeroImage = img("customerStoriesHero.avif");

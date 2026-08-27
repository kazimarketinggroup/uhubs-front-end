export type CaseStudy = {
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  headline: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    company: "YuLife",
    logo: "/assets/images/Group 1707480978.png",
    logoWidth: 100,
    logoHeight: 53,
    headline:
      "How Uhubs Helped Yulife Embed And Reinforce Their Sales Process To Increase Win Rates By 9%",
    href: "/customer-stories/yulife",
  },
  {
    company: "Pulsar",
    logo: "/assets/images/62f9027fa8320dd346143bf4 (1) 1.png",
    logoWidth: 145,
    logoHeight: 90,
    headline: "How Uhubs Reduced BDR Ramp Time By 31% For Pulsar",
    href: "/customer-stories/pulsar",
  },
  {
    company: "Quark Expeditions",
    logo: "/assets/images/Quark_Expeditions_logo.svg 1.png",
    logoWidth: 156,
    logoHeight: 51,
    headline:
      "How Quark Expeditions Scaled Team Enablement And Centralized Performance Tracking With Uhubs",
    href: "/customer-stories/quark-expeditions",
  },
];

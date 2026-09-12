export const site = {
  name: "Imijelo Yophuhliso",
  tagline: "Communities building agency together",
  description:
    "A community development organisation advancing youth empowerment, wellbeing, disability inclusion, and intergenerational learning in South Africa.",
  cta: {
    primary: "Get involved",
    primaryHref: "#get-involved",
    secondary: "Explore our work",
    secondaryHref: "#work",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Get involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: [
      "Empowering Youth.",
      "Enabling Communities.",
      "Inspiring Futures.",
    ] as const,
    support:
      "Enabling inclusive communities where people contribute their strengths, participate meaningfully, and thrive together.",
  },
  theoryOfChange: {
    title: "Our Theory of Change",
    body: "We believe that every person has strengths to contribute. When people participate meaningfully in community life and are valued for who they are, communities become more inclusive and creating a society where everyone can thrive together.",
    steps: [
      {
        key: "Person",
        detail: "Contribute strengths.",
      },
      {
        key: "Community",
        detail: "Promote participation and belonging.",
      },
      {
        key: "Society",
        detail: "Thrive together.",
      },
    ] as const,
  },
  pillars: {
    title: "Our work",
    intro:
      "Under one umbrella, Imijelo organises community-based platforms across three strategic pillars.",
    items: [
      {
        id: "future-readiness",
        name: "Youth Empowerment and Opportunity Development",
        motto: "",
        accent: "terracotta" as const,
        focus: ["Identity", "Behaviour", "Agency", "Opportunity"],
        summary:
          "Supporting young people to develop the confidence, leadership, life skills, and agency needed to navigate their transition into adulthood and pursue meaningful opportunities.",
      },
      {
        id: "wellbeing",
        name: "Disability Inclusion and Family Support",
        motto: "Enabling Inclusion, Participation, and Belonging",
        accent: "sage" as const,
        focus: [
          "Parent support groups",
          "Savings and Investment Groups",
          "Inclusive ECD programmes",
        ],
        summary:
          "Promoting inclusive early childhood development and empowering parents and caregivers to support the participation, inclusion, and wellbeing of children with disabilities.",
      },
      {
        id: "intergenerational",
        name: "Intergenerational Care and Learning",
        motto: "Learning Across Generations, Growing Together",
        accent: "river" as const,
        focus: [
          "Intergenerational Indigenous Learning",
          "Community-Engaged Knowledge Exchange",
          "Volunteer and participation opportunities",
        ],
        summary:
          "Creating opportunities that enable intergenerational learning, mutual support, and meaningful participation in community life.",
      },
    ],
  },
  sgm: {
    title: "Smart Generation Movement",
    motto: "Personal growth through money management",
    body: "Our flagship youth platform helps young people develop identity, make positive life choices, build confidence and agency, and pursue opportunities for their future.",
    focus: [
      "Money management",
      "Career readiness",
      "Leadership development",
      "Mentorship",
      "Future planning",
      "Agency",
    ],
    outcome:
      "Young people gain knowledge, skills, networks, and confidence to navigate the transition into adulthood.",
  },
  inclusion: {
    title: "Disability Inclusion and Family Support",
    body: "Strengthening the environments that enable children with disabilities to participate fully in family, community, and learning contexts. The parent support groups strengthen families, promote peer learning among caregivers, and contribute to more inclusive communities for children with disabilities.",
    points: [
      {
        title: "Parent Support Groups",
        text: "Create safe spaces where parents can connect, share experiences, access support, and learn from one another.",
      },
      {
        title: "Savings and Investment Groups",
        text: "Strengthen financial capability, collective saving, and economic resilience through community-based savings and investment practices.",
      },
      {
        title: "Inclusive ECD Programmes",
        text: "Support the participation, learning, and development of all children through inclusive early childhood development opportunities that value diversity and belonging.",
      },
    ],
  },
  intergenerational: {
    title: "Intergenerational Care and Learning",
    body: "Inclusive communities grow when children, youth, and older adults engage in care, learning, and knowledge exchange.",
    activities: [
      "Indigenous play",
      "Storytelling",
      "Knowledge exchange",
      "Intergenerational learning",
      "Community dialogues",
    ],
    communityWellbeing: {
      title: "Community Wellbeing and Inclusion",
      body: "Serves as the overarching outcome of all our work. By advancing youth empowerment, disability inclusion, intergenerational learning, and social participation, Imijelo contributes to stronger relationships, greater inclusion, increased agency, and more resilient communities.",
    },
  },
  evidence: {
    title: "Thoughtful and evidence-informed",
    body: "We balance warmth with accountability, tracking growth through shared tools and community agreements.",
    items: [
      {
        title: "Poverty Stoplight baselines",
        text: "Baseline surveys using Poverty Stoplight indicators.",
      },
      {
        title: "Ongoing monitoring",
        text: "Monthly monitoring and biannual evaluations.",
      },
      {
        title: "Personal journals",
        text: "Personal Development Journals and financial diaries for impact tracking.",
      },
      {
        title: "Shared accountability",
        text: "MoAs with community groups to guide expectations and accountability.",
      },
    ],
  },
  getInvolved: {
    title: "Join the circle of change",
    body: "Become a Friend of Imijelo. Partner with us, strengthen community platforms, and help people access opportunities that improve wellbeing.",
    pathways: [
      {
        title: "Partner with us",
        text: "Support programmes, research, and community-based platforms.",
      },
      {
        title: "Join Friends of Imijelo",
        text: "Build a global network that sustains local leadership and learning.",
      },
      {
        title: "Connect with the team",
        text: "Reach out to explore collaboration in East London and beyond.",
      },
    ],
  },
  contact: {
    org: "Imijelo Yophuhliso",
    address: "PO Box 2429, East London, 5241, South Africa",
    phone: "+27 (0)43 7530118",
    phoneHref: "tel:+27437530118",
    email: "admin@imijelo.org",
    emailHref: "mailto:admin@imijelo.org",
    facebook: "facebook.com/IMIJELO",
    facebookHref: "https://facebook.com/IMIJELO",
  },
  images: {
    hero: {
      src: "/images/hero.jpeg",
      alt: "Women and children gathered under a tent at a lively South African community meeting.",
    },
    sgm: {
      src: "/images/SGM_1st Cohort_2023.JPG.jpeg",
      alt: "Young learners smile and raise their hands in an energetic classroom session.",
    },
    inclusion: {
      src: "/images/parent support meeting.JPG.jpeg",
      alt: "Parents and caregivers with young children seated together in a community hall for a parent support meeting.",
    },
    intergenerational: {
      src: "/images/Research Engagement_ Washington University students 20180910.jpg.jpeg",
      alt: "Washington University students engage in research and learning with community members.",
    },
    intergenerationalMadwaleni: {
      src: "/images/rural confr2 Madwaleni.jpg (1).jpeg",
      alt: "Three generations of women in traditional dress together during a community gathering in Madwaleni.",
    },
    work: {
      src: "/images/SGM session IMG-20211113.jpg (1).jpeg",
      alt: "Young men seated outdoors under a tree during an SGM session with a facilitator in the Eastern Cape.",
    },
  },
} as const;

export type SiteContent = typeof site;

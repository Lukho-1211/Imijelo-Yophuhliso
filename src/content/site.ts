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
    headline: "People and communities as agents of change",
    support:
      "Young people, families, caregivers, and elders build agency, strengthen relationships, and grow opportunities for wellbeing.",
  },
  theoryOfChange: {
    title: "Our Theory of Change",
    body: "Meaningful social change happens when people, families, and communities build agency, strengthen relationships, foster inclusion, and participate actively in community life.",
    steps: [
      {
        key: "Identity",
        detail: "A clear sense of self, belonging, and community role",
      },
      {
        key: "Behaviour",
        detail: "Positive choices shaped by skills, peers, and support",
      },
      {
        key: "Agency",
        detail: "Confidence and capacity to act with others",
      },
      {
        key: "Opportunity",
        detail: "Pathways that improve wellbeing and futures",
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
        name: "Future Readiness and Opportunity Development",
        motto: "Personal Growth Through Money Management",
        accent: "terracotta" as const,
        focus: [
          "Money management",
          "Leadership development",
          "Career readiness",
          "Mentorship",
          "Future planning",
          "Agency",
        ],
        summary:
          "Using money management as a pathway to personal growth, informed choices, and future readiness. Home of the Smart Generation Movement.",
      },
      {
        id: "wellbeing",
        name: "Community Wellbeing and Inclusion",
        motto: "Collective Agency for Wellbeing and Inclusion",
        accent: "sage" as const,
        focus: [
          "Disability inclusion",
          "Parent support groups",
          "Youth wellbeing",
          "Savings and investment groups",
        ],
        summary:
          "Initiatives that strengthen wellbeing, inclusion, family resilience, and community participation for youth and caregivers.",
      },
      {
        id: "intergenerational",
        name: "Intergenerational Care and Learning",
        motto: "Learning Across Generations, Growing Together",
        accent: "river" as const,
        focus: [
          "Intergenerational care and learning",
          "Community participation",
          "Active citizenship",
        ],
        summary:
          "Children, youth, and older adults exchange knowledge through care, play, storytelling, and community dialogue.",
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
    title: "Wellbeing built with families and peers",
    body: "Disability inclusion programmes, parent support groups, youth wellbeing initiatives, and savings groups strengthen financial resilience and more inclusive communities.",
    points: [
      {
        title: "Disability inclusion",
        text: "Community-based platforms that centre participation and belonging.",
      },
      {
        title: "Parent support",
        text: "Caregivers of children with disabilities learn together and lead together.",
      },
      {
        title: "Savings and investment",
        text: "Pooled savings fund livelihoods and economic inclusion for youth, including youth with disabilities.",
      },
    ],
  },
  intergenerational: {
    title: "Learning across generations",
    body: "Inclusive communities grow when children, youth, and older adults engage in care, learning, and knowledge exchange.",
    activities: [
      "Indigenous play",
      "Storytelling",
      "Knowledge exchange",
      "Intergenerational learning",
      "Community dialogues",
    ],
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
      src: "/images/hero.jpg",
      alt: "Women and children gathered under a tent at a lively South African community meeting.",
    },
    sgm: {
      src: "/images/sgm.jpg",
      alt: "Young learners smile and raise their hands in an energetic classroom session.",
    },
    inclusion: {
      src: "/images/inclusion.jpg",
      alt: "Community members, including people using mobility aids, gather outdoors in shared support.",
    },
    intergenerational: {
      src: "/images/intergenerational.jpg",
      alt: "Women and children sit together under trees in a shaded community gathering.",
    },
    work: {
      src: "/images/work.jpg",
      alt: "A family in traditional Xhosa attire outdoors in East London, Eastern Cape.",
    },
  },
} as const;

export type SiteContent = typeof site;

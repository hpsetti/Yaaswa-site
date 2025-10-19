// Content data composable for managing news articles, awards, and certifications
export const useContentData = () => {
  // News articles data
  const newsArticles = [
    {
      id: 1,
      title: "Sri Devi Constructions Wins 'Best Builder Award 2024'",
      excerpt:
        "We are proud to announce that Sri Devi Constructions has been honored with the prestigious 'Best Builder Award 2024' for our outstanding contribution to sustainable construction practices and innovative building solutions.",
      category: "Awards",
      date: "2024-01-15",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      link: "/news/best-builder-award-2024",
    },
    {
      id: 2,
      title: "New Residential Project 'Green Valley' Launched in Hyderabad",
      excerpt:
        "Our latest residential development 'Green Valley' featuring 200+ eco-friendly apartments with modern amenities and sustainable design has officially launched in the heart of Hyderabad.",
      category: "Projects",
      date: "2024-01-10",
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      link: "/news/green-valley-launch",
    },
    {
      id: 3,
      title: "Partnership with International Construction Firm Announced",
      excerpt:
        "Sri Devi Constructions has entered into a strategic partnership with a leading international construction firm to bring advanced building technologies and sustainable practices to India.",
      category: "Partnerships",
      date: "2024-01-05",
      readTime: 5,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
      link: "/news/international-partnership",
    },
    {
      id: 4,
      title: "Company Achieves ISO 9001:2015 Certification",
      excerpt:
        "We are delighted to announce that Sri Devi Constructions has successfully achieved ISO 9001:2015 certification, demonstrating our commitment to quality management and continuous improvement.",
      category: "Certifications",
      date: "2023-12-28",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      link: "/news/iso-certification",
    },
    {
      id: 5,
      title: "Sustainable Construction Initiative Reaches 100 Projects",
      excerpt:
        "Our commitment to sustainable construction has reached a significant milestone with the completion of 100 eco-friendly projects across various sectors, contributing to environmental conservation.",
      category: "Sustainability",
      date: "2023-12-20",
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      link: "/news/sustainable-milestone",
    },
    {
      id: 6,
      title: "New Office Complex 'Tech Park' Inaugurated",
      excerpt:
        "The state-of-the-art 'Tech Park' office complex featuring modern amenities, green spaces, and smart building technology has been successfully inaugurated and is now operational.",
      category: "Projects",
      date: "2023-12-15",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      link: "/news/tech-park-inauguration",
    },
    {
      id: 7,
      title: "Advanced Construction Technology Integration",
      excerpt:
        "Sri Devi Constructions has successfully integrated cutting-edge construction technologies including 3D modeling, drone surveying, and AI-powered project management systems to enhance efficiency and precision.",
      category: "Technology",
      date: "2023-12-10",
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      link: "/news/technology-integration",
    },
    {
      id: 8,
      title: "Community Development Initiative Launched",
      excerpt:
        "We are proud to launch our new community development initiative, focusing on affordable housing projects and infrastructure development in underserved areas across Telangana.",
      category: "Community",
      date: "2023-12-05",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      link: "/news/community-initiative",
    },
    {
      id: 9,
      title: "Safety Excellence Record Achieved",
      excerpt:
        "Sri Devi Constructions has achieved a remarkable safety record with zero workplace accidents across all active construction sites for the past 24 months, setting new industry standards.",
      category: "Safety",
      date: "2023-11-28",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      link: "/news/safety-excellence",
    },
    {
      id: 10,
      title: "New Training Center for Construction Workers",
      excerpt:
        "Our state-of-the-art training center for construction workers has been inaugurated, providing comprehensive skill development programs and safety training to enhance workforce capabilities.",
      category: "Training",
      date: "2023-11-20",
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1523240798034-6c4b0a5b3a1a?w=600&h=400&fit=crop",
      link: "/news/training-center",
    },
    {
      id: 11,
      title: "Environmental Impact Assessment Completed",
      excerpt:
        "We have successfully completed comprehensive environmental impact assessments for all our ongoing projects, ensuring minimal ecological footprint and sustainable development practices.",
      category: "Environment",
      date: "2023-11-15",
      readTime: 3,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      link: "/news/environmental-assessment",
    },
    {
      id: 12,
      title: "Digital Transformation Initiative",
      excerpt:
        "Sri Devi Constructions has embarked on a comprehensive digital transformation journey, implementing cloud-based project management systems and IoT-enabled construction monitoring.",
      category: "Digital",
      date: "2023-11-10",
      readTime: 5,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "/news/digital-transformation",
    },
    {
      id: 13,
      title: "Employee Recognition Program Launched",
      excerpt:
        "We have launched a comprehensive employee recognition program to celebrate outstanding performance and dedication of our construction teams and support staff.",
      category: "HR",
      date: "2023-11-05",
      readTime: 2,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      link: "/news/employee-recognition",
    },
    {
      id: 14,
      title: "Research Partnership with IIT Hyderabad",
      excerpt:
        "Sri Devi Constructions has entered into a research partnership with IIT Hyderabad to develop innovative construction materials and sustainable building techniques.",
      category: "Research",
      date: "2023-10-30",
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      link: "/news/iit-partnership",
    },
    {
      id: 15,
      title: "Annual Company Retreat Success",
      excerpt:
        "Our annual company retreat was a tremendous success, bringing together all employees for team building activities, strategic planning sessions, and celebration of achievements.",
      category: "Company",
      date: "2023-10-25",
      readTime: 2,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      link: "/news/company-retreat",
    },
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Best Builder Award 2024",
      organization: "Construction Excellence Association",
      description:
        "Recognized for outstanding contribution to sustainable construction practices and innovative building solutions.",
      category: "Excellence",
      year: "2024",
      icon: "i-heroicons-trophy",
      link: "/awards/best-builder-2024",
    },
    {
      id: 2,
      title: "Green Building Certification",
      organization: "Indian Green Building Council",
      description:
        "Achieved platinum certification for our commitment to environmentally sustainable construction practices.",
      category: "Sustainability",
      year: "2023",
      icon: "i-heroicons-leaf",
      link: "/awards/green-building-certification",
    },
    {
      id: 3,
      title: "Safety Excellence Award",
      organization: "National Safety Council",
      description:
        "Recognized for maintaining zero-accident record across all construction sites for three consecutive years.",
      category: "Safety",
      year: "2023",
      icon: "i-heroicons-shield-check",
      link: "/awards/safety-excellence",
    },
    {
      id: 4,
      title: "Innovation in Construction",
      organization: "Construction Technology Institute",
      description:
        "Awarded for implementing cutting-edge construction technologies and digital project management systems.",
      category: "Innovation",
      year: "2022",
      icon: "i-heroicons-cpu-chip",
      link: "/awards/innovation-construction",
    },
    {
      id: 5,
      title: "Quality Management Excellence",
      organization: "International Quality Association",
      description:
        "Recognized for maintaining highest quality standards and achieving ISO 9001:2015 certification.",
      category: "Quality",
      year: "2022",
      icon: "i-heroicons-star",
      link: "/awards/quality-management",
    },
    {
      id: 6,
      title: "Community Impact Award",
      organization: "Social Responsibility Foundation",
      description:
        "Honored for our community development initiatives and affordable housing projects for underprivileged families.",
      category: "Social Impact",
      year: "2021",
      icon: "i-heroicons-heart",
      link: "/awards/community-impact",
    },
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015 Quality Management System",
      organization: "International Organization for Standardization",
      description:
        "Certified for maintaining the highest quality standards in our construction processes and project delivery.",
      category: "Quality",
      year: "2024",
      icon: "i-heroicons-shield-check",
      link: "/certifications/iso-9001",
    },
    {
      id: 2,
      title: "ISO 14001:2015 Environmental Management",
      organization: "International Organization for Standardization",
      description:
        "Certified for our commitment to environmental protection and sustainable construction practices.",
      category: "Environment",
      year: "2024",
      icon: "i-heroicons-leaf",
      link: "/certifications/iso-14001",
    },
    {
      id: 3,
      title: "OHSAS 18001:2007 Occupational Health & Safety",
      organization: "British Standards Institution",
      description:
        "Certified for maintaining the highest standards of occupational health and safety across all our projects.",
      category: "Safety",
      year: "2023",
      icon: "i-heroicons-shield-exclamation",
      link: "/certifications/ohsas-18001",
    },
    {
      id: 4,
      title: "LEED Platinum Certification",
      organization: "U.S. Green Building Council",
      description:
        "Achieved platinum level certification for our green building practices and sustainable construction methods.",
      category: "Sustainability",
      year: "2023",
      icon: "i-heroicons-sparkles",
      link: "/certifications/leed-platinum",
    },
    {
      id: 5,
      title: "BIS Certification for Construction Materials",
      organization: "Bureau of Indian Standards",
      description:
        "Certified for using only BIS-approved construction materials ensuring quality and safety standards.",
      category: "Materials",
      year: "2023",
      icon: "i-heroicons-cube",
      link: "/certifications/bis-materials",
    },
    {
      id: 6,
      title: "PMI Project Management Professional",
      organization: "Project Management Institute",
      description:
        "Certified project management professionals ensuring efficient and effective project delivery across all construction projects.",
      category: "Project Management",
      year: "2022",
      icon: "i-heroicons-clipboard-document-list",
      link: "/certifications/pmi-pmp",
    },
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description:
        "From luxury apartments to affordable housing, we build homes that stand the test of time with modern amenities and sustainable practices.",
      icon: "i-heroicons-home",
      features: [
        "Luxury Apartments & Villas",
        "Affordable Housing Projects",
        "Custom Home Design",
        "Green Building Solutions",
        "Smart Home Integration",
      ],
      projectsCompleted: 150,
      experience: 15,
      link: "/projects?type=residential",
    },
    {
      id: 2,
      title: "Commercial Construction",
      description:
        "State-of-the-art commercial buildings, office complexes, and retail spaces designed for maximum efficiency and aesthetic appeal.",
      icon: "i-heroicons-building-office-2",
      features: [
        "Office Complexes",
        "Shopping Malls",
        "Retail Spaces",
        "Warehouses & Storage",
        "Mixed-Use Developments",
      ],
      projectsCompleted: 80,
      experience: 12,
      link: "/projects?type=commercial",
    },
    {
      id: 3,
      title: "Infrastructure Development",
      description:
        "Large-scale infrastructure projects including roads, bridges, water systems, and public utilities that connect communities.",
      icon: "i-heroicons-building-library",
      features: [
        "Roads & Highways",
        "Bridges & Flyovers",
        "Water Treatment Plants",
        "Sewage Systems",
        "Public Utilities",
      ],
      projectsCompleted: 120,
      experience: 18,
      link: "/projects?type=infrastructure",
    },
    {
      id: 4,
      title: "Industrial Construction",
      description:
        "Specialized industrial facilities including manufacturing plants, power stations, and processing units with advanced engineering.",
      icon: "i-heroicons-cog-6-tooth",
      features: [
        "Manufacturing Plants",
        "Power Stations",
        "Processing Units",
        "Industrial Warehouses",
        "Specialized Facilities",
      ],
      projectsCompleted: 60,
      experience: 14,
      link: "/projects?type=industrial",
    },
    {
      id: 5,
      title: "Renovation & Restoration",
      description:
        "Expert renovation services that breathe new life into existing structures while preserving their historical and architectural value.",
      icon: "i-heroicons-wrench-screwdriver",
      features: [
        "Historical Restoration",
        "Modern Renovations",
        "Structural Repairs",
        "Interior Redesign",
        "Energy Upgrades",
      ],
      projectsCompleted: 90,
      experience: 10,
      link: "/projects?type=renovation",
    },
    {
      id: 6,
      title: "Project Management",
      description:
        "End-to-end project management services ensuring timely delivery, quality control, and cost optimization for all construction projects.",
      icon: "i-heroicons-clipboard-document-list",
      features: [
        "Project Planning",
        "Quality Control",
        "Timeline Management",
        "Cost Optimization",
        "Risk Assessment",
      ],
      projectsCompleted: 200,
      experience: 15,
      link: "/contact",
    },
  ];

  // Board members data
  const boardMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Managing Director",
      bio: "With over 20 years of experience in construction and real estate, Rajesh leads our strategic vision and drives excellence across all projects.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/rajeshkumar",
      twitter: "https://twitter.com/rajeshkumar",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      bio: "Priya oversees our construction operations, ensuring seamless project delivery and maintaining our high standards of quality and safety.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/priyasharma",
      twitter: "https://twitter.com/priyasharma",
    },
    {
      id: 3,
      name: "Vikram Singh",
      position: "Head of Projects",
      bio: "Vikram manages our project portfolio, ensuring timely completion and quality delivery of all construction projects.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/vikramsingh",
      twitter: null,
    },
    {
      id: 4,
      name: "Anita Reddy",
      position: "Chief Financial Officer",
      bio: "Anita manages our financial strategy and ensures sustainable growth while maintaining fiscal responsibility across all operations.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/anitareddy",
      twitter: "https://twitter.com/anitareddy",
    },
    {
      id: 5,
      name: "Dr. Suresh Patel",
      position: "Head of Engineering",
      bio: "Dr. Patel leads our engineering initiatives, ensuring all projects meet the highest technical standards and safety requirements.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sureshpatel",
      twitter: "https://twitter.com/sureshpatel",
    },
    {
      id: 6,
      name: "Meera Joshi",
      position: "Head of Quality Assurance",
      bio: "Meera drives quality standards across our organization, ensuring every project meets our commitment to excellence and client satisfaction.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/meerajoshi",
      twitter: null,
    },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Quality",
      icon: "🏗️",
      description:
        "We maintain the highest standards of construction quality and craftsmanship in every project we undertake.",
    },
    {
      title: "Integrity",
      icon: "🤝",
      description:
        "Honesty and transparency are at the core of our business practices, building trust with our clients and partners.",
    },
    {
      title: "Excellence",
      icon: "⭐",
      description:
        "We strive for excellence in every aspect of our work, from project planning to final delivery and beyond.",
    },
  ];

  // Timeline data
  const timelineData = [
    {
      title: "Company Founded",
      description:
        "Sri Devi Constructions was established with a vision to deliver quality construction services and build lasting relationships with our clients.",
      icon: "i-heroicons-building-office-2",
      color: "blue",
    },
    {
      title: "First Major Project",
      description:
        "Successfully completed our first large-scale residential project, establishing our reputation for quality construction and timely delivery.",
      icon: "i-heroicons-home",
      color: "green",
    },
    {
      title: "Commercial Expansion",
      description:
        "Expanded our services to include commercial construction, office buildings, and retail spaces across the region.",
      icon: "i-heroicons-building-storefront",
      color: "purple",
    },
    {
      title: "Green Building Initiative",
      description:
        "Launched sustainable construction practices, focusing on eco-friendly materials and energy-efficient building designs.",
      icon: "i-heroicons-leaf",
      color: "emerald",
    },
    {
      title: "Technology Integration",
      description:
        "Integrated modern construction technology including 3D modeling, project management software, and quality control systems.",
      icon: "i-heroicons-cpu-chip",
      color: "orange",
    },
    {
      title: "Award Recognition",
      description:
        "Received multiple industry awards for excellence in construction, safety standards, and customer satisfaction.",
      icon: "i-heroicons-star",
      color: "yellow",
    },
    {
      title: "Present Day",
      description:
        "Continuing to lead the construction industry with innovative building solutions, sustainable practices, and commitment to quality.",
      icon: "i-heroicons-rocket-launch",
      color: "red",
    },
  ];

  // Utility functions
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getArticlesByCategory = (category: string) => {
    return newsArticles.filter((article) => article.category === category);
  };

  const getAwardsByYear = (year: string) => {
    return awards.filter((award) => award.year === year);
  };

  const getCertificationsByCategory = (category: string) => {
    return certifications.filter((cert) => cert.category === category);
  };

  return {
    // Data
    newsArticles,
    awards,
    certifications,
    services,
    boardMembers,
    coreValues,
    timelineData,

    // Utility functions
    formatDate,
    getArticlesByCategory,
    getAwardsByYear,
    getCertificationsByCategory,
  };
};

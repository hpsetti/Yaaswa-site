export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  area: string;
  floors: string;
  location: string;
  status: string;
  aboutDescription: string;
  completionDate: string;
  swimmingPool: string;
  apartmentSizes: string;
  garageSpaces: string;
  numberOfEntrances: string;
  downPayment: string;
  numberOfApartments: string;
  agencyCommission: string;
}

export const useProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Villa Klisura",
      description:
        "A luxurious residential complex featuring modern architecture and premium amenities. This project showcases our commitment to excellence in residential construction with state-of-the-art facilities and sustainable design principles.\n\nThe development includes 12 premium apartments with panoramic views, landscaped gardens, and world-class recreational facilities. Each unit is designed with attention to detail and modern living standards.",
      images: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "2740m²",
      floors: "B + G + 2 Floors",
      location: "Hyderabad",
      status: "Completed",
      aboutDescription:
        "The apartments within the Villa Klisura building are designed with southern orientation to ensure optimal lighting and an open view of the Bay of Split. Garage parking spaces and pools are not included in the base price but are available upon individual request from buyers.",
      completionDate: "2026",
      swimmingPool: "On request, with additional cost",
      apartmentSizes: "From 131m² to 173m²",
      garageSpaces: "On request, with additional cost",
      numberOfEntrances: "1",
      downPayment: "40%",
      numberOfApartments: "12",
      agencyCommission: "0%",
    },
    {
      id: 2,
      name: "Solin 4",
      description:
        "A contemporary commercial and residential mixed-use development that represents the future of urban living. This innovative project combines retail spaces, offices, and residential units in a single integrated complex.\n\nThe design emphasizes sustainability and energy efficiency, featuring green building technologies and eco-friendly materials. The project includes modern amenities, smart home systems, and comprehensive security features.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "2808m²",
      floors: "B + G + 2 Floors",
      location: "Bangalore",
      status: "Completed",
      aboutDescription:
        "Solin 4 represents a modern approach to urban living with its innovative mixed-use design. The building features contemporary architecture with energy-efficient systems and smart home technology throughout all units.",
      completionDate: "2025",
      swimmingPool: "Included in common amenities",
      apartmentSizes: "From 95m² to 145m²",
      garageSpaces: "1 space per apartment",
      numberOfEntrances: "2",
      downPayment: "30%",
      numberOfApartments: "36",
      agencyCommission: "2%",
    },
    {
      id: 3,
      name: "Tech Park Complex",
      description:
        "A cutting-edge technology park designed to house modern IT companies and startups. This project features flexible office spaces, conference facilities, and recreational areas for the tech community.\n\nThe complex includes advanced infrastructure for high-speed internet, power backup systems, and modern amenities. The design promotes collaboration and innovation with open spaces and modern architectural elements.",
      images: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "4500m²",
      floors: "B + G + 4 Floors",
      location: "Chennai",
      status: "In Progress",
      aboutDescription:
        "The Tech Park Complex is designed as a hub for innovation and technology companies. It features flexible office spaces, conference facilities, and modern amenities to support the growing tech ecosystem in Chennai.",
      completionDate: "2024",
      swimmingPool: "Not applicable",
      apartmentSizes: "Office spaces from 200m² to 2000m²",
      garageSpaces: "200+ parking spaces",
      numberOfEntrances: "4",
      downPayment: "20%",
      numberOfApartments: "N/A - Office Complex",
      agencyCommission: "3%",
    },
    {
      id: 4,
      name: "Luxury Residences",
      description:
        "An exclusive residential development offering the finest in luxury living. This project features premium apartments with high-end finishes, private balconies, and stunning city views.\n\nThe development includes a clubhouse, swimming pool, fitness center, and landscaped gardens. Each residence is designed with spacious layouts and premium materials to provide the ultimate in comfort and style.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "3200m²",
      floors: "B + G + 3 Floors",
      location: "Mumbai",
      status: "In Progress",
      aboutDescription:
        "Luxury Residences offers the finest in premium living with high-end finishes and stunning city views. Each residence is designed with spacious layouts and premium materials to provide the ultimate in comfort and style.",
      completionDate: "2025",
      swimmingPool: "Rooftop infinity pool",
      apartmentSizes: "From 180m² to 350m²",
      garageSpaces: "2 spaces per apartment",
      numberOfEntrances: "1",
      downPayment: "50%",
      numberOfApartments: "24",
      agencyCommission: "1%",
    },
    {
      id: 5,
      name: "Commercial Plaza",
      description:
        "A modern commercial plaza designed to serve as a business hub for the local community. This project includes retail spaces, offices, restaurants, and entertainment facilities.\n\nThe plaza features contemporary architecture with glass facades, open spaces, and modern amenities. The design promotes foot traffic and creates a vibrant commercial environment for businesses and customers alike.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "5200m²",
      floors: "B + G + 5 Floors",
      location: "Delhi",
      status: "Proposed",
      aboutDescription:
        "The Commercial Plaza is designed to serve as a modern business hub with retail spaces, offices, and entertainment facilities. The contemporary architecture features glass facades and open spaces to create a vibrant commercial environment.",
      completionDate: "2027",
      swimmingPool: "Not applicable",
      apartmentSizes: "Retail spaces from 50m² to 500m²",
      garageSpaces: "300+ parking spaces",
      numberOfEntrances: "6",
      downPayment: "25%",
      numberOfApartments: "N/A - Commercial Complex",
      agencyCommission: "4%",
    },
    {
      id: 6,
      name: "Bridge Infrastructure",
      description:
        "A major infrastructure project involving the construction of a modern bridge to improve connectivity and reduce traffic congestion. This engineering marvel showcases our expertise in large-scale infrastructure development.\n\nThe bridge features advanced engineering techniques, sustainable materials, and modern safety systems. The project includes approach roads, lighting systems, and landscaping to create a complete transportation solution.",
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "1800m²",
      floors: "Single Level",
      location: "Kolkata",
      status: "Proposed",
      aboutDescription:
        "The Bridge Infrastructure project involves the construction of a modern bridge to improve connectivity and reduce traffic congestion. This engineering marvel showcases our expertise in large-scale infrastructure development with advanced engineering techniques.",
      completionDate: "2026",
      swimmingPool: "Not applicable",
      apartmentSizes: "N/A - Infrastructure Project",
      garageSpaces: "N/A",
      numberOfEntrances: "N/A",
      downPayment: "N/A",
      numberOfApartments: "N/A",
      agencyCommission: "N/A",
    },
    {
      id: 7,
      name: "Residential Tower",
      description:
        "A high-rise residential tower offering modern living in the heart of the city. This project features efficient floor plans, modern amenities, and stunning panoramic views from every apartment.\n\nThe tower includes a rooftop garden, fitness center, and community spaces. The design emphasizes natural light, ventilation, and energy efficiency to create comfortable and sustainable living spaces.",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "3800m²",
      floors: "B + G + 6 Floors",
      location: "Pune",
      status: "Completed",
      aboutDescription:
        "The Residential Tower offers modern living in the heart of Pune with efficient floor plans and stunning panoramic views. The design emphasizes natural light, ventilation, and energy efficiency to create comfortable and sustainable living spaces.",
      completionDate: "2023",
      swimmingPool: "Rooftop pool and deck",
      apartmentSizes: "From 110m² to 200m²",
      garageSpaces: "1.5 spaces per apartment",
      numberOfEntrances: "2",
      downPayment: "35%",
      numberOfApartments: "48",
      agencyCommission: "1.5%",
    },
    {
      id: 8,
      name: "Office Complex",
      description:
        "A modern office complex designed to meet the needs of contemporary businesses. This project features flexible office spaces, meeting rooms, and modern amenities for a productive work environment.\n\nThe complex includes parking facilities, food courts, and recreational areas. The design promotes collaboration and productivity with open spaces, natural lighting, and modern technology infrastructure.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center",
      ],
      area: "2900m²",
      floors: "B + G + 3 Floors",
      location: "Ahmedabad",
      status: "In Progress",
      aboutDescription:
        "The Office Complex is designed to meet the needs of contemporary businesses with flexible office spaces and modern amenities. The design promotes collaboration and productivity with open spaces, natural lighting, and modern technology infrastructure.",
      completionDate: "2024",
      swimmingPool: "Not applicable",
      apartmentSizes: "Office spaces from 100m² to 800m²",
      garageSpaces: "150+ parking spaces",
      numberOfEntrances: "3",
      downPayment: "30%",
      numberOfApartments: "N/A - Office Complex",
      agencyCommission: "2.5%",
    },
  ];

  const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  const getAllProjects = (): Project[] => {
    return projects;
  };

  return {
    projects,
    getProjectById,
    getAllProjects,
  };
};

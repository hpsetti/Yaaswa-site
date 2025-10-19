export interface GeneralInfoItem {
  label: string;
  value: string;
}

export interface ProjectDetailsData {
  aboutDescription: string;
  generalInfo: GeneralInfoItem[];
  galleryImages: string[];
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export const useProjectDetails = () => {
  const projectDetailsData: Record<string, ProjectDetailsData> = {
    "1": {
      aboutDescription:
        "The apartments within the Villa Klisura building are designed with southern orientation to ensure optimal lighting and an open view of the Bay of Split. Garage parking spaces and pools are not included in the base price but are available upon individual request from buyers.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2026",
        },
        {
          label: "Swimming pool",
          value: "On request, with additional cost",
        },
        {
          label: "Apartment sizes",
          value: "From 131m² to 173m²",
        },
        {
          label: "Garage spaces",
          value: "On request, with additional cost",
        },
        {
          label: "Number of entrances",
          value: "1",
        },
        {
          label: "Down payment",
          value: "40%",
        },
        {
          label: "Number of apartments",
          value: "12",
        },
        {
          label: "Agency commission",
          value: "0%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "Ul. kralja Zvonimira 75",
        city: "Solin",
        state: "Split-Dalmatia",
        country: "Croatia",
        postalCode: "21210",
        coordinates: {
          lat: 43.5407,
          lng: 16.4907,
        },
      },
    },
    "2": {
      aboutDescription:
        "Solin 4 represents a modern approach to urban living with its innovative mixed-use design. The building features contemporary architecture with energy-efficient systems and smart home technology throughout all units.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2025",
        },
        {
          label: "Swimming pool",
          value: "Included in common amenities",
        },
        {
          label: "Apartment sizes",
          value: "From 95m² to 145m²",
        },
        {
          label: "Garage spaces",
          value: "1 space per apartment",
        },
        {
          label: "Number of entrances",
          value: "2",
        },
        {
          label: "Down payment",
          value: "30%",
        },
        {
          label: "Number of apartments",
          value: "36",
        },
        {
          label: "Agency commission",
          value: "2%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "MG Road 123",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        postalCode: "560001",
        coordinates: {
          lat: 12.9716,
          lng: 77.5946,
        },
      },
    },
    "3": {
      aboutDescription:
        "The Tech Park Complex is designed as a hub for innovation and technology companies. It features flexible office spaces, conference facilities, and modern amenities to support the growing tech ecosystem in Chennai.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2024",
        },
        {
          label: "Swimming pool",
          value: "Not applicable",
        },
        {
          label: "Office space sizes",
          value: "From 200m² to 2000m²",
        },
        {
          label: "Parking spaces",
          value: "200+ parking spaces",
        },
        {
          label: "Number of entrances",
          value: "4",
        },
        {
          label: "Down payment",
          value: "20%",
        },
        {
          label: "Number of floors",
          value: "B + G + 4 Floors",
        },
        {
          label: "Agency commission",
          value: "3%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "IT Park Road 45",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        postalCode: "600113",
        coordinates: {
          lat: 12.9141,
          lng: 80.1842,
        },
      },
    },
    "4": {
      aboutDescription:
        "Luxury Residences offers the finest in premium living with high-end finishes and stunning city views. Each residence is designed with spacious layouts and premium materials to provide the ultimate in comfort and style.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2025",
        },
        {
          label: "Swimming pool",
          value: "Rooftop infinity pool",
        },
        {
          label: "Apartment sizes",
          value: "From 180m² to 350m²",
        },
        {
          label: "Garage spaces",
          value: "2 spaces per apartment",
        },
        {
          label: "Number of entrances",
          value: "1",
        },
        {
          label: "Down payment",
          value: "50%",
        },
        {
          label: "Number of apartments",
          value: "24",
        },
        {
          label: "Agency commission",
          value: "1%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "Bandra Kurla Complex",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        postalCode: "400051",
        coordinates: {
          lat: 19.0596,
          lng: 72.8295,
        },
      },
    },
    "5": {
      aboutDescription:
        "The Commercial Plaza is designed to serve as a modern business hub with retail spaces, offices, and entertainment facilities. The contemporary architecture features glass facades and open spaces to create a vibrant commercial environment.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2027",
        },
        {
          label: "Swimming pool",
          value: "Not applicable",
        },
        {
          label: "Retail space sizes",
          value: "From 50m² to 500m²",
        },
        {
          label: "Parking spaces",
          value: "300+ parking spaces",
        },
        {
          label: "Number of entrances",
          value: "6",
        },
        {
          label: "Down payment",
          value: "25%",
        },
        {
          label: "Number of floors",
          value: "B + G + 5 Floors",
        },
        {
          label: "Agency commission",
          value: "4%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "Connaught Place",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        postalCode: "110001",
        coordinates: {
          lat: 28.6304,
          lng: 77.2177,
        },
      },
    },
    "6": {
      aboutDescription:
        "The Bridge Infrastructure project involves the construction of a modern bridge to improve connectivity and reduce traffic congestion. This engineering marvel showcases our expertise in large-scale infrastructure development with advanced engineering techniques.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2026",
        },
        {
          label: "Bridge length",
          value: "1.2 kilometers",
        },
        {
          label: "Lanes",
          value: "4 lanes (2 each direction)",
        },
        {
          label: "Load capacity",
          value: "75 tons per lane",
        },
        {
          label: "Construction method",
          value: "Pre-stressed concrete",
        },
        {
          label: "Project duration",
          value: "24 months",
        },
        {
          label: "Environmental impact",
          value: "Minimal - eco-friendly design",
        },
        {
          label: "Maintenance period",
          value: "10 years warranty",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "Howrah Bridge Approach",
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
        postalCode: "700001",
        coordinates: {
          lat: 22.5726,
          lng: 88.3639,
        },
      },
    },
    "7": {
      aboutDescription:
        "The Residential Tower offers modern living in the heart of Pune with efficient floor plans and stunning panoramic views. The design emphasizes natural light, ventilation, and energy efficiency to create comfortable and sustainable living spaces.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2023",
        },
        {
          label: "Swimming pool",
          value: "Rooftop pool and deck",
        },
        {
          label: "Apartment sizes",
          value: "From 110m² to 200m²",
        },
        {
          label: "Garage spaces",
          value: "1.5 spaces per apartment",
        },
        {
          label: "Number of entrances",
          value: "2",
        },
        {
          label: "Down payment",
          value: "35%",
        },
        {
          label: "Number of apartments",
          value: "48",
        },
        {
          label: "Agency commission",
          value: "1.5%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "Koregaon Park",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        postalCode: "411001",
        coordinates: {
          lat: 18.5204,
          lng: 73.8567,
        },
      },
    },
    "8": {
      aboutDescription:
        "The Office Complex is designed to meet the needs of contemporary businesses with flexible office spaces and modern amenities. The design promotes collaboration and productivity with open spaces, natural lighting, and modern technology infrastructure.",
      generalInfo: [
        {
          label: "Completion of construction",
          value: "2024",
        },
        {
          label: "Swimming pool",
          value: "Not applicable",
        },
        {
          label: "Office space sizes",
          value: "From 100m² to 800m²",
        },
        {
          label: "Parking spaces",
          value: "150+ parking spaces",
        },
        {
          label: "Number of entrances",
          value: "3",
        },
        {
          label: "Down payment",
          value: "30%",
        },
        {
          label: "Number of floors",
          value: "B + G + 3 Floors",
        },
        {
          label: "Agency commission",
          value: "2.5%",
        },
      ],
      galleryImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
      ],
      location: {
        address: "C.G. Road 78",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        postalCode: "380006",
        coordinates: {
          lat: 23.0225,
          lng: 72.5714,
        },
      },
    },
  };

  const getProjectDetails = (
    projectId: number
  ): ProjectDetailsData | undefined => {
    return projectDetailsData[projectId.toString()];
  };

  const getAllProjectDetails = (): Record<string, ProjectDetailsData> => {
    return projectDetailsData;
  };

  return {
    getProjectDetails,
    getAllProjectDetails,
    projectDetailsData,
  };
};

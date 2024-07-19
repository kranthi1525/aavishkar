import React from 'react';
import "./cards.css";

export default function ThemeCards() {
  const categories = [
    {
      title: "DIGITAL EMPOWERMENT FOR RURAL COMMUNITIES",
      description: "Avishkaar extends an invitation to participants to channel innovation toward transforming the lives of the rural population. This theme encourages the creation of technology-driven solutions that improve access to education, healthcare, agriculture, financial services and digital literacy",
    },
    {
      title: "URBAN MOBILITY AND TRAFFIC MANAGEMENT",
      description: "Avishkaar prompts innovation in urban living, emphasizing transportation solutions for traffic congestion, improved public transit, and sustainable travel. Participants strive to create accessible, efficient, and environmentally friendly cities, prioritizing quality urban life.",
    },
    {
      title: "AGRICULTURE AND FOOD TECHNOLOGY",
      description: "Avishkaar urges a tech revolution in agriculture, prompting innovation in crop management, supply chain efficiency, and food distribution. The goal is to boost food security, minimize wastage, enhance productivity, and advocate for sustainable practices",
    },
    {
      title: "MEDICAL AND HEALTH",
      description: "Avishkaar calls forth transformative solutions to healthcare challenges. This theme focuses on tech-driven solutions for patient data security and privacy, telemedicine accessibility and equity, chronic disease management, rapid prototyping, and medical education.",
    },
    {
      title: "WASTE MANAGEMENT AND RECYCLING",
      description: "Avishkaar empowers participants to envision waste as a resource and inspires tech-driven approaches in waste collection, separation, recycling, and disposal. Participants in this theme contribute to a cleaner, healthier environment by reducing pollution, conserving resources, and promoting circular economies.",
    },
    {
      title: "RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS",
      description: "This theme fosters the development of technology-driven approaches to reduce carbon emissions, promote energy efficiency, and create a sustainable energy ecosystem by leveraging renewable sources like solar, wind, hydro, and bioenergy to tackle energy challenges.",
    },
    {
      title: "TOURISM AND TRAVEL",
      description: "Avishkaar summons participants to dive into smart destination management, Sustainable Practices, and Immense health focus innovations. This theme mainly focuses on digital nomad solutions in travel and tourism.",
    },
    {
      title: "STUDENT INNOVATION",
      description: "Avishkaar embraces Technical enthusiasts with creative minds. This theme pays attention to solving real-world problems using advanced technology. It will showcase the student problem-solving skills & technical prowess in diverse domains.",
    },
  ];
  const getIconForCategory = (category) => {
    const icons = {
      "DIGITAL EMPOWERMENT FOR RURAL COMMUNITIES": "🌾",
      "URBAN MOBILITY AND TRAFFIC MANAGEMENT": "🚜",
      "AGRICULTURE AND FOOD TECHNOLOGY": "🌿",
      "MEDICAL AND HEALTH": "🏥",
      "WASTE MANAGEMENT AND RECYCLING": "♻️",
      "RENEWABLE/SUSTAINABLE ENERGY SOLUTIONS": "🔋",
      "TOURISM AND TRAVEL": "🏞️",
      "STUDENT INNOVATION": "💡"
    };
    return icons[category] || "🌱";
  };

  return (
    <div className="theme-cards-wrapper">
      <h1 >THEMES</h1>
      <div className="theme-cards-container" id="theme-cards-grid">
        {categories.map((category, index) => (
          <div key={index} className="theme-card">
            <div className="theme-card-background"></div>
            <div className="theme-card-content">
              <div className="theme-card-icon">{getIconForCategory(category.title)}</div>
              <h3 className="theme-card-title">{category.title}</h3>
              <p className="theme-card-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
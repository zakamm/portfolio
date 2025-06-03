import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Technical Vice-President",
      company: "Ontario Engineering Competition",
      period: "Apr. 2024 – Present",
      description:
        "Built and deployed full stack application portal streamlining evaluation process for 350+ competitors. Implemented dashboard authentication reducing codebase size by 15%.",
    },
    {
      role: "Software Engineering Research Assistant",
      company: "Healthcare Systems R&A Inc.",
      period: "May 2024 – Aug. 2024",
      description:
        "Optimized machine learning models achieving 21% average increase in R² score. Developed KNN approach for data clustering improving search results by 30%.",
    },
    {
      role: "Vice President",
      company: "McMaster Chess Club",
      period: "Sep. 2023 – Present",
      description:
        "Served as team captain securing 4th place finish at Canadian University Chess Championships. Coordinated logistics for club events and fundraising.",
    },
  ];

  return (
    <section
      className="max-w-3xl mx-auto px-6 py-6 animate-slide-in"
      style={{ animationDelay: "800ms" }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-white font-medium">{exp.role}</h3>
                <p className="text-gray-300 text-sm">{exp.company}</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

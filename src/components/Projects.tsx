import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Intellex",
      description:
        "Award-winning decentralized platform for DeltaHacks X, allowing users to exchange and teach skills over video call",
      details:
        "Engineered secure serverless REST API with JWT authentication, integrated WebRTC reducing latency by 30%",
      hasSource: true,
    },
    {
      name: "Drone Rescue Optimizer",
      description:
        "Modular Java program to autonomously simulate and control rescue drones using command system",
      details:
        "Grid-based search algorithm with 30% reduction in exploration time, real-time terrain mapping",
      hasSource: true,
    },
    {
      name: "OEC Portal",
      description:
        "Full-stack application portal streamlining evaluation process for 350+ competitors",
      details:
        "Custom React Hook for session handling, server-side rendering with 35% load reduction",
      hasSource: false,
    },
    {
      name: "Healthcare ML Models",
      description:
        "Optimized machine learning models using MLPRegressor, Random Forest, and TensorFlow",
      details:
        "21% average increase in R² score, KNN approach for data clustering improving results by 30%",
      hasSource: false,
    },
  ];

  return (
    <section
      className="max-w-3xl mx-auto px-6 py-6 animate-slide-in"
      style={{ animationDelay: "600ms" }}
    >
      <h2 className="text-2xl font-bold text-white mb-1">
        Projects
        <span className="text-gray-400 text-base font-normal"> – hover!</span>
      </h2>

      <div className="space-y-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-white font-medium group-hover:underline decoration-gray-500 group-hover:decoration-white underline-offset-2 decoration-1 cursor-pointer transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <p className="text-gray-400 text-sm">{project.details}</p>
              </div>
              {project.hasSource && (
                <div className="ml-4">
                  <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors duration-200 underline decoration-gray-500 hover:decoration-white underline-offset-2 decoration-1">
                    code
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

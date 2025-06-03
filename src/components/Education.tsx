import React from "react";

const Education = () => {
  return (
    <section
      className="max-w-3xl mx-auto px-6 py-6 animate-slide-in"
      style={{ animationDelay: "1000ms" }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Education</h2>

      <div>
        <div className="mb-2">
          <h3 className="text-white font-medium">McMaster University</h3>
          <p className="text-gray-300 text-sm">
            B.Eng.BME in Software and Biomedical Engineering with Co-op
          </p>
          <p className="text-gray-400 text-sm">Sep. 2022 – Apr. 2027</p>
        </div>

        <div>
          <p className="text-gray-300 text-sm mb-1">Relevant Coursework:</p>
          <p className="text-gray-400 text-sm">
            Data Structures and Algorithms (Java), Object-Oriented Programming
            (Java), Software Development (Bash and C), Computer Architecture,
            Software Design, Databases, Concurrent Programming
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

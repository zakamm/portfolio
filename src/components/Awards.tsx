import React from "react";

const Awards = () => {
  const awards = [
    "DeltaHacks X Winner",
    "4th Place @ Canadian University Chess Championships",
    "Team Captain Achievement - McMaster Chess Club",
    "Research Excellence - 21% ML model improvement",
  ];

  return (
    <section
      className="max-w-3xl mx-auto px-6 py-6 animate-slide-in"
      style={{ animationDelay: "1200ms" }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Awards</h2>

      <div className="space-y-1">
        {awards.map((award, index) => (
          <div key={index} className="text-gray-300 text-sm">
            {award}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

import React from "react";

const Header = () => {
  return (
    <section
      className="max-w-3xl mx-auto px-6 py-8 animate-slide-in"
      style={{ animationDelay: "0ms" }}
    >
      <div>
        <h1 className="text-4xl font-bold text-white mb-1">Muhammad Zaka</h1>
        <p className="text-lg text-gray-300 mb-1">
          Software & Biomedical Engineering Student at McMaster University
        </p>
        <p className="text-gray-400 mb-4">Toronto, ON, Canada</p>

        <div className="max-w-2xl mb-4">
          <p className="text-gray-300 leading-relaxed">
            I build software solutions at the intersection of technology and
            healthcare. Currently pursuing my B.Eng.BME with Co-op at McMaster
            University.
          </p>
        </div>

        <div className="mb-4">
          <p className="text-white">If you are hiring, reach out via email!</p>
        </div>

        <div className="space-y-1 text-gray-300">
          <div>
            <a
              href="https://github.com/zakamm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 underline decoration-gray-500 hover:decoration-white underline-offset-2 decoration-1"
            >
              GitHub
            </a>{" "}
            <a
              href="https://linkedin.com/in/zakamm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 underline decoration-gray-500 hover:decoration-white underline-offset-2 decoration-1"
            >
              LinkedIn
            </a>{" "}
            <a
              href="https://x.com/zaka_mohid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 underline decoration-gray-500 hover:decoration-white underline-offset-2 decoration-1"
            >
              X/Twitter
            </a>
          </div>
          <div>
            <span className="text-white">Email:</span>{" "}
            <a
              href="mailto:mohidzaka3@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline decoration-gray-500 hover:decoration-white underline-offset-2 decoration-1"
            >
              mohidzaka3@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

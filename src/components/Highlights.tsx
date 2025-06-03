import React from "react";

const Highlights = () => {
  return (
    <section
      className="max-w-3xl mx-auto px-6 py-6 animate-slide-in"
      style={{ animationDelay: "400ms" }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Highlights</h2>

      <div className="space-y-4">
        {/* Intellex Platform */}
        <div
          className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-4 
                        before:absolute before:inset-0 before:rounded-lg before:border before:border-white/20 
                        before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
                        shadow-xl shadow-black/20 hover:bg-white/10 hover:border-white/25 hover:shadow-2xl 
                        hover:shadow-black/40 hover:scale-[1.02] hover:-translate-y-1 
                        transition-all duration-500 ease-out cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
            Intellex Platform
          </h3>
          <p className="text-gray-200 text-sm mb-2 group-hover:text-gray-100 transition-colors duration-300">
            Award-winning decentralized skill-sharing platform built for
            DeltaHacks X. Enables users to exchange and teach skills through
            high-quality video calls.
          </p>
          <div className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            DeltaHacks X Winner • WebRTC integration • 30% latency reduction
          </div>
        </div>

        {/* Machine Learning Research */}
        <div
          className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-4 
                        before:absolute before:inset-0 before:rounded-lg before:border before:border-white/20 
                        before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none
                        shadow-xl shadow-black/20 hover:bg-white/10 hover:border-white/25 hover:shadow-2xl 
                        hover:shadow-black/40 hover:scale-[1.02] hover:-translate-y-1 
                        transition-all duration-500 ease-out cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
            ML Research @ Healthcare Systems R&A
          </h3>
          <p className="text-gray-200 text-sm mb-2 group-hover:text-gray-100 transition-colors duration-300">
            Optimized machine learning models for healthcare applications using
            advanced algorithms and data processing techniques.
          </p>
          <div className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            21% R² improvement • 30% search improvement • MLPRegressor, Random
            Forest, TensorFlow
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

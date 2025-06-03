import Header from "../components/Header";
import Highlights from "../components/Highlights";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Awards from "../components/Awards";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(16, 16, 16)" }}
    >
      <Header />
      <Highlights />
      <Projects />
      <Experience />
      <Education />
      <Awards />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-4">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Muhammad Zaka. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Open to internship opportunities - let&apos;s build something
            amazing together!
          </p>
        </div>
      </footer>
    </div>
  );
}

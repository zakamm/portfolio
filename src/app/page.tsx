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
    </div>
  );
}

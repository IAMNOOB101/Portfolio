import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <CursorGlow />
      <Hero />
      <TechTicker />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <ProjectCard />
      <SectionDivider />
      <Footer />
    </>
  );
}

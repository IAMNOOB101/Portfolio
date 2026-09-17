import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills";
import BackgroundEffects from "../components/BackgroundEffects";
import ToastNotification from "../components/ToastNotification";
import ResumeButton from "../components/ResumeButton";

export default function Home() {
  const [toast, setToast] = useState(null);

  const handleNotify = (notification) => {
    setToast(notification);
  };

  return (
    <>
      <BackgroundEffects />
      <ToastNotification toast={toast} onClose={() => setToast(null)} />
      <Navbar onNotify={handleNotify} />
      <CursorGlow />
      <Hero onNotify={handleNotify} />
      <TechTicker />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Footer onNotify={handleNotify} />
      <ResumeButton variant="fab" onNotify={handleNotify} />
    </>
  );
}

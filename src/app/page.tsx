import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundEffects from "../components/BackgroundEffects";

export default function Page() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
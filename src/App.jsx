import About from "./About";
import CTA from "./CTA";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Properties from "./Properties";
import Team from "./Team";
import "./assets/css/tailwind.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <About />
      <CTA />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

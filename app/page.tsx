import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Books from "./components/Books";
import CTA from "./components/CTA";
// import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <About />
        {/* <SideProjects /> */}
        <Services />
        <CTA />
        <Testimonials />
        <Books />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

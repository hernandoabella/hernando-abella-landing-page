import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Books from "./components/Books";
import Bonus from "./components/Bonus";
// import CTA from "./components/CTA";
// import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <About />
        {/* <SideProjects /> */}
        <Services />
        {/* <CTA /> */}
        {/* <Testimonials /> */}
        {/* <Books /> */}
        <Bonus
  title="Download the Bonus Books"
  text=""
  books={[
    {
      image: "/e1.png",
      pdf: "/pdfs/250-Killer-JS-One-Liners.pdf",
      title: "250+ Killer JavaScript One-Liners",
      description:
        "Write smarter, faster, and more elegant JavaScript with concise solutions for everyday tasks, algorithms, and DOM tricks.",
    },
    {
      image: "/e2.png",
      pdf: "/pdfs/120-Advanced-Javascript-Interview-Questions.pdf",
      title: "120 Advanced JavaScript Interview Questions",
      description:
        "Get ready to crush technical interviews with deep, well-explained answers to real-world JavaScript challenges.",
    },
    {
      image: "/e3.png",
      pdf: "/pdfs/150-Python-Pattern-Programs.pdf",
      title: "150+ Python Pattern Programs",
      description:
        "Boost your problem-solving power with pattern-based logic exercises.",
    },
    {
      image: "/e4.png",
      pdf: "/pdfs/SQL-Cookbook.pdf",
      title: "SQL COOKBOOK",
      description:
        "Master database logic and complex queries with practical, real-world SQL examples.",
    },
    {
      image: "/e5.png",
      pdf: "/pdfs/50-Concepts-Every-Java-Developer-Should-Know.pdf",
      title: "50 Java Concepts Every Developer Should Know",
      description:
        "Solidify your foundation in one of the world’s most powerful languages.",
    },
    {
      image: "/e6.png",
      pdf: "/pdfs/200-Cpp-Programs.pdf",
      title: "200 C++ Programs for Beginners",
      description:
        "Learn by doing with a curated collection of real, working C++ programs covering loops, data structures, OOP, and algorithms.",
    },
  ]}
/>

        <Contact />
        {/* <Footer /> */}
      </div>
    </main>
  );
}

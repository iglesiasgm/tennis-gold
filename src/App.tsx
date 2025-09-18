import Carousel from "./components/Carousel";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

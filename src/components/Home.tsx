import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedProjects from "./FeaturedProjects";
import Carousel from "./Carousel";

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

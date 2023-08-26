import "animate.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArticlesSection from "../components/organisms/ArticlesSection";
import ContactSection from "../components/organisms/ContactSection";
import HeroSection from "../components/organisms/HeroSection";
import Navbar from "../components/organisms/Navbar";
import PortfolioSection from "../components/organisms/PortfolioSection";
import ModulesSection from "../components/organisms/ModulesSection";

const Home = () => (
  <div>
    <Navbar />
    <HeroSection />
    <PortfolioSection />
    <ArticlesSection />
    <ModulesSection />
    <ContactSection />
  </div>
);

export default Home;

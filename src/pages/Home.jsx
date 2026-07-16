import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Recipes from "../components/Recipes";
import About from "../components/About";
import Dealer from "../components/Dealer";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import FAQSchema from "../components/FAQSchema";

function Home() {
  return (
    <>
      <SEO
        title="Nivashree Masala | Premium Sabudana & Food Products"
        description="Nivashree Masala offers premium quality Sabudana, Jeera, Tej Patta, Nakuldana, Cutting Mishri and authentic Indian food products."
      />

      <StructuredData />
      <FAQSchema />

      <Hero />
      <WhyChoose />
      <Products />
      <Recipes />
      <About />
      <Dealer />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
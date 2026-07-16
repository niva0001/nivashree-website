import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Recipes from "../components/Recipes";
import About from "../components/About";
import Dealer from "../components/Dealer";
import Contact from "../components/Contact";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import FAQ from "../components/FAQ";
function Home() {
  return (
    <>
      <SEO
        title="Nivashree Masala | Premium Sabudana & Food Products"
        description="Nivashree Masala offers premium quality Sabudana, Jeera and authentic Indian food products made with quality and trust."
      />

      <StructuredData />

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
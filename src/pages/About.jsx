import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO
        title="About Nivashree Masala | Quality Indian Food Products"
        description="Learn about Nivashree Masala, our commitment to premium quality food products, purity and customer trust."
      />

      <section className="pt-32 min-h-screen bg-orange-50 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-green-700 mb-6">
            About Nivashree Masala
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Nivashree Masala is dedicated to providing quality food products
            with trusted taste and hygiene. We focus on delivering premium
            products that bring authentic flavours to every kitchen.
          </p>

          <p className="text-lg text-gray-700">
            From sabudana to spices and other food essentials, we aim to serve
            customers with reliable quality and consistency.
          </p>

        </div>
      </section>
    </>
  );
}

export default About;
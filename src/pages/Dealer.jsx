function Dealer() {
  return (
    <section className="pt-32 min-h-screen bg-orange-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Become a Nivashree Dealer
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Join Nivashree Masala and grow your business with our quality food
          products. We welcome distributors and retailers who want to bring
          trusted products to their customers.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Get in touch with us for dealership opportunities, product details,
          and business enquiries.
        </p>

        <a
          href="/contact"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Dealer;
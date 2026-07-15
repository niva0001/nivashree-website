import { motion } from "framer-motion";
import { FaStore, FaChartLine, FaHandshake, FaTruck } from "react-icons/fa";

function Dealer() {

  const benefits = [
    {
      icon: <FaStore />,
      title: "Premium Products",
      text: "Offer trusted quality products to your customers."
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      text: "Grow your business with a reliable brand partner."
    },
    {
      icon: <FaHandshake />,
      title: "Long Term Partnership",
      text: "Build a strong relationship with Nivashree."
    },
    {
      icon: <FaTruck />,
      title: "Reliable Supply",
      text: "Smooth product availability and support."
    }
  ];

  return (

    <section id="dealer" className="py-24 bg-green-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{
            once: true
          }}
        >

          <p className="uppercase tracking-widest text-orange-300 font-semibold">
            Grow With Us
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Become a Nivashree Dealer
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-green-100 text-lg">
            Join our growing dealer network and bring premium-quality
            food products to customers across India.
          </p>

        </motion.div>

        {/* Benefits */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8
              }}
              className="bg-green-700 rounded-2xl p-6 text-center"
            >

              <div className="text-4xl text-orange-300 flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-green-100">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Dealer Form */} <motion.form
  action="https://api.web3forms.com/submit"
  method="POST"
  initial={{
    opacity: 0,
    y: 50
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 0.7
  }}
  viewport={{
    once: true
  }}
  className="mt-16 bg-white rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto"
>

  <input
    type="hidden"
    name="access_key"
    value="c585134a-479e-45ee-be77-a2c5ce2385cc"
  />

  <input
    type="hidden"
    name="subject"
    value="New Dealer Inquiry - Nivashree Masala"
  />

  <input
    type="hidden"
    name="from_name"
    value="Nivashree Website"
  />

  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
    />

    <input
      type="text"
      name="business"
      placeholder="Business Name"
      required
      className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
      className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
    />

    <input
      type="text"
      name="city"
      placeholder="City"
      required
      className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
    />

  </div>

  <textarea
    rows="5"
    name="message"
    placeholder="Tell us about your business..."
    required
    className="mt-6 w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
  ></textarea>

  <button
    type="submit"
    className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition"
  >
    Send Inquiry
  </button>

</motion.form>

</div>

</section>

  );
}

export default Dealer;
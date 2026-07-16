import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "Is Nivashree Sabudana suitable for fasting (Vrat)?",
      answer:
        "Yes. Our premium Sabudana is carefully selected and ideal for preparing fasting dishes like Khichdi, Kheer and Vada.",
    },
    {
      question: "Which products does Nivashree offer?",
      answer:
        "We currently offer Premium Sabudana, Jeera, Tej Patta, Nakuldana and Cutting Mishri.",
    },
    {
      question: "Do you provide dealership opportunities?",
      answer:
        "Yes. We welcome distributors and dealers across India. Simply fill out the Dealer Inquiry form and our team will contact you.",
    },
    {
      question: "How can I contact Nivashree?",
      answer:
        "You can contact us through Phone, WhatsApp, Email or by filling out the Contact Form available on our website.",
    },
    {
      question: "Where is Nivashree Masala located?",
      answer:
        "Our business is based in Bihar, India, and we supply quality products to customers through our dealer network.",
    },
    {
      question: "Why choose Nivashree products?",
      answer:
        "We focus on premium quality, hygienic packaging, authentic taste and customer satisfaction.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-orange-500 font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mt-3">
            Got Questions?
          </h2>

          <p className="text-gray-600 mt-4">
            Find quick answers to the questions our customers ask most often.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-lg text-green-800">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
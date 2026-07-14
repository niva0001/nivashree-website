import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


function Contact() {

  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      detail: "+91 8227885546",
      link: "tel:+918227885546"
    },

    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      detail: "Chat With Us",
      link: "https://wa.me/918227885546"
    },

    {
      icon: <FaEnvelope />,
      title: "Email",
      detail: "info.nivashree@gmail.com",
      link: "mailto:info.nivashree@gmail.com"
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      detail: "Bihar, India",
      link: "#"
    }
  ];


  return (

    <section id="contact" className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <motion.div

          className="text-center"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

        >

          <p className="uppercase tracking-widest text-orange-500 font-semibold">
            Contact Us
          </p>


          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-green-800">

            We'd Love to Hear From You

          </h2>


          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">

            Get in touch for dealership inquiries, product information,
            or customer support.

          </p>


        </motion.div>





        <div className="grid lg:grid-cols-2 gap-12 mt-16">



          {/* Contact Information */}


          <div className="grid sm:grid-cols-2 gap-6">


            {contactCards.map((card,index)=>(


              <motion.a

                key={index}

                href={card.link}

                target={card.link.startsWith("http") ? "_blank" : undefined}

                rel="noreferrer"

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index*0.1
                }}

                viewport={{
                  once:true
                }}

                whileHover={{
                  y:-8
                }}


                className="bg-green-50 p-6 rounded-3xl shadow-md hover:shadow-xl transition"

              >


                <div className="text-3xl text-orange-500">

                  {card.icon}

                </div>


                <h3 className="mt-5 text-xl font-bold text-green-800">

                  {card.title}

                </h3>


                <p className="mt-2 text-gray-700">

                  {card.detail}

                </p>


              </motion.a>


            ))}


          </div>





          {/* Form */}


          <motion.div

            initial={{
              opacity:0,
              x:50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{
              once:true
            }}

            className="bg-green-50 rounded-3xl p-8 shadow-lg"

          >


            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-5 py-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-600"
            />


            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-5 py-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-600"
            />


            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>



            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition">

              Send Message

            </button>


          </motion.div>



        </div>


      </div>


    </section>

  );
}


export default Contact;
import { motion } from "framer-motion";
import { FaAward, FaLeaf, FaBoxOpen, FaHeart } from "react-icons/fa";


function WhyChoose() {

  const features = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      description:
        "Carefully selected ingredients with consistent quality and authentic taste."
    },

    {
      icon: <FaLeaf />,
      title: "Pure & Natural",
      description:
        "Made with care to deliver freshness, purity and traditional flavors."
    },

    {
      icon: <FaBoxOpen />,
      title: "Hygienically Packed",
      description:
        "Modern packaging methods to maintain freshness and product quality."
    },

    {
      icon: <FaHeart />,
      title: "Customer Trust",
      description:
        "Committed to delivering products that families love and trust."
    }
  ];


  return (

    <section className="py-24 bg-white">


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
            once:true
          }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            Why Choose Nivashree?
          </h2>


          <p className="mt-4 text-gray-600 text-lg">
            Quality, purity and trust in every product.
          </p>

        </motion.div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">


          {features.map((feature,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}


              whileHover={{
                y:-10
              }}


              className="bg-green-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition"

            >


              <div className="text-4xl text-orange-500 mb-6">

                {feature.icon}

              </div>



              <h3 className="text-xl font-bold text-green-800">

                {feature.title}

              </h3>



              <p className="mt-4 text-gray-600 leading-7">

                {feature.description}

              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default WhyChoose;
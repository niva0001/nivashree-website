import { motion } from "framer-motion";
import { FaLeaf, FaShieldAlt, FaHeart, FaStar } from "react-icons/fa";


function About() {

  const values = [
    {
      icon: <FaLeaf />,
      title: "Premium Quality",
      description:
        "Carefully selected ingredients with uncompromised quality and authentic taste."
    },

    {
      icon: <FaShieldAlt />,
      title: "Hygienically Packed",
      description:
        "Modern packaging practices to maintain freshness and purity."
    },

    {
      icon: <FaHeart />,
      title: "Trusted Brand",
      description:
        "Building relationships with Indian families through quality and trust."
    },

    {
      icon: <FaStar />,
      title: "Customer First",
      description:
        "Every product is created with customer satisfaction as our priority."
    }
  ];


  return (

    <section id="about" className="py-24 bg-gradient-to-br from-white to-green-50">


      <div className="max-w-7xl mx-auto px-6">


        {/* About Heading */}

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

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            About Us
          </p>


          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-green-800">

            Bringing Purity to Every Indian Kitchen

          </h2>


          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

            Nivashree is committed to delivering premium-quality food products
            that combine freshness, purity, and authentic Indian taste.
            From carefully selected ingredients to hygienic packaging,
            every product is made to bring trust and quality to your family.

          </p>


        </motion.div>





        {/* Values Cards */}


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">


          {values.map((value,index)=>(


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


              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"

            >


              <div className="text-5xl text-orange-500 flex justify-center">

                {value.icon}

              </div>


              <h3 className="mt-6 text-2xl font-bold text-green-800">

                {value.title}

              </h3>


              <p className="mt-4 text-gray-600 leading-7">

                {value.description}

              </p>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default About;
import { motion } from "framer-motion";
import niva from "../assets/image/niva.png";


function Hero() {

  return (

    <section
      id="home"
      className="pt-32 min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50"
    >

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">


        {/* Left Content */}

        <motion.div

          className="lg:w-1/2 text-center lg:text-left"

          initial={{
            opacity:0,
            x:-60
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <p className="text-orange-500 font-semibold tracking-widest uppercase">
            Premium Quality • Trusted Taste
          </p>



          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-green-900 leading-tight">

            Natural Taste
            <br />
            Of Indian Families

          </h1>




          <p className="mt-6 text-lg text-gray-600 max-w-lg">

            Experience premium quality Sabudana and authentic Indian ingredients
            crafted with purity, hygiene and traditional taste.

          </p>




          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">


            <a
              href="#products"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition text-center"
            >
              Explore Products
            </a>



            <a
              href="#contact"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition text-center"
            >
              Contact Us
            </a>


          </div>





          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">


            <div className="bg-white shadow-md px-5 py-3 rounded-full">
              ✅ Premium Quality
            </div>


            <div className="bg-white shadow-md px-5 py-3 rounded-full">
              ✅ Hygienic Packing
            </div>


            <div className="bg-white shadow-md px-5 py-3 rounded-full">
              ✅ Authentic Taste
            </div>


          </div>


        </motion.div>






        {/* Right Image */}

        <motion.div

          className="lg:w-1/2 flex justify-center items-center relative mb-12 lg:mb-0"

          initial={{
            opacity:0,
            scale:0.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

        >



          {/* Glow */}

          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>





          {/* Niva */}

          <motion.img

            src={niva}

            alt="Niva holding Nivashree products"

            className="relative z-10 w-[450px] md:w-[550px] lg:w-[700px] drop-shadow-2xl"

            whileHover={{
              scale:1.02
            }}

          />



        </motion.div>



      </div>


    </section>

  );

}


export default Hero;
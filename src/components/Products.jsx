import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import sabudana from "../assets/products/sabudana.png";
import jeera from "../assets/products/jeera.png";
import tejpatta from "../assets/products/tejpatta.png";
import nakuldana from "../assets/products/nakuldana.png";
import mishri from "../assets/products/cutting-mishri.png";


function Products() {

  const products = [
    {
      name: "Premium Jeera",
      image: jeera,
      slug: "jeera",
      description:
        "Pure and aromatic jeera that adds authentic flavour to every dish."
    },
    {
      name: "Premium Tej Patta",
      image: tejpatta,
      slug: "tej-patta",
      description:
        "Naturally dried tej patta for rich aroma and traditional taste."
    },
    {
      name: "Nakuldana",
      image: nakuldana,
      slug: "nakuldana",
      description:
        "Traditional sweet nakuldana made with premium quality ingredients."
    },
    {
      name: "Cutting Mishri",
      image: mishri,
      slug: "cutting-mishri",
      description:
        "Crystal clear premium mishri for daily use and special occasions."
    }
  ];


  return (

    <section 
      id="products" 
      className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-700 mb-12"
        >
          Our Products
        </motion.h2>




        {/* FEATURED SABUDANA */}


        <motion.div

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

  className="bg-white rounded-3xl shadow-xl p-8 mb-14 max-w-4xl mx-auto text-center"

>


  {/* Image + Badge Row */}

  <div className="flex items-center justify-center gap-6">


    <img
      src={sabudana}
      alt="Nivashree Premium Sabudana"
      className="h-[500px] md:h-[600px] object-contain drop-shadow-2xl hover:scale-105 transition"
    />



    <span className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg whitespace-nowrap">

      🏆 BESTSELLER

    </span>


  </div>





  <h3 className="text-3xl font-bold text-green-800 mt-6">

    Nivashree Premium Sabudana

  </h3>




  <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">

    Premium quality sabudana with perfect texture and purity.
    Ideal for vrat recipes, khichdi, kheer and traditional dishes.

  </p>




  <Link
    to="/products/sabudana"
    className="inline-block mt-6 px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
  >

    View Details

  </Link>


</motion.div>






        {/* OTHER PRODUCTS */}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {products.map((product,index)=>(

            <motion.div

              key={product.slug}

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

              className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"

            >


              <div className="h-52 flex items-center justify-center">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain hover:scale-105 transition duration-300"
                />

              </div>



              <h3 className="text-xl font-bold text-gray-800 mt-6">
                {product.name}
              </h3>



              <p className="text-gray-600 text-sm mt-3">
                {product.description}
              </p>



              <Link
                to={`/products/${product.slug}`}
                className="inline-block mt-6 px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                View Details
              </Link>


            </motion.div>


          ))}


        </div>


      </div>

    </section>

  );
}


export default Products;
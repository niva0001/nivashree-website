import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import products from "../data/products";
import SEO from "../components/SEO";

function Products() {
  return (
    <>
      <SEO
        title="Nivashree Products | Premium Sabudana, Jeera & Food Products"
        description="Explore Nivashree Masala premium food products including high quality Sabudana, Jeera and authentic Indian ingredients."
      />

      <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold text-gray-900">
              Our Products
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality food products crafted with purity, hygiene and trust.
            </p>
          </motion.div>


          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {products.map((product, index) => (

              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >

                {/* Product Image */}
                <div className="overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-contain p-8"
                  />

                </div>


                {/* Product Info */}
                <div className="p-8">

                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>


                  <h2 className="text-2xl font-bold text-gray-900 mt-5">
                    {product.name}
                  </h2>


                  <p className="text-gray-600 mt-4 leading-7">
                    {product.description}
                  </p>


                  {/* Pack Sizes */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {product.sizes.map((size, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold"
                      >
                        {size}
                      </span>
                    ))}

                  </div>


                  {/* View Details */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
                  >
                    View Details
                    <FaArrowRight />
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Products;
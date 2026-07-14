import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import SEO from "../components/SEO";

function Recipes() {
  return (
    <>
      <SEO
        title="Sabudana Recipes | Nivashree Premium Recipes"
        description="Discover delicious Indian recipes made with Nivashree Premium Sabudana including Sabudana Kheer, Sabudana Khichdi, Sabudana Vada and more."
      />

      <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <h1 className="text-5xl font-extrabold text-green-800">
              Delicious Recipes
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Cook authentic Indian recipes with Nivashree products.
            </p>

          </motion.div>


          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


            {recipes.map((recipe, index) => (

              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-72 object-cover"
                />


                <div className="p-6">

                  <h2 className="text-2xl font-bold text-green-800">
                    {recipe.name}
                  </h2>


                  <p className="mt-3 text-gray-600">
                    {recipe.description}
                  </p>


                  <Link
                    to={`/recipes/${recipe.name.toLowerCase().replaceAll(" ", "-")}`}
                    className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    View Recipe →
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

export default Recipes;
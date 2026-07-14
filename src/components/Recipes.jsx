import { Link } from "react-router-dom";
import recipes from "../data/recipes";

function Recipes() {
  return (
    <section id="recipes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-800">
            Delicious Recipes
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Cook authentic Indian recipes with Nivashree products.
          </p>
        </div>


        {/* Featured Kheer */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

          <img
            src={recipes[0].image}
            alt={recipes[0].name}
            className="w-full max-w-lg mx-auto h-[500px] object-cover"
          />

          <div className="p-8 text-center">

            <h3 className="text-3xl font-bold text-green-800">
              {recipes[0].name}
            </h3>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              {recipes[0].description}
            </p>

            <Link
              to={`/recipes/${recipes[0].name.toLowerCase().replaceAll(" ", "-")}`}
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View Recipe →
            </Link>

          </div>

        </div>


        {/* Other Recipes */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {recipes.slice(1).map((recipe) => (

            <div
              key={recipe.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold text-green-800">
                  {recipe.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  {recipe.description}
                </p>

                <Link
                  to={`/recipes/${recipe.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="inline-block mt-4 text-orange-600 font-semibold"
                >
                  View Recipe →
                </Link>

              </div>

            </div>

          ))}

        </div>


      </div>
    </section>
  );
}

export default Recipes;
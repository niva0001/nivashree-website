import { Link } from "react-router-dom";
import recipes from "../data/recipes";

function Recipes() {
  return (
    <section id="recipes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-800">
            Delicious Recipes
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Cook authentic Indian recipes with Nivashree products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-800">
                  {recipe.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {recipe.description}
                </p>

          <Link
             to={`/recipes/${recipe.name.toLowerCase().replaceAll(" ", "-")}`}
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
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
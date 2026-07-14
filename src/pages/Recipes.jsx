import { Link } from "react-router-dom";

function Recipes() {
  const recipes = [
    {
      name: "Sabudana Khichdi",
      slug: "sabudana-khichdi",
      description:
        "A delicious vrat recipe made with premium Nivashree Sabudana, peanuts, spices and fresh ingredients.",
    },
    {
      name: "Sabudana Kheer",
      slug: "sabudana-kheer",
      description:
        "A traditional sweet recipe prepared with milk, dry fruits and premium quality sabudana.",
    },
  ];

  return (
    <section className="pt-32 min-h-screen bg-orange-50 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          Nivashree Recipes
        </h1>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Discover delicious recipes made with Nivashree Premium Sabudana.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {recipes.map((recipe) => (
            <div
              key={recipe.slug}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold text-green-700 mb-3">
                {recipe.name}
              </h2>

              <p className="text-gray-600 mb-5">
                {recipe.description}
              </p>

              <Link
                to={`/recipes/${recipe.slug}`}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                View Recipe
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Recipes;
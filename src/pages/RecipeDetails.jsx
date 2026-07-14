import { useParams, Link } from "react-router-dom";

import kheer from "../assets/recipes/sabudana-kheer.jpg";
import khichdi from "../assets/recipes/sabudana-khichdi.jpg";
import vada from "../assets/recipes/sabudana-vada.jpg";
import jeeraRice from "../assets/recipes/jeera-rice.jpg";


function RecipeDetails() {

  const { recipeName } = useParams();


  const recipes = {
    "sabudana-kheer": {
      title: "Creamy Sabudana Kheer",
      image: kheer,
      time: "25 Minutes",
      ingredients: [
        "Nivashree Premium Sabudana",
        "Milk",
        "Sugar",
        "Almonds",
        "Pistachios",
        "Cardamom"
      ],
      steps: [
        "Soak sabudana properly before cooking.",
        "Cook sabudana with milk until soft.",
        "Add sugar and cardamom for flavour.",
        "Garnish with dry fruits and serve."
      ]
    },


    "sabudana-khichdi": {
      title: "Sabudana Khichdi",
      image: khichdi,
      time: "20 Minutes",
      ingredients: [
        "Nivashree Premium Sabudana",
        "Peanuts",
        "Potatoes",
        "Cumin Seeds",
        "Green Chilli",
        "Coriander"
      ],
      steps: [
        "Soak sabudana until pearls become soft.",
        "Cook peanuts and spices.",
        "Add sabudana and mix gently.",
        "Serve hot with lemon."
      ]
    },


    "sabudana-vada": {
      title: "Crispy Sabudana Vada",
      image: vada,
      time: "30 Minutes",
      ingredients: [
        "Nivashree Premium Sabudana",
        "Potatoes",
        "Peanuts",
        "Green Chilli",
        "Spices"
      ],
      steps: [
        "Mix soaked sabudana with ingredients.",
        "Make small vada shapes.",
        "Cook until golden and crispy.",
        "Serve with chutney."
      ]
    },


    "jeera-rice": {
      title: "Jeera Rice",
      image: jeeraRice,
      time: "25 Minutes",
      ingredients: [
        "Rice",
        "Jeera",
        "Ghee",
        "Spices",
        "Fresh Coriander"
      ],
      steps: [
        "Wash and cook rice.",
        "Prepare jeera tempering.",
        "Mix rice gently.",
        "Serve hot."
      ]
    }
  };


  const recipe = recipes[recipeName];


  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Recipe Not Found
      </div>
    );
  }


  return (
    <section className="min-h-screen bg-orange-50 pt-32 py-20 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />


        <div className="p-10">

          <Link
            to="/recipes"
            className="text-green-700 font-semibold"
          >
            ← Back to Recipes
          </Link>


          <h1 className="text-5xl font-bold text-green-800 mt-6">
            {recipe.title}
          </h1>


          <p className="mt-4 text-orange-600 font-semibold">
            ⏱ Cooking Time: {recipe.time}
          </p>


          <h2 className="text-3xl font-bold text-green-800 mt-10">
            Ingredients
          </h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            {recipe.ingredients.map((item,index)=>(
              <li key={index}>
                ✔ {item}
              </li>
            ))}
          </ul>


          <h2 className="text-3xl font-bold text-green-800 mt-10">
            Preparation Method
          </h2>


          <ol className="mt-4 space-y-3 text-gray-700">
            {recipe.steps.map((step,index)=>(
              <li key={index}>
                {index+1}. {step}
              </li>
            ))}
          </ol>


        </div>

      </div>

    </section>
  );
}


export default RecipeDetails;
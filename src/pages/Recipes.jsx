import { Link } from "react-router-dom";

import kheer from "../assets/recipes/sabudana-kheer.jpg";
import khichdi from "../assets/recipes/sabudana-khichdi.jpg";
import vada from "../assets/recipes/sabudana-vada.jpg";
import jeeraRice from "../assets/recipes/jeera-rice.jpg";


function Recipes() {

  const recipes = [
    {
      name: "Creamy Sabudana Kheer",
      image: kheer,
      time: "25 Minutes",
      link: "sabudana-kheer",
    },

    {
      name: "Sabudana Khichdi",
      image: khichdi,
      time: "20 Minutes",
      link: "sabudana-khichdi",
    },

    {
      name: "Crispy Sabudana Vada",
      image: vada,
      time: "30 Minutes",
      link: "sabudana-vada",
    },

    {
      name: "Jeera Rice",
      image: jeeraRice,
      time: "25 Minutes",
      link: "jeera-rice",
    },
  ];


  return (
    <section className="min-h-screen bg-orange-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">


        <div className="text-center">

          <h1 className="text-5xl font-bold text-green-800">
            Delicious Recipes
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Explore tasty recipes made with Nivashree premium ingredients.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">


          {recipes.map((recipe,index)=>(

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 transition duration-300"
            >

              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover"
              />


              <div className="p-6">


                <h2 className="text-2xl font-bold text-green-800">
                  {recipe.name}
                </h2>


                <p className="mt-3 text-orange-600 font-semibold">
                  ⏱ {recipe.time}
                </p>


                <Link
                  to={`/recipes/${recipe.link}`}
                  className="block mt-6 text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-full font-semibold"
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
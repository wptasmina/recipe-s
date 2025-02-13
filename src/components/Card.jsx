import { useEffect, useState } from "react"; 
import { GoStopwatch} from "react-icons/go";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function Card({ addRecpeQuentity }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <div className="lg:w-2/3">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {recipes.map((recipe) => (
            <div data-aos="zoom-in" data-aos-duration="2000"
              key={recipe.recipe_id}
              className="card card-compact bg-white p-4 shadow border border-[#a7f6d53d]"
            >
              <figure>
                <img 
                  className="w-full h-52 object-cover object-center block rounded-2xl"
                  src={recipe.recipe_img}
                  alt="Recipe image"
                />
              </figure>
              <div className="space-y-2">
                <h2 className="text-xl font-bold card-title pt-4">
                  {recipe.recipe_name}
                </h2>
                <p className="text-md text-gray-500 pb-4 border-b">
                  {recipe.short_description}
                </p>
                <h3 className="text-lg font-bold">
                  Ingredients: {recipe.ingredients.length}
                </h3>
                <ul className="pl-8">
                  {recipe.ingredients.map((item, index) => (
                    <li className="list-disc text-md text-gray-500" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex lg:gap-6 gap-4">
                  <div className="inline-flex items-center">
                    <GoStopwatch className="text-lg text-[#068F56] font-bold" />
                    <p className="text-sm ml-1 font-bold text-gray-600">
                      {recipe.preparing_time} min
                    </p>
                  </div>
                  <div className="inline-flex items-center">
                    <FaFireFlameCurved className="text-lg text-[#068F56] font-bold" />
                    <p className="text-sm ml-1 font-bold text-gray-600">
                      {recipe.calories} calories
                    </p>
                  </div>
                </div>

                <div className="card-actions py-3">
                  <button
                    onClick={() => addRecpeQuentity(recipe)}
                    className="px-6 py-2 text-gray-800 bg-[#23bd7d] hover:text-white rounded-full text-md font-semibold cursor-pointer"
                  >
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

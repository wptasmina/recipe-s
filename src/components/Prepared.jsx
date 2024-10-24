

export default function Prepared({ preparedRecipe, totleTime, totleCalories }) {
  return (
    <>
      {/* Currently Cooking  */}
      <div className="overflow-x-auto py-4">
        <table className="table">
          <thead className="text-gray-800 font-bold text-md pb-4">
            <tr>
              <th className="py-4"></th>
              <th className="py-4">Name</th>
              <th className="py-4">Time</th>
              <th className="py-4">Calories</th>
            </tr>
          </thead>
          <tbody className="text-gray-400 font-semibold text-xs">
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover px-0">
                <th>{index + 1}</th>
                <td className="py-4 px-0 text-gray-600">
                  {recipe.recipe_name}
                </td>
                <td className="py-4 px-0 text-center">
                  {recipe.preparing_time}
                </td>
                <td className="py-4 px-0 text-center">{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-around md:py-10 py-6 border-t ">
          <p className=" text-gray-600 md:text-lg text-xs font-bold md:font-semibold">
            Totle Time: {totleTime}
          </p>
          <p className=" text-gray-600 md:text-lg text-xs font-bold md:font-semibold">
            Totle Calories: {totleCalories}
          </p>
        </div>
      </div>
    </>
  );
}



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
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td className="py-4 text-gray-600">{recipe.recipe_name}</td>
                <td className="py-4 text-center">{recipe.preparing_time}</td>
                <td className="py-4 text-center">{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td className="py-4 text-gray-700 text-md">
                Totle Time: {totleTime}
              </td>
              <td className="py-4 text-gray-700 text-md">
                Totle Calories: {totleCalories}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

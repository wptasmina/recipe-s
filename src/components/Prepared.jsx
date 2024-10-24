

export default function Prepared({ preparedRecipe }) {
  return (
    <>
      {/* Currently Cooking  */}
      <div className="overflow-x-auto py-6">
        <table className="table">
          <thead className="text-gray-800 font-bold text-md pb-4">
            <tr>
              <th className="p-1"></th>
              <th className="p-1">Name</th>
              <th className="p-1">Time</th>
              <th className="p-1">Calories</th>
            </tr>
          </thead>
          <tbody className="text-gray-400 font-semibold text-xs">
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td className="p-1 text-gray-600">{recipe.recipe_name}</td>
                <td className="p-1 text-center">{recipe.preparing_time}</td>
                <td className="p-1 text-center">{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

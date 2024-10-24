

export default function RecipesTable({
  recipeQuentity,
  handleRemove

  
}) {
  return (
    <>
      <div className="overflow-x-auto py-4">
        <table className="table">
          {/* head */}
          <thead className="text-gray-800 font-bold text-md">
            <tr>
              <th className="py-4"></th>
              <th className="py-4">Name</th>
              <th className="py-4">Time</th>
              <th className="py-4">Calories</th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody className="text-gray-400 font-semibold text-xs">
            {recipeQuentity.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td className="py-4 text-gray-600">{recipe.recipe_name}</td>
                <td className="py-4 text-center">{recipe.preparing_time}</td>
                <td className="py-4 text-center">{recipe.calories}</td>
                <td className="p-0">
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      
                    }}
                    className="px-3 py-1 text-gray-800 bg-[#29be80] rounded-full text-md font-semibold cursor-pointer"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

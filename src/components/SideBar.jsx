
import RecipesTable from "./RecipesTable";
import Prepared from './Prepared';


export default function SideBar({
  recipeQuentity,
  handleRemove,
  preparedRecipe,
  calculateTimeandCalorise,
  totleTime,
  totleCalories,
}) {
  return (
    <div className="md:w-1/3 bg-white p-4 shadow border border-[#a7f6d53d] rounded-xl">
      <div>
        <h2 className="text-gray-800 text-lg text-center font-bold border-b pb-4">
          Want To Cook: {recipeQuentity.length}
        </h2>
      </div>
      {/* Recipes Tabile Srart */}
      <RecipesTable
        recipeQuentity={recipeQuentity}
        handleRemove={handleRemove}
      />
      {/* Prepared Currently Cooking  */}
      <div className="mt-10 border-t-2 border-dashed pt-6">
        <h2 className="text-gray-800 text-lg text-center font-bold border-b pb-4">
          Currently Cooking: {preparedRecipe.length}
        </h2>
      </div>
      <Prepared
        preparedRecipe={preparedRecipe}
        
        totleTime={totleTime}
        totleCalories={totleCalories}
      />
    </div>
  );
}

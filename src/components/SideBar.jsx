
import RecipesTable from "./RecipesTable";
import Prepared from './Prepared';


export default function SideBar({ recipeQuentity, handleRemove, preparedRecipe }) {
  return (
    <div className="md:w-1/3 bg-white p-4 shadow border border-[#a7f6d53d] rounded-xl">
      <div>
        <h2 className="text-gray-800 text-lg text-center font-bold border-b pb-6">
          Want To Cook: {recipeQuentity.length}
        </h2>
      </div>
      {/* Recipes Tabile Srart */}
      <RecipesTable
        recipeQuentity={recipeQuentity}
        handleRemove={handleRemove}
      />
      
      {/* Prepared Currently Cooking  */}
      <div className="mt-10">
        <h2 className="text-gray-800 text-lg text-center font-bold border-b pb-4">
          Currently Cook: {preparedRecipe.length}
        </h2>
      </div>
      <Prepared preparedRecipe={preparedRecipe} />
    </div>
  );
}

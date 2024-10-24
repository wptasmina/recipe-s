import { useState } from "react";
import Card from "./Card";
import SideBar from "./SideBar";


export default function CardContainer() {
  // SideBar card start //
  const [recipeQuentity, setRecipeQuentity] = useState([]);
  const addRecpeQuentity = (recipe) =>{    
    const isExist = recipeQuentity.find(prvRecipe => prvRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQuentity([...recipeQuentity, recipe]);
    }else{
      alert('Recipe already Existe')
    }
  }

  //  SideBar prepared Remove Button start //
  const [preparedRecipe, setPreparedRecipe] = useState([]);

  const handleRemove = (id) =>{
    const deleteRecipe = recipeQuentity.find(recipe => recipe.recipe_id === id)

    //remove from want to cook table 
    const updateQuentity = recipeQuentity.filter(recipe => recipe.recipe_id !== id)
    setRecipeQuentity(updateQuentity);
    setPreparedRecipe([...preparedRecipe, deleteRecipe]);
  }

  return (
    <>
      <section className="min-h-screen space-y-5 mb-10">
        <div className="text-center md:w-2/3 mx-auto">
          <h2 className="text-black font-bold lg:text-4xl text-2xl">
            Our <span className="text-[#02B76C]">Recipe</span>
          </h2>
          <p className="text-gray-500 font-bold lg:text-lg text-md py-4">
            Easy dinner recipes the Good Food today Save yourself stress in the
            kitchen with our easy dinner ideas, from fresh tacos and hearty
            pasta bakes to warming curries and simple traybakes everyone will
            love.
          </p>
        </div>

        {/* Card Section Start */}

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <Card addRecpeQuentity={addRecpeQuentity} />
          <SideBar
            recipeQuentity={recipeQuentity}
            handleRemove={handleRemove}
            preparedRecipe={preparedRecipe}
          />
        </div>
      </section>
    </>
  );
}
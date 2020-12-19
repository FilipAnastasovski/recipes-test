import React from "react"
import Recipe from "./components/Recipe"
import recipesData from "./components/recipesData"
import NavBar from "./components/Navbar"


function App() {

  const recipeComponents = recipesData.map(recipe => <Recipe key={recipe.id} 
                                                             id={recipe.id} 
                                                             name={recipe.name}
                                                             link={recipe.link}
                                                             numOfIng={recipe.numberOFingredients}
                                                             ing={recipe.ingredients}
                                                             instructions={recipe.instructions}
                                                             prepTimeH={recipe.prepTimeHours}
                                                             prepTimeM={recipe.prepTimeMin}
                                                              />)

 return <div> 
   <NavBar />
   <table>
          <thead>
            <tr>
               <th>Id</th>
               <th>name</th>
               <th>link</th>
               <th>number of ingredients</th>
               <th>list of ingredients</th>
               <th>preparation time</th>
               <th>instructions</th>

             </tr>
           </thead>
               {recipeComponents} 
    </table>
         </div>
     
}

export default App;

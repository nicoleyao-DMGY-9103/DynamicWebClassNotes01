import React from 'react'

import './RecipeCard/components/RecipeCard.css'
import RECIPE_IMG from './assets/pancake.png'
import {RECIPE} from './RecipeCard/components/recipe-data'

//function App() {
   //return <div>Hello App!</div>
 //}

const App = () => {
    return (
        <div className="card">
          <img src={RECIPE_IMG} alt="yummy pancake" />
    
          <h2>{RECIPE.title}</h2>
          <p>{RECIPE.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {RECIPE.ingredients.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
    
          <h3>Instructions</h3>
          <ol>
            {RECIPE.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )

}



export default App


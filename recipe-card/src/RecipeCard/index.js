import React from 'react'
import RECIPE_IMG from '../assets/pancake.png'

function RecipeCard({ title, description, imageSrc = RECIPE_IMG }) {
  return (
    <div className="recipe-card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default RecipeCard
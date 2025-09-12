import React from 'react'
import RecipeCard from '../RecipeCard/index'

const recipes = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    description: 'Fluffy pancakes with butter and maple syrup.'
  },
  {
    id: 2,
    title: 'Avocado Toast',
    description: 'Toasted sourdough topped with smashed avocado.'
  },
  {
    id: 3,
    title: 'Berry Smoothie',
    description: 'Mixed berries blended with yogurt.'
  }
]

function App() {
  return (
    <div>
      {recipes.map(({ id, title, description }) => (
        <RecipeCard key={id} title={title} description={description} />
      ))}
    </div>
  )
}

export default App
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const RecipeDetails = ({ recipes }) => {
  // Extract id from URL parameter
  const { id } = useParams();

  // Find the recipe with the matching id
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  // Render recipe details if found, or show a message if not found
  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <Typography variant="h2">{recipe.title}</Typography>
          <Typography variant="body1">Description: {recipe.description}</Typography>
          <Typography variant="body1">Prep Time: {recipe.prepTime}</Typography>
          <Typography variant="h3">Ingredients:</Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h3">Instructions:</Typography>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </>
      ) : (
        <Typography variant="body1">Recipe not found</Typography>
      )}
    </div>
  );
};

export default RecipeDetails;

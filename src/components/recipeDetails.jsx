import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import '../styles/recipeDetails.css';

const RecipeDetails = ({ recipes }) => {
  // Extract id from URL parameter
  const { id } = useParams();

  // Find the recipe with the matching id
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  // Render recipe details if found, or show a message if not found
  return (
    <div className="recipe-details">
      <div className="recipe-details-content">
        {recipe ? (
          <>
            <Typography variant="h3">{recipe.title}</Typography>
            <Typography variant="body1">Description: {recipe.description}</Typography>
            <Typography variant="body1">Prep Time: {recipe.prepTime}</Typography>
            <Typography variant="h4">Ingredients:</Typography>
            <List className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index} className="ingredients-list-item" disablePadding>
                  <ListItemText primary={ingredient} className="ingredients-text" />
                </ListItem>
              ))}
            </List>
            <Typography variant="h4">Instructions:</Typography>
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
      <div className="recipe-video">
        {/* Replace 'VIDEO_ID' with the actual ID of your YouTube video */}
        <iframe
          width="560"
          height="315"
          src={recipe.youtubeUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      
    </div>
    
  );
};

export default RecipeDetails;

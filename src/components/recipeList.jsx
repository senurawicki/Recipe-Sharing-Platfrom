import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Pagination } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/recipeList.css'; // Import CSS file


// Import images for each recipe
import SpagattiImage from '../assets/recipe/spagatti.jpg'; // Adjust the path accordingly for each image
import ChickenTikka from '../assets/recipe/chickentikka.jpg';
import MushroomRisoto from '../assets/recipe/mushroomrisoto.jpg';
import BeefTacos from '../assets/recipe/beeftacos.jpg';
import Vegitablefry from '../assets/recipe/vegetablefry.jpg';
import Capressalad from '../assets/recipe/capressalad.png';
import ChocoChip from '../assets/recipe/chocochip.jpg';

// Function to map recipe ID to its corresponding image
const getImageForRecipe = (recipeId) => {
  switch (recipeId) {
    case 1:
      return SpagattiImage; // Replace with the appropriate image for each recipe
    case 2:
      return ChickenTikka;
    case 3:
      return MushroomRisoto;
    case 4:
      return BeefTacos; 
    case 5:
      return Vegitablefry; 
    case 6:
      return Capressalad;   
    case 7:
      return ChocoChip;    
    default:
      return 'path_to_default_image_if_needed';
  }
};

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='Recipebody'>
      <Card className="recipe-card" sx={{color:'black' }}>
        {/* Card header */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {recipe.title.charAt(0)}
            </Avatar>
          }
          title={recipe.title}
          subheader={recipe.date}
        />
        {/* Make the image clickable and navigate to recipe details page */}
        <Link to={`/recipes/${recipe.id}`} className="recipe-link">
          {/* Recipe image */}
          <CardMedia
            component="img"
            height="194"
            image={getImageForRecipe(recipe.id)} // Display recipe image dynamically
            alt={recipe.title}
          />
        </Link>
        {/* Recipe description */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
        {/* Card actions */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            aria-label="show more"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            className="expand-button"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {/* Recipe instructions */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instructions:</Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.instructions}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
};

const RecipeList = ({ recipes }) => {
  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Calculate pagination range
  const startIndex = (page - 1) * 6;
  const endIndex = Math.min(startIndex + 6, recipes.length);
  const paginatedRecipes = recipes.slice(startIndex, endIndex);

  return (
    <div className="recipe-list-container">
      <div className="recipe-list">
        {paginatedRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(recipes.length / 6)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          className="pagination"
        />
      </div>
    </div>
  );
};

export default RecipeList;

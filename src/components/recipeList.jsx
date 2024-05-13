import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Pagination } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/recipeList.css'; // Import CSS file

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='Recipebody'>
      <Card className="recipe-card" sx={{ marginBottom: '20px' }}>
        <Link to={`/recipes/${recipe.id}`} className="recipe-link"> {/* Apply recipe-link class */}
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {recipe.title.charAt(0)}
              </Avatar>
            }
            title={recipe.title}
            subheader={recipe.date}
          />
        </Link>
        <CardMedia
          component="img"
          height="194"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
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
    <div className="recipe-list">
      {paginatedRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      <Pagination
        count={Math.ceil(recipes.length / 6)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        className="pagination"
      />
    </div>
  );
};

export default RecipeList;

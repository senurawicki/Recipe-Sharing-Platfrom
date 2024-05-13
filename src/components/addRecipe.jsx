import React, { useState } from 'react';
import { Typography, TextField, TextareaAutosize, Button } from '@mui/material';

const AddRecipe = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prepTime: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert ingredients and instructions to arrays
    const newRecipe = {
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
      instructions: formData.instructions.split('\n').map(instruction => instruction.trim())
    };
    // Pass new recipe data to the parent component
    onAdd(newRecipe);
    // Clear form fields after submission
    setFormData({
      title: '',
      description: '',
      prepTime: '',
      ingredients: '',
      instructions: ''
    });
  };

  return (
    <div className="add-recipe">
      <Typography variant="h2">Add New Recipe</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <Typography>Title:</Typography>
          <TextField
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Typography>Description:</Typography>
          <TextareaAutosize
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rowsMin={3}
          />
        </div>
        <div>
          <Typography>Prep Time:</Typography>
          <TextField
            type="text"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Typography>Ingredients (separated by commas):</Typography>
          <TextareaAutosize
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            rowsMin={3}
          />
        </div>
        <div>
          <Typography>Instructions (each step on a new line):</Typography>
          <TextareaAutosize
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            rowsMin={3}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipe;

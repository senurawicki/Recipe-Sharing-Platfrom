// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes component
import Header from './components/header';
import RecipeList from './components/recipeList';
import recipesData from './data/recipes.json'; // Import your recipe data
import RecipeDetails from './components/recipeDetails';
import AddRecipe from './components/addRecipe';
import UserProfile from './components/userProfile';
import Home from './components/home';
import LoginPage from './components/login';
import SignupPage from './components/signup';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Use Routes component here */}
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<RecipeList recipes={recipesData} />} /> {/* Use element prop to specify component */}
          <Route path="/recipes/:id" element={<RecipeDetails recipes={recipesData} />} /> {/* Pass recipesData to RecipeDetails */}
          <Route path="/addrecipe" element={<AddRecipe/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

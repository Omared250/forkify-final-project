import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import { async } from 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 1). Loading recipe
    await model.loadRecipe(id);

    //2). Rendering Recepi
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError(); 
  }
};

const controlSearch = async function() {
  try {
    await model.loadSearchResults();
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};
controlSearch();

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();

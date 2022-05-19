import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

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

const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();

    if(!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();

import * as model from './module.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

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
    alert(err)
  }
};

// Adding events to the page to see if the hash changed or the page load
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
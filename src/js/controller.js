import * as model from './model.js';
import recipeView from './view/recipeview.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');
const searchbutton = document.querySelector('.search__btn');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = '5ed6604591c37cdc054bcd09';
    recipeView.renderSpinner();

    // 1. loading recipe
    await model.loadrecipe(id);

    // 2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

controlRecipes();

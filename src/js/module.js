import { API_URL } from "./cofig.js";
import { getJSON } from "./helpers.js";

export const state = {
    recipe : {},
};

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`)
    
        const { recipe } = data.data;
    
        state.recipe = {
          id : recipe.id,
          title : recipe.title,
          publisher : recipe.publisher,
          sourceUrl : recipe.source_url,
          image : recipe.image_url,
          servings : recipe.servings,
          cookinTime : recipe.cooking_time,
          ingredients : recipe.ingredients
        }
        
    } catch (err) {
        // Temp error handling
        console.error(`${err} 🔥🔥🔥🔥🔥`);
    }
}
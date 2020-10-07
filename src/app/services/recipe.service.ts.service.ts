import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  currentRecipe = new EventEmitter<Recipe>();
  private recipeItem: Recipe;

  private recipes: Recipe[] = [
    new Recipe('Test recipe', [new Ingredient('tomatoes', 3, 'each'), new Ingredient('onions', 200, 'g'), new Ingredient('eggs', 3, 'each')], 'amazing recipe',
    'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg'),
    new Recipe('Amazing recipe', [new Ingredient('butter', 500, 'g'), new Ingredient('culo', 200, 'g'), new Ingredient('roba', 3, 'each')], 'Tasty recipe',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg')
  ];


  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeItem(): Recipe {
    return this.recipeItem;
  }

  updateRecipeItem(recipe: Recipe): void{
    this.recipeItem = recipe;
  }

  constructor() { }
}

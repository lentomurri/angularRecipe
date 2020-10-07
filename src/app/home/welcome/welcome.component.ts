import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

// MODELS
import { Recipe } from 'src/app/models/recipe.model';

// SERVICES
import { RecipeService } from 'src/app/services/recipe.service.ts.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['../../app.component.css', './welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  featured: Recipe;
  ftIngredient: Ingredient;

  ngOnInit(): void {
    const recipes = this.recipeService.getRecipes();
    this.featured = recipes[Math.floor(Math.random() * (recipes.length))];
    this.ftIngredient = this.featured.ingredients[Math.floor(Math.random() * (this.featured.ingredients.length))];
  }

}

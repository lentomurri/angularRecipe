import { Component, OnInit } from '@angular/core';

// MODELS
import { Recipe } from '../../models/recipe.model';

// SERVICES
import { RecipeService } from '../../services/recipe.service.ts.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['../../app.component.css', './recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {
   }

  recipes: Recipe[];

  ngOnInit(): void{
    this.recipes = this.recipeService.getRecipes();
  }

}

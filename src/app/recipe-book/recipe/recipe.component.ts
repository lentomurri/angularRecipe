import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../services/recipe.service.ts.service';
import { ShoppingService } from '../../services/shopping.service.ts.service';

import { Recipe } from '../../models/recipe.model';
import { ParseError } from '@angular/compiler';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService, private route: ActivatedRoute) { }

  recipes = this.recipeService.getRecipes();
  currentRecipe: Recipe;

  onAdd(): void {
    for (const ingredient of this.currentRecipe[0].ingredients) {
      this.shoppingService.addIngredient(ingredient);
    }
  }


  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.currentRecipe = this.recipes[id];

    this.route.params.subscribe(
      (params: Params) => {
        this.currentRecipe = this.recipes[+params.id];
      });
  }
}

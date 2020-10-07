import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit} from '@angular/core';
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service.ts.service';
import { ShoppingService } from '../../services/shopping.service.ts.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./../../app.component.css', './recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService, private router: Router, private route: ActivatedRoute) { }

  shoppingList: Ingredient[];
  list: string[];
  currentItem: Recipe;

  id: number;

  onAddShopping(): void {
    for (const ingredient of this.currentItem.ingredients) {
      if (this.list.indexOf(ingredient.name) > -1) {
        this.shoppingList.map((e) => {if (e.name === ingredient.name) {
          e.amount += ingredient.amount;
        }});
      }
      else {
        this.shoppingList.push(new Ingredient(ingredient.name, ingredient.amount, ingredient.measure));
      }
    }
  }

  onThisRecipe(): void {
    this.router.navigate(['/recipes', this.id], {relativeTo: this.route});
  }

  ngOnInit(): void {
    this.shoppingList = this.shoppingService.getIngredients();
    this.list = this.shoppingService.getList();

    const recipes = this.recipeService.getRecipes();
    this.id = +this.route.snapshot.params.id;
    this.currentItem = recipes[this.id];

    this.route.params.subscribe(
      (params: Params) => {
        this.currentItem = recipes[params.id];
        this.id = +params.id;
      }
    );
  }
}

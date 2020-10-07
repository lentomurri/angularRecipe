import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateGuard } from 'src/app/can-deactivate.guard';

// MODELS
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';

// SERVICE
import { RecipeService } from 'src/app/services/recipe.service.ts.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})

// CanDeactivate<CanDeactivateGuard>
export class RecipeFormComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) { }

  @ViewChild('recipeName') recipeName: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('imagePath') imagePath: ElementRef;
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @ViewChild('measure') measure: ElementRef;

  recipes: Recipe[];
  newRecipeIngredients: Ingredient[] = [];
  changesSaved = false;

  onAddIngredient(): void {
    const ingredientName = this.ingredientName.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const measure = this.measure.nativeElement.value;
    this.newRecipeIngredients.push(new Ingredient(ingredientName, amount, measure));
    this.ingredientName.nativeElement.value = '';
    this.amount.nativeElement.value = 0;
    this.measure.nativeElement.value = '';
  }

  onSubmitNewRecipe(): void {
    const recipeName = this.recipeName.nativeElement.value;
    const description = this.description.nativeElement.value;
    const newImagePath = this.imagePath.nativeElement.value;

    if (this.newRecipeIngredients.length > 0) {
      this.recipes.push(new Recipe(recipeName, this.newRecipeIngredients, description, newImagePath));
      this.newRecipeIngredients = [];
      this.changesSaved = true;
      this.router.navigate(['/recipes']);
    } else {
      alert('Please insert at least one ingredient');
    }
  }

  // the interface guides us about the construction and makes sure we have the data we need
  // canDeactivate(): Observable<boolean> | Promise <boolean> | boolean {
    // the logic will be based on how every component wants the logic to work



  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}

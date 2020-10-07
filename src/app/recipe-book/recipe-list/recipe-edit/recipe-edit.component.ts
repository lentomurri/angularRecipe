import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { timingSafeEqual } from 'crypto';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service.ts.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

constructor(private rs: RecipeService, private route: ActivatedRoute) { }

recipe: Recipe;
hidden = true;
newIngredients = [];

@ViewChildren('ingredients') ingredients: QueryList<ElementRef>;
@ViewChildren('extra') newExtra: QueryList<ElementRef>;

  ngOnInit(): void {
    const recipes = this.rs.getRecipes();
    let id = this.route.snapshot.params.id;

    this.recipe = recipes[id];

    this.route.params.subscribe(
      (params: Params) => {
        id = params.id;
      }
      );
  }

  onAdd(): void {
    let specs = [];
    let empty = false;
    this.newExtra.forEach((item: ElementRef) => {
      item.nativeElement.childNodes.forEach((input: any) => {
          if (input.value  === '') {
            empty = true;
          }
           else  {
            specs.push(input.value);
          }
        }
      );
      if (empty === false) {
        this.recipe.ingredients.push(new Ingredient(specs[0], specs[1], specs[2]));
      }
      else {
        alert('Please provide all info for the new Ingredient');
        specs = [];
        empty = false;
      }
    });
    const div = document.querySelector('#extra');
  }

  onSubmit(): void {
    this.ingredients.forEach((item: ElementRef, index: number) => {
      const specs = [];
      item.nativeElement.childNodes.forEach((input: any) => {
      specs.push(input.value); }
      );
      this.recipe.ingredients[index] = new Ingredient(specs[0], specs[1], specs[2]);
    });
    alert('All Ingredients submitted!');
  }
}

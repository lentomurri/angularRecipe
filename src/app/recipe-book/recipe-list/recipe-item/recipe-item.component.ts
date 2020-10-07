import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// MODELS
import { Recipe } from './../../../models/recipe.model';

// SERVICES
import { RecipeService} from '../../../services/recipe.service.ts.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['../../../app.component.css', './recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;
  id = 0;

  recipes: Recipe[];
  addRecipe = false;

  onNewRecipe(): void {
    this.addRecipe = !this.addRecipe;
    this.addRecipe === true ? this.router.navigate(['add'], {relativeTo: this.route}) : this.router.navigate(['/recipes']);
  }

  onEditRecipe(): void {
    this.router.navigate(['/recipes/detail/', this.id, 'edit']);
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}

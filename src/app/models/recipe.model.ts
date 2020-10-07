import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(public name: string, public ingredients: Ingredient[], public description: string, public imagePath: string)
  {
  }
}
